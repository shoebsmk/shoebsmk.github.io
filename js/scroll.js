/**
 * Smooth Scroll Module
 * 
 * Provides enhanced smooth scrolling behavior for anchor links with custom easing.
 * 
 * @module scroll
 */

/**
 * Scroll animation configuration constants
 * @constant {Object}
 */
const SCROLL_CONFIG = {
  /** Duration of scroll animation in milliseconds */
  DURATION: 800,
  /** Anchor link selector pattern */
  ANCHOR_SELECTOR: 'a[href^="#"]',
  /** Empty hash value to skip */
  EMPTY_HASH: '#',
  /** No offset needed for navbar */
  NAVBAR_OFFSET: 0
}

/**
 * Easing function for smooth scroll animation
 * 
 * Uses cubic easing for natural acceleration and deceleration.
 * 
 * @param {number} t - Progress value between 0 and 1
 * @returns {number} Eased progress value between 0 and 1
 */
function easeInOutCubic(t) {
  if (t < 0.5) {
    return 4 * t * t * t
  }
  return 1 - Math.pow(-2 * t + 2, 3) / 2
}

/**
 * Smoothly scrolls to a target position with easing
 * 
 * @param {number} targetPosition - Target scroll position in pixels
 * @param {number} duration - Animation duration in milliseconds
 * @returns {void}
 */
function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  /**
   * Animation frame callback
   * @param {number} currentTime - Current timestamp
   */
  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime
    }
    
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const ease = easeInOutCubic(progress)
    
    window.scrollTo(0, startPosition + distance * ease)
    
    if (progress < 1) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

/**
 * Initialize smooth scroll behavior for anchor links
 * 
 * Attaches click event listeners to all anchor links that start with "#"
 * and provides smooth scrolling with custom easing.
 * 
 * @function initScroll
 * @returns {void}
 * 
 * @example
 * // Call on page load
 * initScroll()
 */
export function initScroll() {
  const anchorLinks = document.querySelectorAll(SCROLL_CONFIG.ANCHOR_SELECTOR)
  
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      
      // Skip empty hash links
      if (href === SCROLL_CONFIG.EMPTY_HASH) {
        return
      }
      
      e.preventDefault()
      const target = document.querySelector(href)
      
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + 
                               window.pageYOffset - 
                               SCROLL_CONFIG.NAVBAR_OFFSET
        
        smoothScrollTo(targetPosition, SCROLL_CONFIG.DURATION)
      }
    })
  })
}
