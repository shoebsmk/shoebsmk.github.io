// Import Tailwind CSS
import '/src/styles/input.css'

// Import modules
import { initNav } from './nav.js'
import { initScroll } from './scroll.js'
import { initGSAP } from './gsap-animations.js'
import { initThreeScene } from './three-scene.js'
import { initLazyLoading } from './lazy-load.js'
import { initCursorTrail } from './cursor-trail.js'

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initNav()
  initScroll() // Basic anchor link scrolling
  initGSAP()
  initLazyLoading()
  initCursorTrail() // Cursor trail effect
  
  // Only init Three.js on home page
  if (document.querySelector('#home')) {
    initThreeScene()
  }
})

