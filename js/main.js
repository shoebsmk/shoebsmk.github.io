// Import Tailwind CSS
import '/src/styles/input.css'

// Import modules
import { initScroll } from './scroll.js'
import { initGSAP } from './gsap-animations.js'
import { initThreeScene } from './three-scene.js'
import { initLazyLoading } from './lazy-load.js'
import { initCursorTrail } from './cursor-trail.js'
import { initContactForm } from './pages/contact.js'

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initScroll() // Basic anchor link scrolling
  initGSAP()
  initLazyLoading()
  initCursorTrail() // Cursor trail effect
  
  // Init Three.js on home page or projects page
  if (document.querySelector('#home') || document.querySelector('#projects-page')) {
    initThreeScene()
  }
  
  // Initialize contact form if present (on home page)
  if (document.querySelector('#contactForm')) {
    initContactForm()
  }
})

