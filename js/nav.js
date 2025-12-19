/**
 * Navigation Module
 * 
 * Handles mobile menu toggle, navigation link interactions, and navbar scroll effects.
 * 
 * @module nav
 */

/**
 * DOM selector constants for navigation elements
 * @constant {Object<string, string>}
 */
const SELECTORS = {
  MOBILE_MENU: '#mobile-menu',
  NAV_LINKS: '.nav-links',
  NAV_LINK: '.nav-link',
  NAVBAR: '.navbar'
}

/**
 * CSS class names used for navigation state
 * @constant {Object<string, string>}
 */
const CSS_CLASSES = {
  ACTIVE: 'active',
  IS_ACTIVE: 'is-active',
  SCROLLED: 'scrolled'
}

/**
 * Scroll threshold for navbar styling change (in pixels)
 * @constant {number}
 */
const SCROLL_THRESHOLD = 50

/**
 * Toggle mobile menu visibility
 * 
 * @param {HTMLElement} menuToggle - The mobile menu toggle button
 * @param {HTMLElement} navLinks - The navigation links container
 * @returns {void}
 */
function toggleMobileMenu(menuToggle, navLinks) {
  menuToggle.classList.toggle(CSS_CLASSES.IS_ACTIVE)
  navLinks.classList.toggle(CSS_CLASSES.ACTIVE)
}

/**
 * Close mobile menu when a nav link is clicked
 * 
 * @param {HTMLElement} menuToggle - The mobile menu toggle button
 * @param {HTMLElement} navLinks - The navigation links container
 * @returns {void}
 */
function closeMobileMenu(menuToggle, navLinks) {
  menuToggle.classList.remove(CSS_CLASSES.IS_ACTIVE)
  navLinks.classList.remove(CSS_CLASSES.ACTIVE)
}

/**
 * Handle navbar scroll effect
 * 
 * Adds/removes 'scrolled' class based on scroll position.
 * 
 * @param {HTMLElement} navbar - The navbar element
 * @returns {void}
 */
function handleNavbarScroll(navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add(CSS_CLASSES.SCROLLED)
    } else {
      navbar.classList.remove(CSS_CLASSES.SCROLLED)
    }
  })
}

/**
 * Initialize navigation functionality
 * 
 * Sets up:
 * - Mobile menu toggle behavior
 * - Navigation link click handlers to close mobile menu
 * - Navbar scroll effect for styling changes
 * 
 * @function initNav
 * @returns {void}
 * 
 * @example
 * // Call on page load
 * initNav()
 */
export function initNav() {
  const menuToggle = document.querySelector(SELECTORS.MOBILE_MENU)
  const navLinks = document.querySelector(SELECTORS.NAV_LINKS)
  
  // Setup mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      toggleMobileMenu(menuToggle, navLinks)
    })
  }
  
  // Close mobile menu when nav links are clicked
  const navLinkElements = document.querySelectorAll(SELECTORS.NAV_LINK)
  navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle && navLinks) {
        closeMobileMenu(menuToggle, navLinks)
      }
    })
  })
  
  // Setup navbar scroll effect
  const navbar = document.querySelector(SELECTORS.NAVBAR)
  if (navbar) {
    handleNavbarScroll(navbar)
  }
}
