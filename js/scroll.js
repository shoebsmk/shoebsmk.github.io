export function initScroll() {
  // Enhanced smooth scroll for anchor links with easing
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (href === '#') return
      
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const offset = 0 // No navbar offset needed
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
        
        // Use smooth scroll with custom easing for seamless feel
        smoothScrollTo(targetPosition, 800)
      }
    })
  })
}

// Custom smooth scroll function with easing for one-page feel
function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
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
