/**
 * Main Application Entry Point
 * 
 * This module initializes all application features when the DOM is ready.
 * It coordinates the initialization of scroll behavior, animations, lazy loading,
 * cursor effects, 3D scenes, and contact forms.
 * 
 * @module main
 * @requires scroll
 * @requires gsap-animations
 * @requires three-scene
 * @requires lazy-load
 * @requires cursor-trail
 * @requires pages/contact
 */

// Import Tailwind CSS
import '/src/styles/input.css'

// Import modules
import { initScroll } from './scroll.js'
import { initGSAP } from './gsap-animations.js'
import { initThreeScene } from './three-scene.js'
import { initLazyLoading } from './lazy-load.js'
import { initCursorTrail } from './cursor-trail.js'
import { initContactForm } from './pages/contact.js'

/**
 * DOM Selector Constants
 * @constant {string}
 */
const SELECTORS = {
  HOME_SECTION: '#home',
  PROJECTS_PAGE: '#projects-page',
  CONTACT_FORM: '#contactForm'
}

/**
 * Initialize all application features when DOM is ready
 * 
 * Initializes features in the following order:
 * 1. Smooth scroll behavior for anchor links
 * 2. GSAP animations for hero section
 * 3. Lazy loading for images
 * 4. Cursor trail effect (desktop only)
 * 5. Three.js 3D scene (if on home or projects page)
 * 6. Contact form (if present)
 * 
 * @function initializeApp
 * @returns {void}
 */
function initializeApp() {
  // Initialize core features
  initScroll()
  initGSAP()
  initLazyLoading()
  initCursorTrail()
  
  // Initialize Three.js scene conditionally
  const shouldInitThreeScene = document.querySelector(SELECTORS.HOME_SECTION) || 
                               document.querySelector(SELECTORS.PROJECTS_PAGE)
  if (shouldInitThreeScene) {
    initThreeScene()
  }
  
  // Initialize contact form conditionally
  const contactForm = document.querySelector(SELECTORS.CONTACT_FORM)
  if (contactForm) {
    initContactForm()
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp)

