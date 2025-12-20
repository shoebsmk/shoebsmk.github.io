/**
 * Three.js Scene Module
 * 
 * Creates and manages a 3D scene with floating geometric shapes that respond to mouse movement.
 * The scene is rendered as a background layer behind the main content.
 * 
 * @module three-scene
 * @requires three
 */

import * as THREE from 'three'

/**
 * Three.js scene configuration constants
 * @constant {Object}
 */
const SCENE_CONFIG = {
  /** Container ID for Three.js canvas */
  CONTAINER_ID: 'three-canvas-container',
  /** Camera field of view in degrees */
  CAMERA_FOV: 75,
  /** Camera near clipping plane */
  CAMERA_NEAR: 0.1,
  /** Camera far clipping plane */
  CAMERA_FAR: 1000,
  /** Camera Z position */
  CAMERA_Z_POSITION: 10,
  /** Number of shapes to create */
  SHAPE_COUNT: 15,
  /** Position range multiplier */
  POSITION_RANGE: 20,
  /** Z position range multiplier */
  Z_POSITION_RANGE: 10,
  /** Scale range minimum */
  SCALE_MIN: 0.3,
  /** Scale range maximum */
  SCALE_MAX: 0.8,
  /** Rotation speed range */
  ROTATION_SPEED_RANGE: 0.02,
  /** Mouse interpolation factor */
  MOUSE_INTERPOLATION: 0.05,
  /** Camera movement multiplier */
  CAMERA_MOVEMENT_MULTIPLIER: 2,
  /** Floating animation speed */
  FLOATING_SPEED: 0.001,
  /** Floating movement amplitude */
  FLOATING_AMPLITUDE: 0.002
}

/**
 * Shape geometry definitions
 * @constant {Array<Function>}
 */
const SHAPE_GEOMETRIES = [
  () => new THREE.BoxGeometry(1, 1, 1),
  () => new THREE.SphereGeometry(0.5, 16, 16),
  () => new THREE.ConeGeometry(0.5, 1, 8),
  () => new THREE.TetrahedronGeometry(0.7),
  () => new THREE.OctahedronGeometry(0.6)
]

/**
 * Shape material colors (hex values)
 * @constant {Array<number>}
 */
const SHAPE_COLORS = [
  0x3730a3, // Indigo
  0xb91c1c, // Red
  0x0e7490, // Cyan
  0xb45309, // Orange
  0x047857  // Green
]

/**
 * Global Three.js scene state
 * @type {Object}
 */
const sceneState = {
  /** Three.js scene instance */
  scene: null,
  /** Three.js camera instance */
  camera: null,
  /** Three.js renderer instance */
  renderer: null,
  /** Array of shape meshes */
  shapes: [],
  /** Current mouse position (normalized) */
  mouse: { x: 0, y: 0 },
  /** Target camera position (normalized) */
  target: { x: 0, y: 0 },
  /** Whether the animation loop is currently paused */
  isPaused: false
}

/**
 * Create container element for Three.js canvas
 * 
 * @returns {HTMLElement} Container element
 */
function createCanvasContainer() {
  if (document.getElementById(SCENE_CONFIG.CONTAINER_ID)) {
    return document.getElementById(SCENE_CONFIG.CONTAINER_ID)
  }
  const container = document.createElement('div')
  container.id = SCENE_CONFIG.CONTAINER_ID
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
    opacity: 0.6;
  `
  document.body.appendChild(container)
  return container
}

/**
 * Initialize Three.js scene, camera, and renderer
 * 
 * @param {HTMLElement} container - Container element for canvas
 * @returns {void}
 */
function initializeThreeJS(container) {
  sceneState.scene = new THREE.Scene()

  sceneState.camera = new THREE.PerspectiveCamera(
    SCENE_CONFIG.CAMERA_FOV,
    window.innerWidth / window.innerHeight,
    SCENE_CONFIG.CAMERA_NEAR,
    SCENE_CONFIG.CAMERA_FAR
  )

  sceneState.renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  })

  sceneState.renderer.setSize(window.innerWidth, window.innerHeight)
  sceneState.renderer.setClearColor(0x000000, 0)
  sceneState.renderer.setPixelRatio(window.devicePixelRatio)

  container.appendChild(sceneState.renderer.domElement)
  sceneState.camera.position.z = SCENE_CONFIG.CAMERA_Z_POSITION
}

/**
 * Create materials for shapes
 * 
 * @returns {Array<THREE.MeshBasicMaterial>} Array of materials
 */
function createMaterials() {
  return SHAPE_COLORS.map(color =>
    new THREE.MeshBasicMaterial({
      color: color,
      wireframe: true
    })
  )
}

/**
 * Create a random floating shape
 * 
 * @param {Array<Function>} geometries - Geometry creation functions
 * @param {Array<THREE.MeshBasicMaterial>} materials - Material array
 * @returns {THREE.Mesh} Created shape mesh
 */
function createRandomShape(geometries, materials) {
  const geometryIndex = Math.floor(Math.random() * geometries.length)
  const materialIndex = Math.floor(Math.random() * materials.length)

  const geometry = geometries[geometryIndex]()
  const material = materials[materialIndex]
  const shape = new THREE.Mesh(geometry, material)

  // Random position
  shape.position.x = (Math.random() - 0.5) * SCENE_CONFIG.POSITION_RANGE
  shape.position.y = (Math.random() - 0.5) * SCENE_CONFIG.POSITION_RANGE
  shape.position.z = (Math.random() - 0.5) * SCENE_CONFIG.Z_POSITION_RANGE

  // Random rotation speed
  shape.rotationSpeed = {
    x: (Math.random() - 0.5) * SCENE_CONFIG.ROTATION_SPEED_RANGE,
    y: (Math.random() - 0.5) * SCENE_CONFIG.ROTATION_SPEED_RANGE,
    z: (Math.random() - 0.5) * SCENE_CONFIG.ROTATION_SPEED_RANGE
  }

  // Random scale
  const scale = Math.random() * (SCENE_CONFIG.SCALE_MAX - SCENE_CONFIG.SCALE_MIN) + SCENE_CONFIG.SCALE_MIN
  shape.scale.set(scale, scale, scale)

  // Store original position for stable floating animation (prevents drifting)
  shape.originalPosition = shape.position.clone()

  return shape
}

/**
 * Create all floating shapes
 * 
 * @returns {void}
 */
function createShapes() {
  const materials = createMaterials()

  for (let i = 0; i < SCENE_CONFIG.SHAPE_COUNT; i++) {
    const shape = createRandomShape(SHAPE_GEOMETRIES, materials)
    sceneState.shapes.push(shape)
    sceneState.scene.add(shape)
  }
}

/**
 * Handle mouse move events
 * 
 * @param {MouseEvent} event - Mouse move event
 * @returns {void}
 */
function handleMouseMove(event) {
  sceneState.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  sceneState.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}

/**
 * Update camera position based on mouse movement
 * 
 * @returns {void}
 */
function updateCamera() {
  // Smooth mouse following
  sceneState.target.x += (sceneState.mouse.x - sceneState.target.x) * SCENE_CONFIG.MOUSE_INTERPOLATION
  sceneState.target.y += (sceneState.mouse.y - sceneState.target.y) * SCENE_CONFIG.MOUSE_INTERPOLATION

  // Update camera position with smooth interpolation
  sceneState.camera.position.x += (
    sceneState.target.x * SCENE_CONFIG.CAMERA_MOVEMENT_MULTIPLIER -
    sceneState.camera.position.x
  ) * SCENE_CONFIG.MOUSE_INTERPOLATION

  sceneState.camera.position.y += (
    sceneState.target.y * SCENE_CONFIG.CAMERA_MOVEMENT_MULTIPLIER -
    sceneState.camera.position.y
  ) * SCENE_CONFIG.MOUSE_INTERPOLATION

  sceneState.camera.lookAt(sceneState.scene.position)
}

/**
 * Update shape rotations and floating animation
 * 
 * @param {number} time - Current animation time in milliseconds
 * @returns {void}
 */
function updateShapes(time) {
  sceneState.shapes.forEach((shape) => {
    // Rotate shapes
    shape.rotation.x += shape.rotationSpeed.x
    shape.rotation.y += shape.rotationSpeed.y
    shape.rotation.z += shape.rotationSpeed.z

    // Add stable floating movement relative to original position
    const floatOffset = Math.sin(
      time * SCENE_CONFIG.FLOATING_SPEED + shape.originalPosition.x
    ) * SCENE_CONFIG.FLOATING_AMPLITUDE * 100 // Increased multiplier for visible effect since it's no longer additive

    shape.position.y = shape.originalPosition.y + floatOffset
  })
}

/**
 * Animation loop
 * 
 * @param {number} time - Current animation time from requestAnimationFrame
 * @returns {void}
 */
function animate(time) {
  requestAnimationFrame(animate)

  // Optimization: Skip rendering if the scene is not in view
  if (sceneState.isPaused) return

  updateCamera()
  updateShapes(time)
  sceneState.renderer.render(sceneState.scene, sceneState.camera)
}

/**
 * Handle window resize
 * 
 * @returns {void}
 */
function handleResize() {
  sceneState.camera.aspect = window.innerWidth / window.innerHeight
  sceneState.camera.updateProjectionMatrix()
  sceneState.renderer.setSize(window.innerWidth, window.innerHeight)
}

/**
 * Initialize IntersectionObserver to pause animation when not visible
 * 
 * @param {HTMLElement} container - Container element to observe
 * @returns {void}
 */
function initObserver(container) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      sceneState.isPaused = !entry.isIntersecting
    })
  }, { threshold: 0.1 })

  observer.observe(container)
}

/**
 * Initialize Three.js scene with floating geometric shapes
 * 
 * Creates a 3D background scene with animated shapes that respond to mouse movement.
 * The scene is rendered behind all other content.
 * 
 * @function initThreeScene
 * @returns {void}
 * 
 * @example
 * // Call on page load (only on pages with #home or #projects-page)
 * initThreeScene()
 */
export function initThreeScene() {
  const container = createCanvasContainer()
  initializeThreeJS(container)
  createShapes()

  // Initialize observer to pause animation when not in view
  initObserver(container)

  // Mouse interaction
  document.addEventListener('mousemove', handleMouseMove)

  // Start animation loop
  animate()

  // Handle window resize
  window.addEventListener('resize', handleResize)
}

