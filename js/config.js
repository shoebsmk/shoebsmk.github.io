/**
 * EmailJS Configuration Module
 * 
 * Contains EmailJS service configuration for contact form email delivery.
 * 
 * @module config
 * 
 * @description
 * SETUP INSTRUCTIONS:
 * 1. Sign up at https://www.emailjs.com/ (free tier available)
 * 2. Go to Email Services and add/reconnect Gmail service:
 *    - If you see "insufficient authentication scopes" error:
 *      a. Go to Email Services in EmailJS dashboard
 *      b. Click on your Gmail service (or add new one)
 *      c. Click "Reconnect Account" or "Connect Account"
 *      d. Make sure to grant ALL requested permissions (especially "Send email" scope)
 *      e. Complete the OAuth flow
 * 3. Go to Email Templates and create a new template:
 *    - Open the file "EMAIL_TEMPLATE.html" in the project root
 *    - Copy the entire HTML content
 *    - Paste it into the EmailJS template editor
 *    - Set the Subject Line to: "New Contact Form Submission from {{from_name}}"
 *    - Set the Reply-To field to: {{from_email}}
 *    - Set the To field to: {{to_email}}
 *    - The template uses these variables:
 *      * {{from_name}} - Sender's name
 *      * {{from_email}} - Sender's email
 *      * {{message}} - Message content
 *      * {{to_email}} - Your email address (shoebwm@gmail.com)
 * 4. Get your credentials from the dashboard:
 *    - Public Key: Found in Account > General
 *    - Service ID: Found in Email Services (your Gmail service) - e.g., service_kv5bazh
 *    - Template ID: Found in Email Templates
 * 5. Paste your credentials below:
 */

/**
 * EmailJS Configuration Object
 * 
 * @typedef {Object} EmailJSConfig
 * @property {string} PUBLIC_KEY - EmailJS Public Key (from Account > General)
 * @property {string} SERVICE_ID - EmailJS Service ID (from Email Services > Gmail)
 * @property {string} TEMPLATE_ID - EmailJS Template ID (from Email Templates)
 */

/**
 * EmailJS service configuration
 * 
 * @constant {EmailJSConfig}
 * @example
 * // Update these values with your EmailJS credentials
 * EMAILJS_CONFIG = {
 *   PUBLIC_KEY: 'your_public_key_here',
 *   SERVICE_ID: 'service_xxxxx',
 *   TEMPLATE_ID: 'template_xxxxx'
 * }
 */
export const EMAILJS_CONFIG = {
  /** EmailJS Public Key (from Account > General) */
  PUBLIC_KEY: 'TWAsvGbZDMpSbKR6u',
  /** EmailJS Service ID (from Email Services > Gmail) */
  SERVICE_ID: 'service_62iqh8d',
  /** EmailJS Template ID (from Email Templates) */
  TEMPLATE_ID: 'template_z4psrkr'
}

