/**
 * Rendering Utilities Module
 * 
 * Provides functions to dynamically render website sections from centralized data.
 * All rendering functions include XSS protection through HTML escaping.
 * 
 * @module utils/render
 * @requires ../data/content
 */

import { siteData } from '../data/content.js'

/**
 * DOM selector constants
 * @constant {Object<string, string>}
 */
const SELECTORS = {
  HERO_SECTION: '#home .container',
  EXPERIENCE_SECTION: '#experience',
  EXPERIENCE_CONTAINER: '#experience .container',
  PROJECTS_SECTION: '#portfolio',
  PROJECTS_CONTAINER: '#portfolio .container',
  ABOUT_SECTION: '#about',
  ABOUT_CONTAINER: '#about .container',
  SKILLS_SECTION: '#skills',
  SKILLS_CONTAINER: '#skills .container',
  CONTACT_SECTION: '#contact',
  CONTACT_CONTAINER: '#contact .container',
  FOOTER: 'footer',
  FOOTER_CONTAINER: 'footer .container',
  CONTAINER: '.container'
}

/**
 * URL validation patterns
 * @constant {Object<string, string>}
 */
const URL_PATTERNS = {
  HTTP: 'http://',
  HTTPS: 'https://',
  MAILTO: 'mailto:',
  RELATIVE: '/',
  HASH: '#'
}

/**
 * Default fallback values
 * @constant {Object<string, string>}
 */
const DEFAULTS = {
  INVALID_URL: '#',
  EMPTY_STRING: ''
}

/**
 * Error messages for rendering
 * @constant {Object<string, string>}
 */
const ERROR_MESSAGES = {
  HERO_SECTION_NOT_FOUND: 'Hero section or data not found',
  HERO_DATA_INVALID: 'Invalid hero data structure',
  EXPERIENCE_SECTION_NOT_FOUND: 'Experience section or data not found',
  EXPERIENCE_CONTAINER_NOT_FOUND: 'Experience container not found',
  EXPERIENCE_ITEMS_INVALID: 'Experience items must be an array',
  PROJECTS_SECTION_NOT_FOUND: 'Projects section or data not found',
  PROJECTS_CONTAINER_NOT_FOUND: 'Projects container not found',
  PROJECTS_ITEMS_INVALID: 'Projects items must be an array',
  ABOUT_SECTION_NOT_FOUND: 'About section or data not found',
  ABOUT_CONTAINER_NOT_FOUND: 'About container not found',
  SKILLS_SECTION_NOT_FOUND: 'Skills section or data not found',
  SKILLS_CONTAINER_NOT_FOUND: 'Skills container not found',
  SKILLS_ITEMS_INVALID: 'Skills items must be an array',
  CONTACT_SECTION_NOT_FOUND: 'Contact section or data not found',
  CONTACT_CONTAINER_NOT_FOUND: 'Contact container not found',
  CONTACT_FORM_INVALID: 'Invalid contact form data structure'
}

/**
 * Escape HTML to prevent XSS attacks
 * 
 * Uses DOM textContent to safely escape HTML entities.
 * 
 * @param {string} text - Text to escape
 * @returns {string} Escaped text safe for HTML insertion
 * 
 * @example
 * escapeHtml('<script>alert("xss")</script>')
 * // Returns: '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
 */
function escapeHtml(text) {
  if (typeof text !== 'string') {
    return String(text || DEFAULTS.EMPTY_STRING)
  }
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

/**
 * Safely escape and validate URL to prevent XSS
 * 
 * Only allows safe URL schemes: http, https, mailto, and relative paths.
 * Returns '#' for invalid URLs.
 * 
 * @param {string} url - URL to escape and validate
 * @returns {string} Escaped and validated URL, or '#' if invalid
 * 
 * @example
 * escapeUrl('https://example.com') // Returns escaped URL
 * escapeUrl('javascript:alert(1)') // Returns '#'
 */
function escapeUrl(url) {
  if (typeof url !== 'string') {
    return DEFAULTS.INVALID_URL
  }

  // Basic URL validation - only allow safe schemes
  const isSafeUrl = url.startsWith(URL_PATTERNS.HTTP) ||
    url.startsWith(URL_PATTERNS.HTTPS) ||
    url.startsWith(URL_PATTERNS.MAILTO) ||
    url.startsWith(URL_PATTERNS.RELATIVE) ||
    url.startsWith(URL_PATTERNS.HASH)

  if (isSafeUrl) {
    return escapeHtml(url)
  }

  return DEFAULTS.INVALID_URL
}

/**
 * Render hero section with name, title, and action buttons
 * 
 * Dynamically renders the hero section from siteData.hero configuration.
 * Includes XSS protection for all user-generated content.
 * 
 * @function renderHero
 * @returns {void}
 * 
 * @example
 * // Call after DOM is ready
 * renderHero()
 */
export function renderHero() {
  try {
    const heroSection = document.querySelector(SELECTORS.HERO_SECTION)
    if (!heroSection || !siteData.hero) {
      console.warn(ERROR_MESSAGES.HERO_SECTION_NOT_FOUND)
      return
    }

    const { name, title, buttons } = siteData.hero

    if (!name || !title || !Array.isArray(buttons)) {
      console.error(ERROR_MESSAGES.HERO_DATA_INVALID)
      return
    }

    heroSection.innerHTML = `
      <h1 class="text-8xl md:text-9xl mb-4 hero-title-gradient">${escapeHtml(name)}</h1>
      <p class="text-[26px] text-[#2d3748] mb-8 opacity-75">${escapeHtml(title)}</p>
      <div class="flex flex-wrap gap-4 justify-center relative z-10">
        ${buttons.map(btn => {
      if (!btn || !btn.href || !btn.text) return ''
      const attrs = btn.type === 'download'
        ? `href="${escapeUrl(btn.href)}" download`
        : `href="${escapeUrl(btn.href)}"`
      return `<a ${attrs} class="btn-glass relative z-10">${escapeHtml(btn.text)}</a>`
    }).filter(Boolean).join('')}
      </div>
    `
  } catch (error) {
    console.error('Error rendering hero section:', error)
  }
}

/**
 * Render work experience section with timeline of positions
 * 
 * Dynamically renders work experience items from siteData.experience.
 * Each experience item includes position, company, period, and description.
 * 
 * @function renderExperience
 * @returns {void}
 * 
 * @example
 * // Call after DOM is ready
 * renderExperience()
 */
export function renderExperience() {
  try {
    const experienceSection = document.querySelector(SELECTORS.EXPERIENCE_SECTION)
    if (!experienceSection || !siteData.experience) {
      console.warn(ERROR_MESSAGES.EXPERIENCE_SECTION_NOT_FOUND)
      return
    }

    const { title, items } = siteData.experience
    const container = experienceSection.querySelector(SELECTORS.CONTAINER)

    if (!container) {
      console.error(ERROR_MESSAGES.EXPERIENCE_CONTAINER_NOT_FOUND)
      return
    }

    if (!Array.isArray(items)) {
      console.error(ERROR_MESSAGES.EXPERIENCE_ITEMS_INVALID)
      return
    }

    container.innerHTML = `
      <h2 class="section-title text-6xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 text-[#2d3748] after:content-[''] after:block after:w-16 after:h-1 after:bg-[#14418A]/90 after:mx-auto after:mt-2.5 after:rounded">${escapeHtml(title || '')}</h2>
      <div class="timeline max-w-4xl mx-auto relative">
        ${items.map(item => {
      if (!item || !item.position || !item.company) return ''
      return `
            <div class="glass-card mb-8 pl-8 border-l-2 border-[#14418A]/20 relative">
              <h3 class="text-xl font-bold mb-2 text-[#2d3748]">${escapeHtml(item.position)}</h3>
              <h4 class="text-lg mb-4 text-[#2d3748] opacity-75">${escapeHtml(item.company)}${item.period ? ' • ' + escapeHtml(item.period) : ''}</h4>
              <p class="text-[#2d3748] opacity-90">${escapeHtml(item.description || '')}</p>
            </div>
          `
    }).filter(Boolean).join('')}
      </div>
    `
  } catch (error) {
    console.error('Error rendering experience section:', error)
  }
}

/**
 * Render projects section with grid of project cards
 * 
 * Dynamically renders project cards from siteData.projects.
 * Each project includes name, category, description, URL, and icon.
 * 
 * @function renderProjects
 * @returns {void}
 * 
 * @example
 * // Call after DOM is ready
 * renderProjects()
 */
export function renderProjects() {
  try {
    const projectsSection = document.querySelector(SELECTORS.PROJECTS_SECTION)
    if (!projectsSection || !siteData.projects) {
      console.warn(ERROR_MESSAGES.PROJECTS_SECTION_NOT_FOUND)
      return
    }

    const { title, items } = siteData.projects
    const container = projectsSection.querySelector(SELECTORS.CONTAINER)

    if (!container) {
      console.error(ERROR_MESSAGES.PROJECTS_CONTAINER_NOT_FOUND)
      return
    }

    if (!Array.isArray(items)) {
      console.error(ERROR_MESSAGES.PROJECTS_ITEMS_INVALID)
      return
    }

    container.innerHTML = `
      <h2 class="section-title text-6xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 text-[#2d3748] after:content-[''] after:block after:w-16 after:h-1 after:bg-[#14418A]/90 after:mx-auto after:mt-2.5 after:rounded">${escapeHtml(title || '')}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        ${items.map(project => {
      if (!project || !project.name || !project.url) return ''

      // Use custom SVG if provided, otherwise fallback to FontAwesome
      const iconContent = project.svg || `<i class="fas ${escapeHtml(project.icon || 'fa-folder')} text-white text-2xl"></i>`

      return `
            <a href="${escapeUrl(project.url)}" target="_blank" rel="noopener noreferrer" class="glass-card overflow-hidden relative group cursor-pointer block p-6">
              <div class="flex items-start gap-4">
                <div class="w-16 h-16 flex-shrink-0 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#14418A]/90 to-[#14418A]/90">
                  ${iconContent}
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-xl font-bold mb-1.5 text-[#2d3748]">${escapeHtml(project.name)}</h3>
                  <p class="text-[#14418A]/90 text-sm font-semibold mb-2">${escapeHtml(project.category || '')}</p>
                </div>
              </div>
              <p class="text-[#2d3748] opacity-75 text-sm leading-relaxed mt-3">${escapeHtml(project.description || '')}</p>
            </a>
          `
    }).filter(Boolean).join('')}
      </div>
    `
  } catch (error) {
    console.error('Error rendering projects section:', error)
  }
}

/**
 * Render about section with profile information
 * 
 * Dynamically renders about section including profile image, bio paragraphs,
 * quick info cards, and freelance services from siteData.about.
 * 
 * @function renderAbout
 * @returns {void}
 * 
 * @example
 * // Call after DOM is ready
 * renderAbout()
 */
export function renderAbout() {
  try {
    const aboutSection = document.querySelector(SELECTORS.ABOUT_SECTION)
    if (!aboutSection || !siteData.about) {
      console.warn(ERROR_MESSAGES.ABOUT_SECTION_NOT_FOUND)
      return
    }

    const { title, profileImage, subtitle, tagline, paragraphs, quickInfo, freelanceServices } = siteData.about
    const container = aboutSection.querySelector(SELECTORS.CONTAINER)

    if (!container) {
      console.error(ERROR_MESSAGES.ABOUT_CONTAINER_NOT_FOUND)
      return
    }

    container.innerHTML = `
      <h2 class="section-title text-6xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 text-[#2d3748] after:content-[''] after:block after:w-16 after:h-1 after:bg-[#14418A]/90 after:mx-auto after:mt-2.5 after:rounded">${escapeHtml(title || '')}</h2>
      <div class="glass-card max-w-4xl mx-auto">
        <!-- Profile Header -->
        <div class="text-center mb-10">
          <div class="inline-block relative mb-6">
            <img src="${escapeUrl(profileImage || '')}" alt="${escapeHtml(title || '')}" width="192" height="192" class="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/30 shadow-2xl object-cover mx-auto" loading="eager" decoding="async" fetchpriority="high">
          </div>
        </div>

        <!-- About Content -->
        <div class="mb-10 px-4 md:px-8">
          <div class="max-w-3xl mx-auto space-y-6 text-left">
            ${Array.isArray(paragraphs) ? paragraphs.map(p => `
              <p class="text-[#2d3748] opacity-90 leading-relaxed">${escapeHtml(p || '')}</p>
            `).join('') : ''}
          </div>
        </div>

        <!-- Quick Info Cards -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10 px-4 md:px-8">
          ${Array.isArray(quickInfo) ? quickInfo.map(info => {
      if (!info || !info.icon) return ''
      const value = info.value || ''
      return `
              <div class="bg-white/40 p-5 rounded-xl border border-black/5 text-center hover:bg-white/50 transition-all duration-200">
                <i class="fas ${escapeHtml(info.icon)} text-[#14418A]/90 text-2xl mb-2"></i>
                <p class="text-sm font-semibold text-[#2d3748] ${value.includes('@') ? 'break-all' : ''}">${escapeHtml(value)}</p>
                <p class="text-xs text-[#2d3748] opacity-75">${escapeHtml(info.label || '')}</p>
              </div>
            `
    }).filter(Boolean).join('') : ''}
        </div>
        </div>
      </div>
    `
  } catch (error) {
    console.error('Error rendering about section:', error)
  }
}

/**
 * Render technical skills section with skill badges
 * 
 * Dynamically renders skill badges from siteData.skills.
 * Each skill includes name and icon image.
 * 
 * @function renderSkills
 * @returns {void}
 * 
 * @example
 * // Call after DOM is ready
 * renderSkills()
 */
export function renderSkills() {
  try {
    const skillsSection = document.querySelector(SELECTORS.SKILLS_SECTION)
    if (!skillsSection || !siteData.skills) {
      console.warn(ERROR_MESSAGES.SKILLS_SECTION_NOT_FOUND)
      return
    }

    const { title, items } = siteData.skills
    const container = skillsSection.querySelector(SELECTORS.CONTAINER)

    if (!container) {
      console.error(ERROR_MESSAGES.SKILLS_CONTAINER_NOT_FOUND)
      return
    }

    if (!Array.isArray(items)) {
      console.error(ERROR_MESSAGES.SKILLS_ITEMS_INVALID)
      return
    }

    container.innerHTML = `
      <h2 class="section-title text-6xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 text-[#2d3748] after:content-[''] after:block after:w-16 after:h-1 after:bg-[#14418A]/90 after:mx-auto after:mt-2.5 after:rounded">${escapeHtml(title || '')}</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
        ${items.map(skill => {
      if (!skill || !skill.name || !skill.icon) return ''
      const badgeHtml = `
            <div class="skill-badge group hover:scale-110 transition-transform duration-200" title="${escapeHtml(skill.name)}">
              <img src="${escapeUrl(skill.icon)}" alt="${escapeHtml(skill.name)}" width="56" height="56" class="w-14 h-14 mx-auto" loading="lazy" decoding="async">
            </div>
          `
      return skill.url
        ? `<a href="${escapeUrl(skill.url)}" target="_blank" rel="noopener noreferrer" class="block cursor-pointer">${badgeHtml}</a>`
        : badgeHtml
    }).filter(Boolean).join('')}
      </div>
    `
  } catch (error) {
    console.error('Error rendering skills section:', error)
  }
}

/**
 * Render contact section with contact form
 * 
 * Dynamically renders contact form from siteData.contact.
 * Form includes name, email, and message fields with validation.
 * 
 * @function renderContact
 * @returns {void}
 * 
 * @example
 * // Call after DOM is ready
 * renderContact()
 */
export function renderContact() {
  try {
    const contactSection = document.querySelector(SELECTORS.CONTACT_SECTION)
    if (!contactSection || !siteData.contact) {
      console.warn(ERROR_MESSAGES.CONTACT_SECTION_NOT_FOUND)
      return
    }

    const { title, form } = siteData.contact
    const container = contactSection.querySelector(SELECTORS.CONTAINER)

    if (!container) {
      console.error(ERROR_MESSAGES.CONTACT_CONTAINER_NOT_FOUND)
      return
    }

    if (!form || !form.name || !form.email || !form.message) {
      console.error(ERROR_MESSAGES.CONTACT_FORM_INVALID)
      return
    }

    container.innerHTML = `
      <h2 class="section-title text-6xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 text-[#2d3748] after:content-[''] after:block after:w-16 after:h-1 after:bg-[#14418A]/90 after:mx-auto after:mt-2.5 after:rounded">${escapeHtml(title || '')}</h2>
      <div class="glass-card max-w-4xl mx-auto">
        <form id="contactForm" class="grid grid-cols-1 md:grid-cols-10 gap-6">
          <div class="md:col-span-7 space-y-6">
            <div>
              <label for="email" class="block mb-2 font-semibold text-[#2d3748]">${escapeHtml(form.email.label || 'Email')} ${form.email.required ? '<span class="text-red-500">*</span>' : ''}</label>
              <input type="email" id="email" name="email" ${form.email.required ? 'required' : ''} class="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-[#2d3748] placeholder:text-[#2d3748]/50 focus:outline-none focus:border-[#14418A]/40 transition-colors duration-150" placeholder="${escapeHtml(form.email.placeholder || '')}">
            </div>
            <div>
              <label for="message" class="block mb-2 font-semibold text-[#2d3748]">${escapeHtml(form.message.label || 'Message')}</label>
              <textarea id="message" name="message" rows="4" ${form.message.required ? 'required' : ''} class="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-[#2d3748] placeholder:text-[#2d3748]/50 focus:outline-none focus:border-[#14418A]/40 transition-colors duration-150 resize-none" placeholder="${escapeHtml(form.message.placeholder || '')}"></textarea>
            </div>
            <div id="contactSuccessMessage" class="hidden p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-700 text-center"></div>
            <div id="contactErrorMessage" class="hidden p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-700 text-center"></div>
          </div>
          <div class="md:col-span-3 flex items-end justify-end">
            <button type="submit" class="btn-glass-lg w-full">${escapeHtml(form.submitButton || 'Send Message')}</button>
          </div>
        </form>
      </div>
    `
  } catch (error) {
    console.error('Error rendering contact section:', error)
  }
}

/**
 * Render footer section with social links and copyright
 * 
 * Dynamically renders footer with social media links and copyright text
 * from siteData.footer.
 * 
 * @function renderFooter
 * @returns {void}
 * 
 * @example
 * // Call after DOM is ready
 * renderFooter()
 */
export function renderFooter() {
  try {
    const footer = document.querySelector(SELECTORS.FOOTER)
    if (!footer || !siteData.footer) {
      console.warn('Footer section or data not found')
      return
    }

    const { socialLinks, copyright } = siteData.footer
    const container = footer.querySelector(SELECTORS.CONTAINER)

    if (!container) {
      console.error('Footer container not found')
      return
    }

    container.innerHTML = `
      <div class="social-icons flex justify-center gap-6 mt-4">
        ${Array.isArray(socialLinks) ? socialLinks.map(link => {
      if (!link || !link.url || !link.name) return ''
      return `
            <a href="${escapeUrl(link.url)}" target="_blank" rel="noopener noreferrer" class="text-6xl text-[#2d3748] hover:text-[#14418A]/90/70 hover:-translate-y-1 transition-all duration-150" aria-label="${escapeHtml(link.name)}">
              <i class="${escapeHtml(link.icon || '')}"></i>
            </a>
          `
    }).filter(Boolean).join('') : ''}
      </div>
      <p class="mt-4 text-[#2d3748] opacity-75">${escapeHtml(copyright || '')}</p>
    `
  } catch (error) {
    console.error('Error rendering footer section:', error)
  }
}

/**
 * Render all website sections
 * 
 * Convenience function that renders all sections in the correct order:
 * Hero, Experience, Projects, About, Skills, Contact, and Footer.
 * Also updates the page title from siteData.meta.
 * 
 * @function renderAll
 * @returns {void}
 * 
 * @example
 * // Call after DOM is ready to render entire page
 * renderAll()
 */
export function renderAll() {
  try {
    renderHero()
    renderExperience()
    renderProjects()
    renderAbout()
    renderSkills()
    renderContact()
    renderFooter()

    // Update page title from metadata
    if (siteData.meta?.title) {
      document.title = siteData.meta.title
    }
  } catch (error) {
    console.error('Error rendering sections:', error)
  }
}

