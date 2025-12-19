/**
 * Cursor Trail Module
 * 
 * Creates a smooth minimal dotted trail effect that follows the cursor.
 * Only active on desktop devices (not mobile/tablet).
 * 
 * @module cursor-trail
 */

/**
 * Cursor trail configuration constants
 * @constant {Object}
 */
const TRAIL_CONFIG = {
  /** Maximum number of trail dots visible at once */
  MAX_TRAIL_LENGTH: 12,
  /** Milliseconds between creating new dots (lower = smoother) */
  TRAIL_INTERVAL: 15,
  /** Mobile breakpoint width in pixels */
  MOBILE_BREAKPOINT: 768,
  /** Mouse position history retention time in milliseconds */
  MOUSE_POSITION_RETENTION: 100,
  /** Dot size in pixels */
  DOT_SIZE: 4,
  /** Dot color RGBA values */
  DOT_COLOR: 'rgba(20, 65, 138, 0.6)',
  /** Initial dot opacity */
  DOT_OPACITY: '0.6',
  /** Z-index for trail dots */
  DOT_Z_INDEX: 9999,
  /** Fade-in transition duration in seconds */
  FADE_IN_DURATION: '0.5s',
  /** Transform transition duration in seconds */
  TRANSFORM_DURATION: '0.1s',
  /** Time before dot starts fading out in milliseconds */
  DOT_LIFETIME: 800,
  /** Fade-out transition duration in milliseconds */
  FADE_OUT_DURATION: 500,
  /** CSS class name for trail dots */
  DOT_CLASS_NAME: 'cursor-dot'
}

/**
 * Global state for cursor trail
 * @type {Object}
 */
const trailState = {
  /** Array of active trail dots */
  dots: [],
  /** Timestamp of last trail dot creation */
  lastTrailTime: 0,
  /** Array of recent mouse positions for interpolation */
  mousePositions: []
}

/**
 * Check if device is mobile/tablet
 * 
 * @returns {boolean} True if device is mobile/tablet
 */
function isMobileDevice() {
  return window.innerWidth < TRAIL_CONFIG.MOBILE_BREAKPOINT || 
         'ontouchstart' in window
}

/**
 * Create a trail dot element at the specified position
 * 
 * @param {number} x - X coordinate in pixels
 * @param {number} y - Y coordinate in pixels
 * @returns {void}
 */
function createTrailDot(x, y) {
  const dot = document.createElement('div')
  dot.className = TRAIL_CONFIG.DOT_CLASS_NAME
  dot.style.cssText = `
    position: fixed;
    width: ${TRAIL_CONFIG.DOT_SIZE}px;
    height: ${TRAIL_CONFIG.DOT_SIZE}px;
    background: ${TRAIL_CONFIG.DOT_COLOR};
    border-radius: 50%;
    pointer-events: none;
    z-index: ${TRAIL_CONFIG.DOT_Z_INDEX};
    left: ${x}px;
    top: ${y}px;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity ${TRAIL_CONFIG.FADE_IN_DURATION} ease-out, 
                transform ${TRAIL_CONFIG.TRANSFORM_DURATION} ease-out;
    will-change: opacity, transform;
  `
  document.body.appendChild(dot)

  // Smooth fade in on next frame
  requestAnimationFrame(() => {
    dot.style.opacity = TRAIL_CONFIG.DOT_OPACITY
  })

  const dotData = { element: dot, created: Date.now() }
  trailState.dots.push(dotData)

  // Remove oldest dot if we exceed max length
  if (trailState.dots.length > TRAIL_CONFIG.MAX_TRAIL_LENGTH) {
    const oldTrail = trailState.dots.shift()
    fadeOutAndRemove(oldTrail.element)
  }

  // Fade out and remove dot after lifetime
  setTimeout(() => {
    fadeOutAndRemove(dot)
  }, TRAIL_CONFIG.DOT_LIFETIME)
}

/**
 * Fade out and remove a trail dot element
 * 
 * @param {HTMLElement} dot - The trail dot element to remove
 * @returns {void}
 */
function fadeOutAndRemove(dot) {
  if (!dot.parentNode) {
    return
  }
  
  dot.style.opacity = '0'
  
  setTimeout(() => {
    if (dot.parentNode) {
      dot.remove()
    }
    
    // Remove from state array
    const index = trailState.dots.findIndex(t => t.element === dot)
    if (index > -1) {
      trailState.dots.splice(index, 1)
    }
  }, TRAIL_CONFIG.FADE_OUT_DURATION)
}

/**
 * Handle mouse move events and create trail dots
 * 
 * @param {MouseEvent} event - Mouse move event
 * @returns {void}
 */
function handleMouseMove(event) {
  const now = Date.now()
  
  // Store mouse position
  trailState.mousePositions.push({ 
    x: event.clientX, 
    y: event.clientY, 
    time: now 
  })
  
  // Keep only recent positions
  trailState.mousePositions = trailState.mousePositions.filter(
    pos => now - pos.time < TRAIL_CONFIG.MOUSE_POSITION_RETENTION
  )
  
  // Create new dot if enough time has passed
  if (now - trailState.lastTrailTime >= TRAIL_CONFIG.TRAIL_INTERVAL) {
    createTrailDot(event.clientX, event.clientY)
    trailState.lastTrailTime = now
  }
}

/**
 * Initialize cursor trail effect
 * 
 * Sets up mouse move listener to create trail dots.
 * Does nothing on mobile/tablet devices.
 * 
 * @function initCursorTrail
 * @returns {void}
 * 
 * @example
 * // Call on page load
 * initCursorTrail()
 */
export function initCursorTrail() {
  // Don't initialize on mobile devices
  if (isMobileDevice()) {
    return
  }

  document.addEventListener('mousemove', handleMouseMove)
}

