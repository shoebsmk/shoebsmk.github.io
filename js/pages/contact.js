/**
 * Contact Form Module
 * 
 * Handles contact form submission using EmailJS service.
 * Provides form validation, loading states, and user feedback.
 * 
 * @module pages/contact
 * @requires @emailjs/browser
 * @requires ../config
 */

import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config.js'

/**
 * Contact form configuration constants
 * @constant {Object}
 */
const FORM_CONFIG = {
  /** Form element ID */
  FORM_ID: 'contactForm',
  /** Email input element ID */
  EMAIL_INPUT_ID: 'email',
  /** Message textarea element ID */
  MESSAGE_INPUT_ID: 'message',
  /** Success message element ID */
  SUCCESS_MESSAGE_ID: 'contactSuccessMessage',
  /** Error message element ID */
  ERROR_MESSAGE_ID: 'contactErrorMessage',
  /** Submit button selector */
  SUBMIT_BUTTON_SELECTOR: 'button[type="submit"]',
  /** CSS class for hidden elements */
  HIDDEN_CLASS: 'hidden',
  /** Recipient email address */
  RECIPIENT_EMAIL: 'shoebwm@gmail.com',
  /** Default message when no message provided */
  DEFAULT_MESSAGE: 'No additional message provided',
  /** Loading button HTML */
  LOADING_BUTTON_HTML: '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...',
  /** Placeholder values that indicate unconfigured EmailJS */
  PLACEHOLDER_VALUES: {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
    SERVICE_ID: 'YOUR_SERVICE_ID_HERE',
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE'
  }
}

/**
 * Error messages
 * @constant {Object<string, string>}
 */
const ERROR_MESSAGES = {
  CONFIG_MISSING: 'Email service is not configured. Please contact the site administrator.',
  REQUIRED_FIELDS: 'Please fill in all required fields.',
  SEND_FAILED: 'Sorry, there was an error sending your message. Please try again later.'
}

/**
 * Success messages
 * @constant {Object<string, string>}
 */
const SUCCESS_MESSAGES = {
  SENT: 'Thank you! Your message has been sent successfully.'
}

/**
 * Check if EmailJS configuration is valid
 * 
 * @returns {boolean} True if configuration is valid
 */
function isEmailJSConfigured() {
  return EMAILJS_CONFIG.PUBLIC_KEY !== FORM_CONFIG.PLACEHOLDER_VALUES.PUBLIC_KEY &&
         EMAILJS_CONFIG.SERVICE_ID !== FORM_CONFIG.PLACEHOLDER_VALUES.SERVICE_ID &&
         EMAILJS_CONFIG.TEMPLATE_ID !== FORM_CONFIG.PLACEHOLDER_VALUES.TEMPLATE_ID
}

/**
 * Show error message to user
 * 
 * @param {HTMLElement} errorElement - Error message element
 * @param {string} message - Error message text
 * @returns {void}
 */
function showError(errorElement, message) {
  if (errorElement) {
    errorElement.textContent = message
    errorElement.classList.remove(FORM_CONFIG.HIDDEN_CLASS)
  }
}

/**
 * Hide error message
 * 
 * @param {HTMLElement} errorElement - Error message element
 * @returns {void}
 */
function hideError(errorElement) {
  if (errorElement) {
    errorElement.classList.add(FORM_CONFIG.HIDDEN_CLASS)
  }
}

/**
 * Show success message to user
 * 
 * @param {HTMLElement} successElement - Success message element
 * @param {string} message - Success message text
 * @returns {void}
 */
function showSuccess(successElement, message) {
  if (successElement) {
    successElement.textContent = message
    successElement.classList.remove(FORM_CONFIG.HIDDEN_CLASS)
    successElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }
}

/**
 * Hide success message
 * 
 * @param {HTMLElement} successElement - Success message element
 * @returns {void}
 */
function hideSuccess(successElement) {
  if (successElement) {
    successElement.classList.add(FORM_CONFIG.HIDDEN_CLASS)
  }
}

/**
 * Set submit button to loading state
 * 
 * @param {HTMLElement} button - Submit button element
 * @returns {string} Original button HTML for restoration
 */
function setButtonLoading(button) {
  if (!button) return ''
  
  const originalText = button.innerHTML
  button.disabled = true
  button.innerHTML = FORM_CONFIG.LOADING_BUTTON_HTML
  return originalText
}

/**
 * Restore submit button to normal state
 * 
 * @param {HTMLElement} button - Submit button element
 * @param {string} originalText - Original button HTML
 * @returns {void}
 */
function restoreButton(button, originalText) {
  if (button) {
    button.disabled = false
    button.innerHTML = originalText
  }
}

/**
 * Get form field values
 * 
 * @returns {Object<string, string>} Form field values
 */
function getFormValues() {
  const emailInput = document.getElementById(FORM_CONFIG.EMAIL_INPUT_ID)
  const messageInput = document.getElementById(FORM_CONFIG.MESSAGE_INPUT_ID)
  
  return {
    email: emailInput?.value.trim() || '',
    message: messageInput?.value.trim() || ''
  }
}

/**
 * Validate form fields
 * 
 * @param {Object<string, string>} values - Form field values
 * @returns {boolean} True if form is valid
 */
function validateForm(values) {
  return values.email.length > 0
}

/**
 * Prepare EmailJS template parameters
 * 
 * @param {Object<string, string>} values - Form field values
 * @returns {Object<string, string>} Template parameters
 */
function prepareTemplateParams(values) {
  return {
    from_email: values.email,
    message: values.message || FORM_CONFIG.DEFAULT_MESSAGE,
    to_email: FORM_CONFIG.RECIPIENT_EMAIL
  }
}

/**
 * Send email via EmailJS
 * 
 * @param {Object<string, string>} templateParams - Email template parameters
 * @returns {Promise<void>} Promise that resolves when email is sent
 */
async function sendEmail(templateParams) {
  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams
  )
}

/**
 * Handle form submission
 * 
 * @param {Event} event - Form submit event
 * @param {HTMLElement} form - Form element
 * @param {HTMLElement} submitButton - Submit button element
 * @param {HTMLElement} successMessage - Success message element
 * @param {HTMLElement} errorMessage - Error message element
 * @returns {Promise<void>}
 */
async function handleSubmit(event, form, submitButton, successMessage, errorMessage) {
  event.preventDefault()
  
  // Hide previous messages
  hideSuccess(successMessage)
  hideError(errorMessage)
  
  // Get and validate form values
  const values = getFormValues()
  
  if (!validateForm(values)) {
    showError(errorMessage, ERROR_MESSAGES.REQUIRED_FIELDS)
    return
  }
  
  // Set loading state
  const originalButtonText = setButtonLoading(submitButton)
  
  try {
    // Prepare and send email
    const templateParams = prepareTemplateParams(values)
    await sendEmail(templateParams)
    
    // Show success and reset form
    showSuccess(successMessage, SUCCESS_MESSAGES.SENT)
    form.reset()
  } catch (error) {
    console.error('EmailJS error:', error)
    showError(errorMessage, ERROR_MESSAGES.SEND_FAILED)
  } finally {
    // Restore button state
    restoreButton(submitButton, originalButtonText)
  }
}

/**
 * Initialize contact form with EmailJS integration
 * 
 * Sets up form submission handler with validation, loading states, and error handling.
 * Validates EmailJS configuration before allowing submissions.
 * 
 * @function initContactForm
 * @returns {void}
 * 
 * @example
 * // Call on page load (only if contact form exists)
 * initContactForm()
 */
export function initContactForm() {
  const form = document.getElementById(FORM_CONFIG.FORM_ID)
  
  if (!form) {
    return
  }
  
  const submitButton = form.querySelector(FORM_CONFIG.SUBMIT_BUTTON_SELECTOR)
  const successMessage = document.getElementById(FORM_CONFIG.SUCCESS_MESSAGE_ID)
  const errorMessage = document.getElementById(FORM_CONFIG.ERROR_MESSAGE_ID)

  // Validate EmailJS configuration
  if (!isEmailJSConfigured()) {
    console.error('EmailJS configuration is missing. Please update js/config.js with your credentials.')
    showError(errorMessage, ERROR_MESSAGES.CONFIG_MISSING)
    return
  }

  // Initialize EmailJS
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

  // Attach submit handler
  form.addEventListener('submit', (e) => {
    handleSubmit(e, form, submitButton, successMessage, errorMessage)
  })
}
