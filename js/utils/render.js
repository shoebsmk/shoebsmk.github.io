/**
 * Rendering Utilities
 * 
 * Functions to dynamically render sections from data
 */

import { siteData } from '../data/content.js'

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  if (typeof text !== 'string') {
    return String(text || '')
  }
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

/**
 * Safely escape URL to prevent XSS
 * @param {string} url - URL to escape
 * @returns {string} Escaped URL
 */
function escapeUrl(url) {
  if (typeof url !== 'string') {
    return '#'
  }
  // Basic URL validation - only allow http, https, mailto, and relative paths
  if (url.startsWith('http://') || url.startsWith('https://') || 
      url.startsWith('mailto:') || url.startsWith('/') || url.startsWith('#')) {
    return escapeHtml(url)
  }
  return '#'
}

/**
 * Render hero section
 */
export function renderHero() {
  try {
    const heroSection = document.querySelector('#home .container')
    if (!heroSection || !siteData.hero) {
      console.warn('Hero section or data not found')
      return
    }

    const { name, title, buttons } = siteData.hero

    if (!name || !title || !Array.isArray(buttons)) {
      console.error('Invalid hero data structure')
      return
    }

    heroSection.innerHTML = `
      <h1 class="text-8xl md:text-9xl mb-4 bg-gradient-to-r from-[#4c51bf] to-[#3730a3] bg-clip-text text-transparent">${escapeHtml(name)}</h1>
      <p class="text-3xl text-[#2d3748] mb-8 opacity-75">${escapeHtml(title)}</p>
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
 * Render experience section
 */
export function renderExperience() {
  try {
    const experienceSection = document.querySelector('#experience')
    if (!experienceSection || !siteData.experience) {
      console.warn('Experience section or data not found')
      return
    }

    const { title, items } = siteData.experience
    const container = experienceSection.querySelector('.container')

    if (!container) {
      console.error('Experience container not found')
      return
    }

    if (!Array.isArray(items)) {
      console.error('Experience items must be an array')
      return
    }

    container.innerHTML = `
      <h2 class="section-title text-4xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 text-[#2d3748] after:content-[''] after:block after:w-16 after:h-1 after:bg-[#4c51bf] after:mx-auto after:mt-2.5 after:rounded">${escapeHtml(title || '')}</h2>
      <div class="timeline max-w-4xl mx-auto relative">
        ${items.map(item => {
          if (!item || !item.position || !item.company) return ''
          return `
            <div class="glass-card mb-8 pl-8 border-l-2 border-[#4c51bf]/30 relative">
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
 * Render projects section
 */
export function renderProjects() {
  try {
    const projectsSection = document.querySelector('#portfolio')
    if (!projectsSection || !siteData.projects) {
      console.warn('Projects section or data not found')
      return
    }

    const { title, items } = siteData.projects
    const container = projectsSection.querySelector('.container')

    if (!container) {
      console.error('Projects container not found')
      return
    }

    if (!Array.isArray(items)) {
      console.error('Projects items must be an array')
      return
    }

    container.innerHTML = `
      <h2 class="section-title text-4xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 text-[#2d3748] after:content-[''] after:block after:w-16 after:h-1 after:bg-[#4c51bf] after:mx-auto after:mt-2.5 after:rounded">${escapeHtml(title || '')}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${items.map(project => {
          if (!project || !project.name || !project.url) return ''
          return `
            <a href="${escapeUrl(project.url)}" target="_blank" rel="noopener noreferrer" class="glass-card overflow-hidden relative group cursor-pointer block p-6 flex flex-col">
              <div class="flex items-start gap-4 mb-4 min-h-[80px]">
                <div class="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#4c51bf] to-[#3730a3] rounded-xl">
                  <i class="fas ${escapeHtml(project.icon || 'fa-folder')} text-white text-2xl"></i>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold mb-2 text-[#2d3748]">${escapeHtml(project.name)}</h3>
                  <p class="text-[#4c51bf] text-sm font-semibold">${escapeHtml(project.category || '')}</p>
                </div>
              </div>
              <p class="text-[#2d3748] opacity-90 leading-relaxed flex-grow">${escapeHtml(project.description || '')}</p>
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
 * Render about section
 */
export function renderAbout() {
  try {
    const aboutSection = document.querySelector('#about')
    if (!aboutSection || !siteData.about) {
      console.warn('About section or data not found')
      return
    }

    const { title, profileImage, subtitle, tagline, paragraphs, quickInfo, freelanceServices } = siteData.about
    const container = aboutSection.querySelector('.container')

    if (!container) {
      console.error('About container not found')
      return
    }

    container.innerHTML = `
      <h2 class="section-title text-4xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 text-[#2d3748] after:content-[''] after:block after:w-16 after:h-1 after:bg-[#4c51bf] after:mx-auto after:mt-2.5 after:rounded">${escapeHtml(title || '')}</h2>
      <div class="glass-card max-w-5xl mx-auto">
        <!-- Profile Header -->
        <div class="text-center mb-10">
          <div class="inline-block relative mb-6">
            <img src="${escapeUrl(profileImage || '')}" alt="${escapeHtml(subtitle || '')}" class="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/30 shadow-2xl object-cover mx-auto" loading="lazy">
          </div>
          <h3 class="text-3xl md:text-4xl font-bold mb-3 text-[#2d3748]">${escapeHtml(subtitle || '')}</h3>
          <p class="text-lg text-[#2d3748] opacity-75 mb-6">${escapeHtml(tagline || '')}</p>
        </div>

        <!-- About Content -->
        <div class="mb-10 px-4 md:px-8">
          <div class="max-w-3xl mx-auto space-y-6">
            ${Array.isArray(paragraphs) ? paragraphs.map(p => `
              <p class="text-[#2d3748] opacity-90 leading-relaxed">${escapeHtml(p || '')}</p>
            `).join('') : ''}
          </div>
        </div>

        <!-- Quick Info Cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 px-4 md:px-8">
          ${Array.isArray(quickInfo) ? quickInfo.map(info => {
            if (!info || !info.icon) return ''
            const value = info.value || ''
            return `
              <div class="bg-white/40 p-4 rounded-xl border border-black/5 text-center hover:bg-white/50 transition-all duration-200">
                <i class="fas ${escapeHtml(info.icon)} text-[#4c51bf] text-2xl mb-2"></i>
                <p class="text-sm font-semibold text-[#2d3748] ${value.includes('@') ? 'break-all' : ''}">${escapeHtml(value)}</p>
                <p class="text-xs text-[#2d3748] opacity-75">${escapeHtml(info.label || '')}</p>
              </div>
            `
          }).filter(Boolean).join('') : ''}
        </div>
        
        <!-- Freelance Services -->
        ${freelanceServices ? `
          <div class="pt-8 border-t border-black/10">
            <h4 class="text-2xl font-bold mb-6 text-[#2d3748] text-center">${escapeHtml(freelanceServices.title || '')}</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8 pb-4">
              ${Array.isArray(freelanceServices.items) ? freelanceServices.items.map(service => {
                if (!service || !service.icon) return ''
                return `
                  <div class="bg-white/30 p-6 rounded-xl border border-black/5 hover:bg-white/40 hover:shadow-lg transition-all duration-200 group">
                    <div class="text-4xl mb-4 text-[#4c51bf] bg-white/50 w-20 h-20 flex items-center justify-center rounded-full mx-auto group-hover:scale-110 transition-transform duration-200">
                      <i class="fas ${escapeHtml(service.icon)}"></i>
                    </div>
                    <h5 class="text-lg font-bold mb-3 text-[#2d3748] text-center">${escapeHtml(service.title || '')}</h5>
                    <p class="text-sm text-[#2d3748] opacity-90 text-center leading-relaxed">${escapeHtml(service.description || '')}</p>
                  </div>
                `
              }).filter(Boolean).join('') : ''}
            </div>
          </div>
        ` : ''}
      </div>
    `
  } catch (error) {
    console.error('Error rendering about section:', error)
  }
}

/**
 * Render skills section
 */
export function renderSkills() {
  try {
    const skillsSection = document.querySelector('#skills')
    if (!skillsSection || !siteData.skills) {
      console.warn('Skills section or data not found')
      return
    }

    const { title, items } = siteData.skills
    const container = skillsSection.querySelector('.container')

    if (!container) {
      console.error('Skills container not found')
      return
    }

    if (!Array.isArray(items)) {
      console.error('Skills items must be an array')
      return
    }

    container.innerHTML = `
      <h2 class="section-title text-4xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 text-[#2d3748] after:content-[''] after:block after:w-16 after:h-1 after:bg-[#4c51bf] after:mx-auto after:mt-2.5 after:rounded">${escapeHtml(title || '')}</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
        ${items.map(skill => {
          if (!skill || !skill.name || !skill.icon) return ''
          return `
            <div class="skill-badge" title="${escapeHtml(skill.name)}">
              <img src="${escapeUrl(skill.icon)}" alt="${escapeHtml(skill.name)}" class="w-14 h-14 mx-auto" loading="lazy">
            </div>
          `
        }).filter(Boolean).join('')}
      </div>
    `
  } catch (error) {
    console.error('Error rendering skills section:', error)
  }
}

/**
 * Render contact section
 */
export function renderContact() {
  try {
    const contactSection = document.querySelector('#contact')
    if (!contactSection || !siteData.contact) {
      console.warn('Contact section or data not found')
      return
    }

    const { title, form } = siteData.contact
    const container = contactSection.querySelector('.container')

    if (!container) {
      console.error('Contact container not found')
      return
    }

    if (!form || !form.name || !form.email || !form.message) {
      console.error('Invalid contact form data structure')
      return
    }

    container.innerHTML = `
      <h2 class="section-title text-4xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 text-[#2d3748] after:content-[''] after:block after:w-16 after:h-1 after:bg-[#4c51bf] after:mx-auto after:mt-2.5 after:rounded">${escapeHtml(title || '')}</h2>
      <div class="glass-card">
        <form id="contactForm" class="space-y-6">
          <div>
            <label for="name" class="block mb-2 font-semibold text-[#2d3748]">${escapeHtml(form.name.label || 'Name')} ${form.name.required ? '<span class="text-red-500">*</span>' : ''}</label>
            <input type="text" id="name" name="name" ${form.name.required ? 'required' : ''} class="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-[#2d3748] placeholder:text-[#2d3748]/50 focus:outline-none focus:border-[#4c51bf]/50 transition-colors duration-150" placeholder="${escapeHtml(form.name.placeholder || '')}">
          </div>
          <div>
            <label for="email" class="block mb-2 font-semibold text-[#2d3748]">${escapeHtml(form.email.label || 'Email')} ${form.email.required ? '<span class="text-red-500">*</span>' : ''}</label>
            <input type="email" id="email" name="email" ${form.email.required ? 'required' : ''} class="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-[#2d3748] placeholder:text-[#2d3748]/50 focus:outline-none focus:border-[#4c51bf]/50 transition-colors duration-150" placeholder="${escapeHtml(form.email.placeholder || '')}">
          </div>
          <div>
            <label for="message" class="block mb-2 font-semibold text-[#2d3748]">${escapeHtml(form.message.label || 'Message')}</label>
            <textarea id="message" name="message" rows="4" ${form.message.required ? 'required' : ''} class="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-[#2d3748] placeholder:text-[#2d3748]/50 focus:outline-none focus:border-[#4c51bf]/50 transition-colors duration-150 resize-none" placeholder="${escapeHtml(form.message.placeholder || '')}"></textarea>
          </div>
          <div id="contactSuccessMessage" class="hidden p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-700 text-center"></div>
          <div id="contactErrorMessage" class="hidden p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-700 text-center"></div>
          <div class="flex justify-end">
            <button type="submit" class="btn-glass-lg">${escapeHtml(form.submitButton || 'Send Message')}</button>
          </div>
        </form>
      </div>
    `
  } catch (error) {
    console.error('Error rendering contact section:', error)
  }
}

/**
 * Render footer section
 */
export function renderFooter() {
  try {
    const footer = document.querySelector('footer')
    if (!footer || !siteData.footer) {
      console.warn('Footer section or data not found')
      return
    }

    const { socialLinks, copyright } = siteData.footer
    const container = footer.querySelector('.container')

    if (!container) {
      console.error('Footer container not found')
      return
    }

    container.innerHTML = `
      <div class="social-icons flex justify-center gap-6 mt-4">
        ${Array.isArray(socialLinks) ? socialLinks.map(link => {
          if (!link || !link.url || !link.name) return ''
          return `
            <a href="${escapeUrl(link.url)}" target="_blank" rel="noopener noreferrer" class="text-2xl text-[#2d3748] hover:text-[#4c51bf] hover:-translate-y-1 transition-all duration-150" aria-label="${escapeHtml(link.name)}">
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
 * Render all sections
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
    
    // Update page title
    if (siteData.meta?.title) {
      document.title = siteData.meta.title
    }
  } catch (error) {
    console.error('Error rendering sections:', error)
  }
}

