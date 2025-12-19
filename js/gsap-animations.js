/**
 * GSAP Animations Module
 * 
 * Handles page animations using GSAP (GreenSock Animation Platform).
 * Currently animates the hero section with fade-in and slide-up effects.
 * 
 * @module gsap-animations
 * @requires gsap
 * @requires gsap/ScrollTrigger
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Animation configuration constants
 * @constant {Object}
 */
const ANIMATION_CONFIG = {
  /** Hero section selector */
  HERO_SELECTOR: '#home',
  /** Hero title selector */
  HERO_TITLE_SELECTOR: '#home h1',
  /** Hero subtitle selector */
  HERO_SUBTITLE_SELECTOR: '#home p',
  /** Hero button selectors */
  HERO_BUTTON_SELECTORS: '#home .btn-glass, #home .btn-glass-lg',
  /** Title animation duration in seconds */
  TITLE_DURATION: 0.5,
  /** Subtitle animation duration in seconds */
  SUBTITLE_DURATION: 0.4,
  /** Subtitle animation delay in seconds */
  SUBTITLE_DELAY: 0.1,
  /** Button animation duration in seconds */
  BUTTON_DURATION: 0.35,
  /** Button animation delay in seconds */
  BUTTON_DELAY: 0.2,
  /** Stagger delay between buttons in seconds */
  BUTTON_STAGGER: 0.05,
  /** Initial Y offset for title animation */
  TITLE_Y_OFFSET: 20,
  /** Initial Y offset for subtitle animation */
  SUBTITLE_Y_OFFSET: 15,
  /** Initial Y offset for button animation */
  BUTTON_Y_OFFSET: 15,
  /** Easing function for title and subtitle */
  EASE_OUT: 'power2.out',
  /** Easing function for buttons */
  BUTTON_EASE: 'power1.out'
}

/**
 * Register GSAP plugins
 * 
 * Registers ScrollTrigger plugin if GSAP is available.
 * 
 * @returns {void}
 */
function registerPlugins() {
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
  }
}

/**
 * Animate hero title with fade-in and slide-up effect
 * 
 * @param {HTMLElement} heroTitle - The hero title element
 * @returns {void}
 */
function animateHeroTitle(heroTitle) {
  gsap.fromTo(
    heroTitle,
    {
      opacity: 0,
      y: ANIMATION_CONFIG.TITLE_Y_OFFSET
    },
    {
      opacity: 1,
      y: 0,
      duration: ANIMATION_CONFIG.TITLE_DURATION,
      ease: ANIMATION_CONFIG.EASE_OUT
    }
  )
}

/**
 * Animate hero subtitle with fade-in and slide-up effect
 * 
 * @param {HTMLElement} heroSubtitle - The hero subtitle element
 * @returns {void}
 */
function animateHeroSubtitle(heroSubtitle) {
  gsap.fromTo(
    heroSubtitle,
    {
      opacity: 0,
      y: ANIMATION_CONFIG.SUBTITLE_Y_OFFSET
    },
    {
      opacity: 1,
      y: 0,
      duration: ANIMATION_CONFIG.SUBTITLE_DURATION,
      delay: ANIMATION_CONFIG.SUBTITLE_DELAY,
      ease: ANIMATION_CONFIG.EASE_OUT
    }
  )
}

/**
 * Animate hero buttons with staggered fade-in and slide-up effect
 * 
 * @param {NodeList<HTMLElement>} heroButtons - The hero button elements
 * @returns {void}
 */
function animateHeroButtons(heroButtons) {
  // Ensure buttons are visible before animation
  heroButtons.forEach(btn => {
    btn.style.opacity = '1'
  })
  
  gsap.fromTo(
    heroButtons,
    {
      opacity: 0,
      y: ANIMATION_CONFIG.BUTTON_Y_OFFSET
    },
    {
      opacity: 1,
      y: 0,
      duration: ANIMATION_CONFIG.BUTTON_DURATION,
      delay: ANIMATION_CONFIG.BUTTON_DELAY,
      stagger: ANIMATION_CONFIG.BUTTON_STAGGER,
      ease: ANIMATION_CONFIG.BUTTON_EASE
    }
  )
}

/**
 * Initialize GSAP animations for the hero section
 * 
 * Animates hero title, subtitle, and buttons with fade-in and slide-up effects.
 * Only animates elements that exist in the DOM.
 * 
 * @function initGSAP
 * @returns {void}
 * 
 * @example
 * // Call on page load
 * initGSAP()
 */
export function initGSAP() {
  registerPlugins()
  
  const heroTitle = document.querySelector(ANIMATION_CONFIG.HERO_TITLE_SELECTOR)
  const heroSubtitle = document.querySelector(ANIMATION_CONFIG.HERO_SUBTITLE_SELECTOR)
  const heroButtons = document.querySelectorAll(ANIMATION_CONFIG.HERO_BUTTON_SELECTORS)

  if (heroTitle) {
    animateHeroTitle(heroTitle)
  }

  if (heroSubtitle) {
    animateHeroSubtitle(heroSubtitle)
  }

  if (heroButtons.length > 0) {
    animateHeroButtons(heroButtons)
  }
}

