export function initNav() {
  const menuToggle = document.querySelector('#mobile-menu')
  const navLinks = document.querySelector('.nav-links')
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('is-active')
      navLinks.classList.toggle('active')
    })
  }
  
  document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (menuToggle) {
      menuToggle.classList.remove('is-active')
      navLinks.classList.remove('active')
    }
  }))
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar')
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    })
  }
}
