/**
 * Lazy Loading Module
 * 
 * Implements lazy loading for images using the Intersection Observer API.
 * Images are loaded when they enter the viewport, improving initial page load performance.
 * 
 * @module lazy-load
 */

/**
 * Lazy loading configuration constants
 * @constant {Object}
 */
const LAZY_LOAD_CONFIG = {
  /** Image selectors for lazy loading */
  IMAGE_SELECTORS: 'img[data-src], img[src*="images"]',
  /** Root margin for Intersection Observer (triggers loading before image enters viewport) */
  ROOT_MARGIN: '50px',
  /** CSS class added to loaded images */
  LOADED_CLASS: 'loaded',
  /** Data attribute for lazy-loaded image source */
  DATA_SRC_ATTR: 'data-src',
  /** Native lazy loading attribute */
  LOADING_ATTR: 'loading',
  /** Native lazy loading value */
  LOADING_VALUE: 'lazy'
}

/**
 * Handle intersection observer callback for image loading
 * 
 * @param {IntersectionObserverEntry[]} entries - Observer entries
 * @param {IntersectionObserver} observer - The IntersectionObserver instance
 * @returns {void}
 */
function handleImageIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target
      
      // Load image from data-src if present
      if (img.dataset.src) {
        img.src = img.dataset.src
        img.removeAttribute(LAZY_LOAD_CONFIG.DATA_SRC_ATTR)
      }
      
      // Mark as loaded
      img.classList.add(LAZY_LOAD_CONFIG.LOADED_CLASS)
      
      // Stop observing this image
      observer.unobserve(img)
    }
  })
}

/**
 * Create and configure Intersection Observer for images
 * 
 * @returns {IntersectionObserver} Configured IntersectionObserver instance
 */
function createImageObserver() {
  return new IntersectionObserver(handleImageIntersection, {
    rootMargin: LAZY_LOAD_CONFIG.ROOT_MARGIN
  })
}

/**
 * Initialize lazy loading for images
 * 
 * Sets up Intersection Observer to load images when they enter the viewport.
 * Also adds native lazy loading attribute as a fallback.
 * 
 * @function initLazyLoading
 * @returns {void}
 * 
 * @example
 * // Call on page load
 * initLazyLoading()
 */
export function initLazyLoading() {
  const images = document.querySelectorAll(LAZY_LOAD_CONFIG.IMAGE_SELECTORS)
  
  if (images.length === 0) {
    return
  }
  
  const imageObserver = createImageObserver()

  images.forEach(img => {
    // Add native lazy loading attribute as fallback
    if (!img.hasAttribute(LAZY_LOAD_CONFIG.LOADING_ATTR)) {
      img.setAttribute(
        LAZY_LOAD_CONFIG.LOADING_ATTR, 
        LAZY_LOAD_CONFIG.LOADING_VALUE
      )
    }
    
    // Start observing image
    imageObserver.observe(img)
  })
}

