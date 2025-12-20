/**
 * Centralized Content Data
 * 
 * This file contains all text content for the portfolio website.
 * Update content here to easily modify text across all sections.
 */

export const siteData = {
  // Site metadata
  meta: {
    title: 'Shoeb Khan | Software Engineer',
    lang: 'en'
  },

  // Hero Section
  hero: {
    name: 'Shoeb Khan',
    title: 'Software Engineer | Mobile App Architect',
    buttons: [
      { text: 'Download Resume', href: '/resume.pdf', type: 'download' }
    ]
  },

  // Work Experience Section
  experience: {
    title: 'Work Experience',
    items: [
      {
        position: 'Software Engineer',
        company: 'FNR Solutions, Inc.',
        period: 'Jul 2024 - Present',
        description: 'Building full-stack web applications that deliver seamless user experiences, from intuitive interfaces to robust backend systems. Architecting cloud infrastructure with automated deployments and enterprise-grade security, enabling the team to ship faster and scale confidently.'
      },
      {
        position: 'Software Engineer (Flutter)',
        company: 'Align Astrology',
        period: 'Jan 2024 - Jul 2024',
        description: 'Developed AI-powered compatibility features that transform how users discover connections, while redesigning the core experience to be more personalized and engaging—driving a 20% increase in user engagement. Streamlined deployment pipelines to accelerate release cycles and improve product quality.'
      },
      {
        position: 'Software Developer',
        company: 'SkyIT Services',
        period: 'Feb 2023 - Jan 2024',
        description: 'Transformed app performance through offline-first architecture, reducing load times by 30% and increasing user engagement by 25%. Spearheaded the migration to modern Android development practices, elevating code quality and team productivity.'
      },
      {
        position: 'Mobile Application Developer',
        company: 'Checago Coffee App',
        period: 'Nov 2022 - May 2023',
        description: 'Engineered real-time notification systems that keep customers connected throughout their journey, while streamlining the checkout experience for frictionless ordering. Designed and deployed scalable cloud infrastructure to support seamless API integrations and reliable service delivery.'
      }
    ]
  },

  // Projects Section
  projects: {
    title: 'Projects',
    items: [
      {
        name: 'SmartChat',
        category: 'Real-time Messenger • AI Integration',
        description: 'Real-time messenger app with chatrooms, user profiles, typing and online indicators, read receipts, media sharing, dark mode, and an AI Assist tab for chatting with multiple contacts using AI.',
        url: 'https://github.com/shoebsmk/Flutter-chat-claude',
        icon: 'fa-comments'
      },
      {
        name: 'S. Mart',
        category: 'Spring Java • Enterprise Web Application',
        description: 'Enterprise e-commerce platform built with Spring Java, offering seamless shopping with product catalogs, secure checkout, and order tracking.',
        url: 'https://github.com/shoebsmk/group2',
        icon: 'fa-shopping-cart'
      },
      {
        name: 'Walking Tour – Chicago Loop',
        category: 'Android • Mobile Application',
        description: 'Mobile guide app that transforms your phone into a personal tour guide through Chicago\'s iconic Loop architecture with GPS navigation and historical insights.',
        url: 'https://github.com/shoebsmk/Tours2',
        icon: 'fa-map-marked-alt'
      },
      {
        name: 'Space Invaders',
        category: 'C# • Game Development',
        description: 'Classic arcade game recreated from scratch using C# with smooth gameplay, progressive difficulty, and nostalgic retro vibes.',
        url: 'https://github.com/shoebsmk/SpaceInvaders',
        icon: 'fa-rocket'
      },
      {
        name: 'CTA Bus Tracker',
        category: 'Android • Kotlin • Jetpack',
        description: 'Real-time transit companion that shows bus locations, arrival times, and favorite routes with smart alerts and offline support.',
        url: 'https://github.com/shoebsmk/CTABusTracker',
        icon: 'fa-bus'
      },
      {
        name: 'News App',
        category: 'Android • MediaPlayer API • ViewPager2',
        description: 'Personalized news aggregator that curates articles from multiple sources with category filters, video integration, and a sleek interface.',
        url: 'https://github.com/shoebsmk/News',
        icon: 'fa-newspaper'
      },
      {
        name: 'Scrumdinger',
        category: 'iOS • Swift • SwiftUI',
        description: 'Daily scrum management tool for iOS that helps teams track meetings, timers, and progress with an intuitive SwiftUI interface.',
        url: 'https://github.com/shoebsmk',
        icon: 'fa-tasks'
      },
      {
        name: 'Space Shooter',
        category: 'Unity2D • C# • Game Development',
        description: 'Action-packed Unity2D game featuring smooth animations, power-ups, challenging levels, and immersive gameplay.',
        url: 'https://github.com/shoebsmk',
        icon: 'fa-space-shuttle'
      },
      {
        name: 'Real-time Game Engine',
        category: 'C++ • DirectX 11 • Game Engine',
        description: 'Custom-built C++ game engine with DirectX 11 integration, featuring advanced memory management and flexible runtime systems.',
        url: 'https://github.com/shoebsmk',
        icon: 'fa-cogs'
      },
      {
        name: 'Particle System Optimization',
        category: 'C++ • SIMD • Performance Optimization',
        description: 'High-performance C++ optimization project using SIMD instructions and advanced algorithms to boost rendering efficiency.',
        url: 'https://github.com/shoebsmk',
        icon: 'fa-tachometer-alt'
      }
    ]
  },

  // About Section
  about: {
    title: 'About Me',
    profileImage: '/images/linkedinprofilepic.jpeg',
    name: 'Shoeb Khan',
    subtitle: 'Shoeb Khan',
    tagline: 'Building modern, intuitive mobile and web experiences',
    paragraphs: [
      'Hi, I\'m Shoeb Khan—a software engineer and mobile app architect focused on building scalable, high-performance products from idea to production. I specialize in designing clean, maintainable systems that deliver fast, intuitive user experiences across mobile and web.',
      'With over five years of experience, I\'ve architected and shipped full-stack applications for startups and enterprises, working across Flutter and native mobile platforms, backend services, and cloud infrastructure on AWS. I\'m especially interested in performance-critical systems, product scalability, and developer-friendly architectures.',
      'I\'m currently building SmartChat, an AI-powered messaging platform that uses natural language understanding to simplify how people communicate across web and mobile.',
      'Outside of product work, I explore software fundamentals by building games and system-level projects—including developing a custom game engine from scratch.'
    ],
    quickInfo: [
      { icon: 'fa-briefcase', value: '5 Years', label: 'Experience' },
      { icon: 'fa-graduation-cap', value: 'Master\'s', label: 'DePaul University' },
      { icon: 'fa-map-marker-alt', value: 'Chicago, IL', label: 'Location' },
      { icon: 'fa-envelope', value: 'shoebwm@gmail.com', label: 'Contact' }
    ],
    freelanceServices: {
      title: 'Freelance Services',
      items: [
        {
          icon: 'fa-layer-group',
          title: 'Full Stack Dev',
          description: 'Building custom full-stack web applications using MERN, LAMP, .Net, or Spring Java stacks tailored to your business needs.'
        },
        {
          icon: 'fa-mobile-alt',
          title: 'Mobile Apps',
          description: 'High-quality Android (Java/Kotlin) and iOS (Swift/Obj-C) applications with seamless and platform-specific experiences.'
        },
        {
          icon: 'fa-cloud',
          title: 'Cloud & DevOps',
          description: 'Designing scalable infrastructure on AWS/Azure and orchestrating pipelines using Docker, Kubernetes, and CI/CD tools.'
        }
      ]
    }
  },

  // Technical Skills Section
  skills: {
    title: 'Technical Skills',
    items: [
      // Mobile Development
      { name: 'Flutter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
      { name: 'Swift', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg' },
      { name: 'Kotlin', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg' },
      { name: 'Android', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg' },
      { name: 'Xcode', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/xcode/xcode-original.svg' },
      { name: 'Unity', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg' },

      // Frontend/Web
      { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
      { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
      { name: 'Figma', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },

      // Backend
      { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
      { name: 'Spring', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'Scala', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg' },
      { name: 'GraphQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg' },
      { name: '.NET', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'C#', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
      { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },

      // Cloud/DevOps
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg' },
      { name: 'GCP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Azure', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg' },
      { name: 'Terraform', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg' },
      { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
      { name: 'CI/CD', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg' },
      { name: 'Linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
      { name: 'n8n', icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/n8n-color.svg' },

      // Databases/Tools
      { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' },
      { name: 'Supabase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg' },
      { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
      { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg' },
      { name: 'TensorFlow', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
      { name: 'QuickBooks', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/quickbooks.svg' },
      { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
      { name: 'SAP', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
      { name: 'Crew AI', icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/crewai-color.svg' }
    ]
  },

  // Contact Section
  contact: {
    title: 'Contact Me',
    form: {
      name: {
        label: 'Name',
        placeholder: 'Your name',
        required: true
      },
      email: {
        label: 'Email',
        placeholder: 'your.email@example.com',
        required: true
      },
      message: {
        label: 'Message',
        placeholder: 'Tell me more about your inquiry...',
        required: false
      },
      submitButton: 'Send Message',
      successMessage: 'Thank you! Your message has been sent successfully.',
      errorMessage: 'Sorry, there was an error sending your message. Please try again later.',
      validationError: 'Please fill in all required fields.',
      sendingText: 'Sending...'
    },
    recipientEmail: 'shoebwm@gmail.com'
  },

  // Footer Section
  footer: {
    socialLinks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/shoebsmk/',
        icon: 'fab fa-linkedin'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/shoebsmk/',
        icon: 'fab fa-github'
      }
      // Uncomment to add more social links:
      // { name: 'Instagram', url: 'https://www.instagram.com/shoeb_mk_', icon: 'fab fa-instagram' },
      // { name: 'Twitter', url: 'https://www.x.com/shoebsmk', icon: 'fab fa-twitter' }
    ],
    copyright: '© 2025 Shoeb Khan. All Rights Reserved.'
  }
}

