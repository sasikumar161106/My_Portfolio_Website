document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       MOBILE NAVIGATION TOGGLE
       ========================================================================== */
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('open');
        if (mobileNav.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
            mobileNavLinks.forEach((link, i) => { link.style.transitionDelay = `${(i + 1) * 0.1}s`; });
        } else {
            document.body.style.overflow = '';
            mobileNavLinks.forEach(link => link.style.transitionDelay = '0s');
        }
    }

    if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
    mobileNavLinks.forEach(link => link.addEventListener('click', toggleMenu));


    /* ==========================================================================
       TOP NAV — Glass effect on scroll
       ========================================================================== */
    const topNav = document.getElementById('topNav');
    if (topNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                topNav.style.background = 'rgba(10,10,10,0.85)';
                topNav.style.backdropFilter = 'blur(20px)';
                topNav.style.webkitBackdropFilter = 'blur(20px)';
                topNav.style.padding = '8px 20px';
                topNav.style.borderRadius = '30px';
                topNav.style.border = '1px solid rgba(255,255,255,0.06)';
            } else {
                topNav.style.background = 'transparent';
                topNav.style.backdropFilter = 'none';
                topNav.style.webkitBackdropFilter = 'none';
                topNav.style.padding = '0';
                topNav.style.borderRadius = '0';
                topNav.style.border = 'none';
            }
        });
    }


    /* ==========================================================================
       SCROLL REVEAL
       ========================================================================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));


    /* ==========================================================================
       PROJECT MODAL
       ========================================================================== */
    const projectData = {
        'water-system': {
            title: 'Smart Water Monitoring System With Weather Data Integration',
            subtitle: 'IoT / TinyML AI Model Building / Flutter App Development',
            bullets: [
                'Developed a comprehensive IoT system that analyzes water quality using real-time weather data integration, supporting both online and offline operations.',
                'Developed a feature-rich Flutter mobile application integrated with cloud database analytics for instant real-time water quality alerts and threshold notifications.',
                'Designed and trained an optimized TinyML AI model deployed on-device for offline water quality prediction, validation, and localized monitoring.'
            ],
            tech: ['IoT Esp32', 'TinyML', 'Flutter', 'Firebase', 'TensorFlow Lite', 'Cloud Analytics']
        },
        'tourist-system': {
            title: 'Smart Tourist Monitoring And Incidence Response System',
            subtitle: 'AI Risk Modeling / Flutter App Development / Security Systems',
            bullets: [
                'Developed an AI-powered tourist safety and monitoring ecosystem featuring real-time location tracking and emergency alert notifications.',
                'Created a custom Flutter application integrated with a "Tourist Assist" module, offering personalized places recommendations and safety-optimized routing algorithms.',
                'Built and integrated four distinct AI models to provide intelligent companionship, optimize travel paths, detect user behavioral anomalies, and predict real-time safety risk levels for advanced tourist security.'
            ],
            tech: ['AI Models', 'Flutter', 'Firebase', 'Google Maps API', 'Risk Analytics', 'Node.js']
        }
    };

    const projectItems = document.querySelectorAll('.project-item');
    const modalOverlay = document.getElementById('projectModal');
    const modalCloseBtn = document.querySelector('.modal-close');
    const modalBody = document.querySelector('.modal-body');

    function openProjectModal(projectId) {
        const data = projectData[projectId];
        if (!data) return;
        const bulletsHtml = data.bullets.map(b => `<li>${b}</li>`).join('');
        const techHtml = data.tech.map(t => `<span>${t}</span>`).join('');
        modalBody.innerHTML = `
            <span class="modal-subtitle">${data.subtitle}</span>
            <h3>${data.title}</h3>
            <ul class="modal-project-bullets">${bulletsHtml}</ul>
            <div class="modal-tech-stack">
                <h4>Technologies Used</h4>
                <div class="modal-tech-list">${techHtml}</div>
            </div>
        `;
        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    projectItems.forEach(item => {
        item.addEventListener('click', () => openProjectModal(item.getAttribute('data-project')));
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
    if (modalOverlay) modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeProjectModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modalOverlay?.classList.contains('open')) closeProjectModal(); });


    /* ==========================================================================
       CONTACT FORM
       ========================================================================== */
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            formStatus.innerHTML = '';
            formStatus.className = 'form-status';
            if (!name || !email || !message) {
                formStatus.innerHTML = 'Please fill out all fields.';
                formStatus.classList.add('error');
                return;
            }
            formStatus.innerHTML = 'Sending message...';
            setTimeout(() => {
                formStatus.innerHTML = 'Thank you, Sasikumar will get back to you soon!';
                formStatus.classList.add('success');
                contactForm.reset();
            }, 1200);
        });
    }
});
