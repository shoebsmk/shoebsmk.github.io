// Smooth minimal dotted trail cursor
let trailDots = []
const maxTrailLength = 12
let lastTrailTime = 0
const trailInterval = 15 // milliseconds between dots (more frequent = smoother)
let mousePositions = [] // Store recent mouse positions for smoother interpolation

export function initCursorTrail() {
  // Don't initialize on mobile devices
  if (window.innerWidth < 768 || 'ontouchstart' in window) {
    return
  }

  document.addEventListener('mousemove', (e) => {
    const now = Date.now()
    mousePositions.push({ x: e.clientX, y: e.clientY, time: now })
    
    // Keep only recent positions (last 100ms)
    mousePositions = mousePositions.filter(pos => now - pos.time < 100)
    
    if (now - lastTrailTime >= trailInterval) {
      createTrailDot(e.clientX, e.clientY)
      lastTrailTime = now
    }
  })

  function createTrailDot(x, y) {
    const dot = document.createElement('div')
    dot.className = 'cursor-dot'
    dot.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: rgba(76, 81, 191, 0.6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      left: ${x}px;
      top: ${y}px;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.5s ease-out, transform 0.1s ease-out;
      will-change: opacity, transform;
    `
    document.body.appendChild(dot)

    // Smooth fade in
    requestAnimationFrame(() => {
      dot.style.opacity = '0.6'
    })

    trailDots.push({ element: dot, created: Date.now() })

    // Remove oldest dot if we exceed max length
    if (trailDots.length > maxTrailLength) {
      const oldTrail = trailDots.shift()
      fadeOutAndRemove(oldTrail.element)
    }

    // Fade out and remove dot after delay
    setTimeout(() => {
      fadeOutAndRemove(dot)
    }, 800)
  }

  function fadeOutAndRemove(dot) {
    if (!dot.parentNode) return
    dot.style.opacity = '0'
    setTimeout(() => {
      if (dot.parentNode) {
        dot.remove()
      }
      const index = trailDots.findIndex(t => t.element === dot)
      if (index > -1) {
        trailDots.splice(index, 1)
      }
    }, 500)
  }
}

