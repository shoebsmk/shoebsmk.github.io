import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function initGSAP() {
  // Only animate hero section - no animations for other sections
  const heroTitle = document.querySelector('#home h1')
  const heroSubtitle = document.querySelector('#home p')
  const heroButtons = document.querySelectorAll('#home .btn-glass, #home .btn-glass-lg')

  if (heroTitle) {
    gsap.fromTo(heroTitle, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
  }

  if (heroSubtitle) {
    gsap.fromTo(heroSubtitle,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: 'power2.out' }
    )
  }

  if (heroButtons.length > 0) {
    // Set initial opacity to ensure visibility
    heroButtons.forEach(btn => {
      btn.style.opacity = '1'
    })
    
    gsap.fromTo(heroButtons,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.35, delay: 0.2, stagger: 0.05, ease: 'power1.out' }
    )
  }
}

