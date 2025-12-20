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
import { renderAll } from './utils/render.js'

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
 * Initialize all website features and dynamic content
 * 
 * @async
 * @function initializeApp
 * @returns {void}
 */
function initializeApp() {
  try {
    // 1. Initial Render (populates all sections from data)
    renderAll()

    // 2. Core behaviors
    initScroll()
    initGSAP()
    initLazyLoading()
    initCursorTrail()

    // 3. Three.js Scene (only on specific pages/sections)
    const shouldInitThreeScene = document.querySelector(SELECTORS.HOME_SECTION) ||
      document.querySelector(SELECTORS.PROJECTS_PAGE)
    if (shouldInitThreeScene) {
      initThreeScene()
    }

    // 4. Forms and Page-Specific Logic
    const contactForm = document.querySelector(SELECTORS.CONTACT_FORM)
    if (contactForm) {
      initContactForm()
    }

    console.log('✨ Portfolio initialized successfully')
  } catch (error) {
    console.error('❌ Error during portfolio initialization:', error)
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp)

