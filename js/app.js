/**
 * ====================================================================
 * RUSHIKESH TAWADE PORTFOLIO & RESUME — INTERACTIVE LOGIC
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check if data is loaded
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error('PORTFOLIO_DATA not found. Please ensure data.js is loaded first.');
    return;
  }

  const data = PORTFOLIO_DATA;

  // Icon SVG Registry (Clean, professional SVG icons — zero external dependencies)
  const ICONS = {
    'mail': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    'github': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    'linkedin': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    'map-pin': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
    'external-link': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
    'download': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    'arrow-right': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    'arrow-up': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>`,
    'check': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    'copy': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    'code': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    'layout': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
    'server': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
    'database': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    'cpu': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
    'terminal': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`,
    'briefcase': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    'graduation-cap': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
    'award': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    'cloud': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    'folder-git-2': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"/><circle cx="13" cy="12" r="2"/><path d="m13 14v6"/><circle cx="13" cy="20" r="2"/></svg>`,
    'git-commit': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><line x1="3" x2="9" y1="12" y2="12"/><line x1="15" x2="21" y1="12" y2="12"/></svg>`,
    'calendar': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
    'send': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
    'sparkles': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    'printer': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>`,
    'video': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/></svg>`,
    'film': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"/><line x1="7" x2="7" y1="2" y2="22"/><line x1="17" x2="17" y1="2" y2="22"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="2" x2="7" y1="7" y2="7"/><line x1="2" x2="7" y1="17" y2="17"/><line x1="17" x2="22" y1="17" y2="17"/><line x1="17" x2="22" y1="7" y2="7"/></svg>`,
    'image': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
    'share-2': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`,
    'zap': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    'star': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    'flame': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    'user-check': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`
  };

  const getIcon = (name) => ICONS[name] || ICONS['sparkles'];

  // 1. Initial State Renderings
  renderHeroDetails();
  renderHeroStats();
  renderAboutDetails();
  renderServices();
  renderSkills();
  renderExperience();
  renderEducation();
  renderCertifications();
  renderContactInfo();
  initCanvasAnimation();
  initTypewriter();
  initNavigation();
  initContactForm();

  // Typewriter Effect
  function initTypewriter() {
    const textElement = document.getElementById('typed-role-text');
    if (!textElement) return;

    const phrases = data.personal.typedTitles;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 90;

    function tick() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 40;
      } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 90;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 1600; // Pause at end of text
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 400; // Pause before next word
      }

      setTimeout(tick, typeSpeed);
    }

    tick();
  }

  // Hero Section Elements
  function renderHeroDetails() {
    const nameEl = document.getElementById('hero-name');
    if (nameEl) nameEl.textContent = data.personal.name;

    const taglineEl = document.getElementById('hero-tagline');
    if (taglineEl) taglineEl.textContent = data.personal.tagline;

    const socialContainer = document.getElementById('hero-social-links');
    if (socialContainer) {
      socialContainer.innerHTML = `
        <a href="${data.personal.github}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">
          ${getIcon('github')}
        </a>
        <a href="${data.personal.linkedin}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="LinkedIn">
          ${getIcon('linkedin')}
        </a>
        <a href="mailto:${data.personal.email}" class="social-btn" aria-label="Email">
          ${getIcon('mail')}
        </a>
      `;
    }

    const heroStatus = document.getElementById('hero-status-pill');
    if (heroStatus && data.personal.status) {
      heroStatus.innerHTML = `
        <div class="hero-pill-avatar">
          <img src="${data.personal.avatar}" alt="${data.personal.name}" class="hero-mini-photo">
          <span class="pulse-dot"></span>
        </div>
        <div class="hero-pill-info">
          <span class="hero-pill-name">${data.personal.preferredName || data.personal.name}</span>
          <span class="hero-pill-sep">·</span>
          <span class="hero-pill-status">${data.personal.status.text}</span>
        </div>
      `;
    }
  }

  // Hero Stats Ticker
  function renderHeroStats() {
    const container = document.getElementById('hero-stats-grid');
    if (!container) return;

    container.innerHTML = data.about.stats.map(s => `
      <div class="hero-stat-card">
        <div class="stat-icon-wrap">
          ${getIcon(s.icon || 'sparkles')}
        </div>
        <div class="stat-info">
          <div class="stat-val">${s.value}</div>
          <div class="stat-lbl">${s.label}</div>
        </div>
      </div>
    `).join('');
  }

  // About Section
  function renderAboutDetails() {
    const avatarEl = document.getElementById('about-avatar-img');
    if (avatarEl) avatarEl.src = data.personal.avatar;

    const bioContainer = document.getElementById('about-bio-text');
    if (bioContainer) {
      bioContainer.innerHTML = data.about.bio.map(p => `<p>${p}</p>`).join('');
    }

    const careerGoalEl = document.getElementById('about-career-goal');
    if (careerGoalEl) careerGoalEl.textContent = data.about.careerGoals;

    const interestsContainer = document.getElementById('about-interests-chips');
    if (interestsContainer) {
      interestsContainer.innerHTML = data.about.interests.map(item => `
        <span class="interest-chip">
          ${getIcon('sparkles')}
          <span>${item}</span>
        </span>
      `).join('');
    }
  }

  // Services Section
  function renderServices() {
    const grid = document.getElementById('services-grid');
    if (!grid || !data.services) return;

    grid.innerHTML = data.services.map(s => `
      <article class="service-card" data-service-id="${s.id}">
        <div class="service-card-top">
          <div class="service-icon-box">
            ${getIcon(s.icon || 'sparkles')}
          </div>
          <span class="service-badge">${s.badge}</span>
        </div>
        <h3>${s.title}</h3>
        <p class="service-desc">${s.description}</p>
        <ul class="service-deliverables">
          ${s.deliverables.map(item => `
            <li>${getIcon('check')} <span>${item}</span></li>
          `).join('')}
        </ul>
        <button type="button" class="btn btn-outline btn-sm service-cta-btn" data-service="${s.title}">
          <span>Inquire About This Service</span>
          ${getIcon('arrow-right')}
        </button>
      </article>
    `).join('');

    // Connect Book Service buttons to auto-populate contact subject
    grid.querySelectorAll('.service-cta-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-service');
        const subjectInput = document.getElementById('form-subject');
        const contactSection = document.getElementById('contact');
        if (subjectInput) {
          subjectInput.value = `Project Inquiry: ${title}`;
          subjectInput.focus();
        }
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        showToast('Service Selected', `Inquiry set for "${title}". Drop your project brief below!`);
      });
    });
  }

  // Skills Section
  function renderSkills(filter = 'all') {
    const grid = document.getElementById('skills-container-grid');
    if (!grid) return;

    const categories = filter === 'all'
      ? data.skills.categories
      : data.skills.categories.filter(c => c.id === filter);

    grid.innerHTML = categories.map(cat => `
      <div class="skill-category-card" data-category="${cat.id}">
        <div class="category-card-header">
          <div class="category-icon-box">
            ${getIcon(cat.icon || 'code')}
          </div>
          <div class="category-info">
            <h4>${cat.name}</h4>
            <p>${cat.description}</p>
          </div>
        </div>
        <div class="skills-items-list">
          ${cat.items.map(item => `
            <div class="skill-item-row">
              <div class="skill-item-header">
                <div class="skill-name-wrap">
                  <span class="skill-name">${item.name}</span>
                  <span class="skill-tag">${item.tag}</span>
                </div>
                <span class="skill-level-num">${item.level}%</span>
              </div>
              <div class="skill-progress-bar">
                <div class="skill-progress-fill" style="width: ${item.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Skills Filter Tabs
  const skillTabBtns = document.querySelectorAll('.skill-tab-btn');
  skillTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-skill-cat');
      renderSkills(cat);
    });
  });

  // Global ESC key listener for accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const mobileDrawer = document.getElementById('mobile-nav-drawer');
      const hamburgerBtn = document.getElementById('hamburger-toggle');
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Experience Section
  function renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    container.innerHTML = data.experience.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div class="timeline-header-info">
              <h4 class="role-title">${item.role}</h4>
              <div class="company-name">${item.company} · ${item.location}</div>
            </div>
            <div class="timeline-duration-badge">
              ${getIcon('calendar')}
              <span>${item.duration}</span>
            </div>
          </div>
          <div class="timeline-body">
            <p>${item.description}</p>
            <ul class="timeline-achievements">
              ${item.achievements.map(ach => `
                <li>${getIcon('check')} <span>${ach}</span></li>
              `).join('')}
            </ul>
            <div class="project-tech-tags" style="border: none; padding: 0; margin-bottom: 0;">
              ${item.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Education Section
  function renderEducation() {
    const container = document.getElementById('education-grid');
    if (!container) return;

    container.innerHTML = data.education.map(edu => `
      <div class="edu-cert-card">
        <div class="edu-cert-top">
          <div class="edu-cert-icon">
            ${getIcon('graduation-cap')}
          </div>
          <span class="edu-cert-badge">${edu.grade}</span>
        </div>
        <h4>${edu.degree}</h4>
        <div class="edu-cert-org">${edu.institution}</div>
        <div class="edu-cert-meta">
          <span>${edu.duration}</span>
          <span>•</span>
          <span>${edu.location}</span>
        </div>
        <p>${edu.description}</p>
        <ul class="project-highlights-list" style="margin-bottom: 0;">
          ${edu.highlights.map(h => `<li>${getIcon('check')} <span>${h}</span></li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // Certifications Section
  function renderCertifications() {
    const container = document.getElementById('certifications-grid');
    if (!container) return;

    container.innerHTML = data.certifications.map(cert => `
      <div class="edu-cert-card">
        <div class="edu-cert-top">
          <div class="edu-cert-icon">
            ${getIcon(cert.icon || 'award')}
          </div>
          <span class="edu-cert-badge">${cert.badge}</span>
        </div>
        <h4>${cert.title}</h4>
        <div class="edu-cert-org">${cert.issuer}</div>
        <div class="edu-cert-meta">
          <span>${cert.date}</span>
          <span>•</span>
          <span>ID: ${cert.credentialId}</span>
        </div>
        <p>Verified credential demonstrating production-level proficiency, architectural acumen, and technical standards.</p>
        <div style="margin-top: auto;">
          <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            ${getIcon('external-link')}
            <span>Verify Credential</span>
          </a>
        </div>
      </div>
    `).join('');
  }

  // Contact Info Panel
  function renderContactInfo() {
    const container = document.getElementById('contact-channels-list');
    if (!container) return;

    container.innerHTML = data.contact.channels.map(ch => `
      <div class="contact-card">
        <div class="contact-icon-box">
          ${getIcon(ch.icon)}
        </div>
        <div class="contact-details">
          <h5>${ch.label}</h5>
          <div class="contact-val">${ch.value}</div>
        </div>
        ${ch.isCopyable ? `
          <button class="contact-action-btn copy-email-btn" data-email="${ch.value}" aria-label="Copy ${ch.label}">
            ${getIcon('copy')}
            <span>Copy</span>
          </button>
        ` : `
          <a href="${ch.href}" target="_blank" rel="noopener noreferrer" class="contact-action-btn" aria-label="Open ${ch.label}">
            ${getIcon('external-link')}
            <span>Visit</span>
          </a>
        `}
      </div>
    `).join('');

    // Robust copy to clipboard helper
    function copyText(text) {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
      }
      return new Promise((resolve, reject) => {
        try {
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.left = '-9999px';
          textArea.style.top = '-9999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          const successful = document.execCommand('copy');
          document.body.removeChild(textArea);
          successful ? resolve() : reject(new Error('execCommand copy failed'));
        } catch (err) {
          reject(err);
        }
      });
    }

    // Attach copy button logic
    const copyBtns = container.querySelectorAll('.copy-email-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-email');
        copyText(text).then(() => {
          showToast('Copied to Clipboard!', `${text} has been copied.`);
          btn.innerHTML = `${getIcon('check')} <span>Copied!</span>`;
          setTimeout(() => {
            btn.innerHTML = `${getIcon('copy')} <span>Copy</span>`;
          }, 2500);
        }).catch(() => {
          showToast('Email Address', text);
        });
      });
    });
  }

  // Contact Form Handling with live validation & interactive feedback
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const messageTextarea = document.getElementById('form-message');
    const charCountEl = document.getElementById('msg-char-count');

    if (messageTextarea && charCountEl) {
      messageTextarea.addEventListener('input', () => {
        const len = messageTextarea.value.length;
        charCountEl.textContent = `${len} / 1000`;
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const msgInput = document.getElementById('form-message');
      const submitBtn = document.getElementById('form-submit-btn');

      let isValid = true;

      // Validate name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showFieldError(nameInput, 'Please enter your full name (at least 2 characters)');
        isValid = false;
      } else {
        clearFieldError(nameInput);
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'Please provide a valid email address');
        isValid = false;
      } else {
        clearFieldError(emailInput);
      }

      // Validate subject
      if (!subjectInput.value.trim()) {
        showFieldError(subjectInput, 'Please enter the subject of your inquiry');
        isValid = false;
      } else {
        clearFieldError(subjectInput);
      }

      // Validate message
      if (!msgInput.value.trim() || msgInput.value.trim().length < 10) {
        showFieldError(msgInput, 'Your message should be at least 10 characters long');
        isValid = false;
      } else {
        clearFieldError(msgInput);
      }

      if (!isValid) return;

      // Persist lead message safely in localStorage so inquiries are never lost
      try {
        const stored = JSON.parse(localStorage.getItem('portfolio_leads') || '[]');
        stored.push({
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          subject: subjectInput.value.trim(),
          message: msgInput.value.trim(),
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('portfolio_leads', JSON.stringify(stored));
      } catch (storageErr) {
        console.warn('Storage unavailable:', storageErr);
      }

      // Simulate sending state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="pulse-dot" style="display:inline-block; margin-right:8px;"></span>
        <span>Sending Message...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `${getIcon('check')} <span>Message Sent!</span>`;
        showToast('Message Received!', `Thank you ${nameInput.value.trim()}. I have received your message and will respond shortly.`);
        form.reset();
        if (charCountEl) charCountEl.textContent = '0 / 1000';

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
        }, 4000);
      }, 1000);
    });

    function showFieldError(input, message) {
      const field = input.closest('.form-field');
      field.classList.add('error');
      input.setAttribute('aria-invalid', 'true');
      let msgEl = field.querySelector('.error-msg');
      if (msgEl) msgEl.textContent = message;
    }

    function clearFieldError(input) {
      const field = input.closest('.form-field');
      field.classList.remove('error');
      input.setAttribute('aria-invalid', 'false');
    }
  }

  // Toast Notification System
  function showToast(title, message) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'toast-notification success';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <div class="toast-icon">${getIcon('check')}</div>
      <div class="toast-content">
        <h6>${title}</h6>
        <p>${message}</p>
      </div>
    `;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // Navigation, Scrollspy & Mobile Drawer
  function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburgerBtn = document.getElementById('hamburger-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const backToTopBtn = document.getElementById('back-to-top');

    // Sticky nav & Back to Top detection
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      if (backToTopBtn) {
        if (scrollY > 500) {
          backToTopBtn.style.opacity = '1';
          backToTopBtn.style.visibility = 'visible';
          backToTopBtn.style.pointerEvents = 'auto';
        } else {
          backToTopBtn.style.opacity = '0';
          backToTopBtn.style.visibility = 'hidden';
          backToTopBtn.style.pointerEvents = 'none';
        }
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Hamburger Drawer Toggle
    if (hamburgerBtn && mobileDrawer) {
      hamburgerBtn.addEventListener('click', () => {
        const isOpen = hamburgerBtn.classList.toggle('active');
        mobileDrawer.classList.toggle('open', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
      });

      // Close drawer on ANY link click (nav links and CTA button)
      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburgerBtn.classList.remove('active');
          mobileDrawer.classList.remove('open');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Scrollspy active item highlighting
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Dynamic current year updater
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // Constellation Particle Canvas in Background
  function initCanvasAnimation() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    // Respect user motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      canvas.style.display = 'none';
      return;
    }

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    const count = Math.min(Math.floor((width * height) / 18000), 75);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 0.8,
        color: Math.random() > 0.4 ? 'rgba(6, 182, 212, ' : 'rgba(99, 102, 241, '
      });
    }

    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.16;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Mouse interaction
        if (mouse.x !== null) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const malpha = (1 - mdist / 140) * 0.35;
            ctx.strokeStyle = `rgba(34, 211, 238, ${malpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Draw particle
        ctx.fillStyle = p1.color + '0.75)';
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;
      }

      requestAnimationFrame(animate);
    }

    animate();
  }
});
