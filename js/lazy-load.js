// Lazy loading for images using Intersection Observer
export function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src], img[src*="images"]')
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.removeAttribute('data-src')
        }
        img.classList.add('loaded')
        observer.unobserve(img)
      }
    })
  }, {
    rootMargin: '50px'
  })

  images.forEach(img => {
    // Add loading="lazy" attribute for native lazy loading
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy')
    }
    imageObserver.observe(img)
  })
}

