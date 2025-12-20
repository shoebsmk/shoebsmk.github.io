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
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" /><path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z" fill="white" opacity="0.8" /></svg>`
      },
      {
        name: 'S. Mart',
        category: 'Spring Java • Enterprise Web Application',
        description: 'Enterprise e-commerce platform built with Spring Java, offering seamless shopping with product catalogs, secure checkout, and order tracking.',
        url: 'https://github.com/shoebsmk/group2',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`
      },
      {
        name: 'Walking Tour – Chicago Loop',
        category: 'Android • Mobile Application',
        description: 'Mobile guide app that transforms your phone into a personal tour guide through Chicago\'s iconic Loop architecture with GPS navigation and historical insights.',
        url: 'https://github.com/shoebsmk/Tours2',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
      },
      {
        name: 'Space Invaders',
        category: 'C# • Game Development',
        description: 'Classic arcade game recreated from scratch using C# with smooth gameplay, progressive difficulty, and nostalgic retro vibes.',
        url: 'https://github.com/shoebsmk/SpaceInvaders',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /><circle cx="6" cy="9" r="1.5" fill="white" opacity="0.8" /><circle cx="12" cy="9" r="1.5" fill="white" opacity="0.8" /><circle cx="18" cy="9" r="1.5" fill="white" opacity="0.8" /></svg>`
      },
      {
        name: 'CTA Bus Tracker',
        category: 'Android • Kotlin • Jetpack',
        description: 'Real-time transit companion that shows bus locations, arrival times, and favorite routes with smart alerts and offline support.',
        url: 'https://github.com/shoebsmk/CTABusTracker',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" /></svg>`
      },
      {
        name: 'News App',
        category: 'Android • MediaPlayer API • ViewPager2',
        description: 'Personalized news aggregator that curates articles from multiple sources with category filters, video integration, and a sleek interface.',
        url: 'https://github.com/shoebsmk/News',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>`
      },
      {
        name: 'Stock Watch',
        category: 'Android • RESTful API • RecyclerView',
        description: 'Live stock market tracker that displays real-time prices, dynamic UI updates, and offline caching for your favorite stocks.',
        url: 'https://github.com/shoebsmk/Stock-Watch',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><path d="M3 18h18v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /><path d="M16 12l-4-4v3H6v2h6v3l4-4z" fill="white" opacity="0.9" /></svg>`
      },
      {
        name: 'Civil Advocacy',
        category: 'Android • Google Civic Information API',
        description: 'Civic engagement app that connects you with local government officials and representatives based on your location.',
        url: 'https://github.com/shoebsmk/Civil_Advocacy',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /><circle cx="12" cy="12" r="3" fill="white" opacity="0.8" /></svg>`
      },
      {
        name: 'Scrumdinger',
        category: 'iOS • Swift • SwiftUI',
        description: 'Daily scrum management tool for iOS that helps teams track meetings, timers, and progress with an intuitive SwiftUI interface.',
        url: 'https://github.com/shoebsmk',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-4v-2h4v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>`
      },
      {
        name: 'Space Shooter',
        category: 'Unity2D • C# • Game Development',
        description: 'Action-packed Unity2D game featuring smooth animations, power-ups, challenging levels, and immersive gameplay.',
        url: 'https://github.com/shoebsmk',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /><circle cx="8" cy="9" r="1" fill="white" opacity="0.9" /><circle cx="12" cy="9" r="1" fill="white" opacity="0.9" /><circle cx="16" cy="9" r="1" fill="white" opacity="0.9" /><rect x="10" y="11" width="4" height="2" fill="white" opacity="0.9" /></svg>`
      },
      {
        name: 'Design Patterns for Games',
        category: 'Research Project • MVC • Observer Pattern',
        description: 'Research project exploring scalable game architecture using MVC, Observer, and State patterns for maintainable codebases.',
        url: 'https://github.com/shoebsmk',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><rect x="3" y="3" width="7" height="7" rx="1" fill="white" opacity="0.8" /><rect x="14" y="3" width="7" height="7" rx="1" fill="white" opacity="0.8" /><rect x="3" y="14" width="7" height="7" rx="1" fill="white" opacity="0.8" /><rect x="14" y="14" width="7" height="7" rx="1" fill="white" opacity="0.8" /><path d="M6.5 6.5h5M17.5 6.5h-5M6.5 17.5h5M17.5 17.5h-5" stroke="white" stroke-width="1.5" opacity="0.6" /><path d="M10 3v7M14 3v7M10 14v7M14 14v7" stroke="white" stroke-width="1.5" opacity="0.6" /></svg>`
      },
      {
        name: 'Real-time Game Engine',
        category: 'C++ • DirectX 11 • Game Engine',
        description: 'Custom-built C++ game engine with DirectX 11 integration, featuring advanced memory management and flexible runtime systems.',
        url: 'https://github.com/shoebsmk',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5 3.5 3.5 0 0115.5 12 3.5 3.5 0 0112 15.5m0-5A1.5 1.5 0 0010.5 12 1.5 1.5 0 0012 13.5 1.5 1.5 0 0013.5 12 1.5 1.5 0 0012 10.5M10.5 12a1.5 1.5 0 00-1.5-1.5 1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5M15.5 12a1.5 1.5 0 00-1.5-1.5 1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5M12 4.5A7.5 7.5 0 004.5 12 7.5 7.5 0 0012 19.5 7.5 7.5 0 0019.5 12 7.5 7.5 0 0012 4.5M12 18a6 6 0 01-6-6 6 6 0 016-6 6 6 0 016 6 6 6 0 01-6 6z" /></svg>`
      },
      {
        name: 'Particle System Optimization',
        category: 'C++ • SIMD • Performance Optimization',
        description: 'High-performance C++ optimization project using SIMD instructions and advanced algorithms to boost rendering efficiency.',
        url: 'https://github.com/shoebsmk',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8"><circle cx="5" cy="5" r="1.5" fill="white" opacity="0.9" /><circle cx="12" cy="3" r="1.5" fill="white" opacity="0.9" /><circle cx="19" cy="6" r="1.5" fill="white" opacity="0.9" /><circle cx="8" cy="12" r="1.5" fill="white" opacity="0.9" /><circle cx="16" cy="11" r="1.5" fill="white" opacity="0.9" /><circle cx="4" cy="18" r="1.5" fill="white" opacity="0.9" /><circle cx="15" cy="19" r="1.5" fill="white" opacity="0.9" /><circle cx="20" cy="16" r="1.5" fill="white" opacity="0.9" /><path d="M3.5 18.49l6-6.01 4 4L22 6.92" stroke="white" stroke-width="2" fill="none" opacity="0.7" /></svg>`
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
    ]
  },

  // Technical Skills Section
  skills: {
    title: 'Technical Skills',
    items: [
      // Mobile Development
      { name: 'Flutter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg', url: 'https://flutter.dev' },
      { name: 'Swift', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg', url: 'https://swift.org' },
      { name: 'Kotlin', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg', url: 'https://kotlinlang.org' },
      { name: 'Android', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg', url: 'https://developer.android.com' },
      { name: 'Xcode', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/xcode/xcode-original.svg', url: 'https://developer.apple.com/xcode' },
      { name: 'Unity', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg', url: 'https://unity.com' },

      // Frontend/Web
      { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', url: 'https://react.dev' },
      { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org' },
      { name: 'Figma', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg', url: 'https://www.figma.com' },

      // Backend
      { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', url: 'https://www.python.org' },
      { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', url: 'https://www.oracle.com/java/' },
      { name: 'Spring', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg', url: 'https://spring.io' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', url: 'https://laravel.com' },
      { name: 'Scala', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg', url: 'https://www.scala-lang.org' },
      { name: 'GraphQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg', url: 'https://graphql.org' },
      { name: '.NET', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg', url: 'https://dotnet.microsoft.com' },
      { name: 'C#', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg', url: 'https://learn.microsoft.com/en-us/dotnet/csharp' },
      { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', url: 'https://isocpp.org' },

      // Cloud/DevOps
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg', url: 'https://aws.amazon.com' },
      { name: 'GCP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg', url: 'https://cloud.google.com' },
      { name: 'Azure', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg', url: 'https://azure.microsoft.com' },
      { name: 'Terraform', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg', url: 'https://www.terraform.io' },
      { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', url: 'https://www.docker.com' },
      { name: 'CI/CD', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg', url: 'https://github.com/features/actions' },
      { name: 'Linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', url: 'https://www.kernel.org' },
      { name: 'n8n', icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/n8n-color.svg', url: 'https://n8n.io' },

      // Databases/Tools
      { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com' },
      { name: 'Firebase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg', url: 'https://firebase.google.com' },
      { name: 'Supabase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg', url: 'https://supabase.com' },
      { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', url: 'https://git-scm.com' },
      { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', url: 'https://github.com' },
      { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg', url: 'https://www.atlassian.com/software/jira' },
      { name: 'TensorFlow', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg', url: 'https://www.tensorflow.org' },
      { name: 'QuickBooks', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/quickbooks.svg', url: 'https://quickbooks.intuit.com' },
      { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', url: 'https://powerbi.microsoft.com' },
      { name: 'SAP', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', url: 'https://www.sap.com' },
      { name: 'Crew AI', icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/crewai-color.svg', url: 'https://www.crewai.com' }
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

