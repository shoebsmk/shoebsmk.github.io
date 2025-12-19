import * as THREE from 'three'

let scene, camera, renderer, shapes = []
let mouse = { x: 0, y: 0 }
let target = { x: 0, y: 0 }

export function initThreeScene() {
  // Create container for Three.js canvas
  const canvasContainer = document.createElement('div')
  canvasContainer.id = 'three-canvas-container'
  canvasContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -1; pointer-events: none;'
  document.body.appendChild(canvasContainer)

  // Scene setup
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(window.devicePixelRatio)
  canvasContainer.appendChild(renderer.domElement)

  // Create floating geometric shapes
  const geometries = [
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.ConeGeometry(0.5, 1, 8),
    new THREE.TetrahedronGeometry(0.7),
    new THREE.OctahedronGeometry(0.6)
  ]

  const materials = [
    new THREE.MeshBasicMaterial({ color: 0x3730a3, wireframe: true }),
    new THREE.MeshBasicMaterial({ color: 0xb91c1c, wireframe: true }),
    new THREE.MeshBasicMaterial({ color: 0x0e7490, wireframe: true }),
    new THREE.MeshBasicMaterial({ color: 0xb45309, wireframe: true }),
    new THREE.MeshBasicMaterial({ color: 0x047857, wireframe: true })
  ]

  // Create multiple shapes
  for (let i = 0; i < 15; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)]
    const material = materials[Math.floor(Math.random() * materials.length)]
    const shape = new THREE.Mesh(geometry, material)

    shape.position.x = (Math.random() - 0.5) * 20
    shape.position.y = (Math.random() - 0.5) * 20
    shape.position.z = (Math.random() - 0.5) * 10

      shape.rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      }

    const scale = Math.random() * 0.5 + 0.3
    shape.scale.set(scale, scale, scale)

    shapes.push(shape)
    scene.add(shape)
  }

  camera.position.z = 10

  // Mouse interaction
  document.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  })

  // Animation loop
  function animate() {
    requestAnimationFrame(animate)

    // Smooth mouse following (matching inspiration)
    target.x += (mouse.x - target.x) * 0.05
    target.y += (mouse.y - target.y) * 0.05

    // Update camera position based on mouse - smooth interpolation
    camera.position.x += (target.x * 2 - camera.position.x) * 0.05
    camera.position.y += (target.y * 2 - camera.position.y) * 0.05
    camera.lookAt(scene.position)

    // Rotate shapes
    shapes.forEach((shape) => {
      shape.rotation.x += shape.rotationSpeed.x
      shape.rotation.y += shape.rotationSpeed.y
      shape.rotation.z += shape.rotationSpeed.z

      // Add subtle floating movement (matching inspiration)
      shape.position.y += Math.sin(Date.now() * 0.001 + shape.position.x) * 0.002
    })

    renderer.render(scene, camera)
  }

  animate()

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
}

