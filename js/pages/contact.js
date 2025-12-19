import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config.js'

/**
 * Initialize contact form with EmailJS
 */
export function initContactForm() {
  const form = document.getElementById('contactForm')
  const submitButton = form?.querySelector('button[type="submit"]')
  const successMessage = document.getElementById('contactSuccessMessage')
  const errorMessage = document.getElementById('contactErrorMessage')

  if (!form) return

  // Validate EmailJS config
  if (
    EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' ||
    EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID_HERE' ||
    EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE'
  ) {
    console.error('EmailJS configuration is missing. Please update js/config.js with your credentials.')
    if (errorMessage) {
      errorMessage.textContent = 'Email service is not configured. Please contact the site administrator.'
      errorMessage.classList.remove('hidden')
    }
    return
  }

  // Initialize EmailJS
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

  form.addEventListener('submit', async function (e) {
    e.preventDefault()

    // Get form values
    const name = document.getElementById('name').value.trim()
    const email = document.getElementById('email').value.trim()
    const message = document.getElementById('message')?.value.trim() || ''

    // Hide previous messages
    if (successMessage) successMessage.classList.add('hidden')
    if (errorMessage) errorMessage.classList.add('hidden')

    // Validate required fields
    if (!name || !email) {
      if (errorMessage) {
        errorMessage.textContent = 'Please fill in all required fields.'
        errorMessage.classList.remove('hidden')
      }
      return
    }

    // Disable submit button and show loading state
    if (submitButton) {
      submitButton.disabled = true
      const originalText = submitButton.innerHTML
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...'
      
      try {
        // Prepare template parameters
        const templateParams = {
          from_name: name,
          from_email: email,
          message: message || 'No additional message provided',
          to_email: 'shoebwm@gmail.com' // Your email address
        }

        // Send email via EmailJS
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams
        )

        // Show success message
        if (successMessage) {
          successMessage.textContent = 'Thank you! Your message has been sent successfully.'
          successMessage.classList.remove('hidden')
        }

        // Reset form
        form.reset()

        // Scroll to success message
        if (successMessage) {
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
      } catch (error) {
        console.error('EmailJS error:', error)
        if (errorMessage) {
          errorMessage.textContent = 'Sorry, there was an error sending your message. Please try again later.'
          errorMessage.classList.remove('hidden')
        }
      } finally {
        // Re-enable submit button
        if (submitButton) {
          submitButton.disabled = false
          submitButton.innerHTML = originalText
        }
      }
    }
  })
}
