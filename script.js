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
        'logisync': {
            htmlContent: `
                <span class="modal-subtitle">An intelligent, multi-agent logistics platform for automotive MSMEs</span>
                <h3>LogiSync — Agentic Control Tower</h3>
                <p>LogiSync AI continuously monitors supply chain data, predicts shortages, and autonomously drafts resolution strategies — all with human-in-the-loop approval for high-stakes decisions.</p>

                <h4 style="margin-top:20px;margin-bottom:10px;">🧠 Architecture</h4>
                <table style="width:100%; text-align:left; border-collapse: collapse; margin-bottom: 1.5rem;">
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);"><th>Component</th><th>Technology</th><th>Purpose</th></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">LLM / Brain</td><td>Google Gemini 1.5 Flash</td><td>1M token context, function-calling</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">Agent Framework</td><td>CrewAI (Python)</td><td>Multi-agent orchestration</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">Backend API</td><td>FastAPI (Python)</td><td>REST API bridge</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">Database</td><td>Supabase (PostgreSQL)</td><td>Real-time data sync</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">Frontend</td><td>Flutter (Web + Mobile)</td><td>Cross-platform dashboard</td></tr>
                </table>

                <h4 style="margin-top:20px;margin-bottom:10px;">🤖 AI Agents</h4>
                <table style="width:100%; text-align:left; border-collapse: collapse; margin-bottom: 1.5rem;">
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);"><th>Agent</th><th>Role</th></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">LogisticsWatcher</td><td>Monitors Chennai & Ennore ports, weather, traffic</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">InventoryAnalyst</td><td>Analyzes stock levels, predicts shortages</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">ProcurementOptimizer</td><td>Finds backup suppliers, drafts purchase orders</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">ScheduleAdjuster</td><td>Recalculates production schedules</td></tr>
                </table>

                <h4 style="margin-top:20px;margin-bottom:10px;">📁 Project Structure</h4>
                <pre style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 0.9rem; margin-bottom: 1.5rem; color: #a5b4fc; border: 1px solid rgba(255,255,255,0.1);">
LogiSync/
├── backend/
│   ├── app/
│   │   ├── main.py              # FastAPI entry point
│   │   ├── config.py            # Environment config
│   │   ├── dependencies.py      # Supabase client
│   │   ├── models/              # Pydantic data models
│   │   ├── routers/             # API endpoints
│   │   ├── services/            # Business logic
│   │   └── crews/               # CrewAI agents &amp; tools
│   ├── supabase_schema.sql      # Database schema
│   ├── seed_data.py             # Demo data
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   └── logisync_app/            # Flutter project
└── README.md</pre>

                <h4 style="margin-top:20px;margin-bottom:10px;">🚀 Quick Start</h4>
                <p style="margin-bottom:5px;"><strong>1. Backend Setup</strong></p>
                <pre style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 0.9rem; margin-bottom: 1.5rem; color: #a5b4fc; border: 1px solid rgba(255,255,255,0.1);">
cd backend
python -m venv venv
venv\\Scripts\\activate
pip install -r requirements.txt
copy .env.example .env
python seed_data.py
python run.py</pre>

                <p style="margin-bottom:5px;"><strong>2. Frontend Setup</strong></p>
                <pre style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 0.9rem; margin-bottom: 1.5rem; color: #a5b4fc; border: 1px solid rgba(255,255,255,0.1);">
cd frontend/logisync_app
flutter pub get
flutter run -d chrome</pre>

                <div class="modal-tech-stack">
                    <h4 style="margin-top:20px;margin-bottom:10px;">Technologies Used</h4>
                    <div class="modal-tech-list">
                        <span>Flutter</span><span>Kotlin</span><span>Multi-agent Systems</span><span>Agentic AI</span><span>Python</span><span>PostgreSQL</span><span>FastAPI</span><span>CrewAI</span>
                    </div>
                </div>
            `
        },
        'docsync': {
            htmlContent: `
                <span class="modal-subtitle">Autonomous AI-Powered Technical Documentation Agent</span>
                <h3>DocSync</h3>
                <p>DocSync is an autonomous AI agent that integrates seamlessly with GitHub to automatically analyze code, generate comprehensive technical documentation, and inject it directly into developer workflows — the moment a Pull Request is opened.</p>
                <p>Built with a modern React frontend and a powerful Node.js/Express backend powered by Google's Gemini 2.5 Flash, DocSync eliminates the documentation bottleneck from your development cycle.</p>

                <h4 style="margin-top:20px;margin-bottom:10px;">✨ Features</h4>
                <ul class="modal-project-bullets">
                    <li><strong>🚀 Autonomous Pull Request Documentation:</strong> Listens for GitHub webhooks. Uses Intelligent Diff Analysis and Gemini Processing to automatically post a concise, bulleted Markdown summary directly on the Pull Request.</li>
                    <li><strong>📊 Webhook Activity Dashboard:</strong> Real-time monitoring panel with live stats cards, chronological event feed, and auto-refresh capabilities.</li>
                    <li><strong>📚 Documentation History:</strong> Browse and review all past AI-generated documentation with expandable accordions and PR metadata.</li>
                    <li><strong>📁 Project-Level Documentation Generation:</strong> Generate comprehensive overviews for entire repositories, automatically compiling a project-wide DOCSYNC.md.</li>
                    <li><strong>🤖 Agentic Auto-Update System:</strong> Actively monitors repositories and autonomously detects changes, auto-regenerating and auto-committing documentation back to GitHub.</li>
                    <li><strong>🧪 Code Snippet Playground:</strong> A flexible testing ground for instant on-the-fly documentation generation from pasted code snippets.</li>
                    <li><strong>🔒 Security &amp; Reliability:</strong> Production-grade HMAC-SHA256 Signature Verification and Rate Limiting built into the webhook pipeline.</li>
                    <li><strong>🎨 Premium Modern UI:</strong> Dark Mode default, Glassmorphism Design, Framer Motion Animations, and clean Inter Typography.</li>
                </ul>

                <h4 style="margin-top:20px;margin-bottom:10px;">🏗️ Project Structure</h4>
                <pre style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 0.9rem; margin-bottom: 1.5rem; color: #a5b4fc; border: 1px solid rgba(255,255,255,0.1);">
DocSync_AI-powered_Technical_Documentation_Generator/
├── server.ts              # Backend: Express.js server + webhook system
└── src/                   # Frontend source (React)
    ├── App.tsx            # Main app component, routing &amp; navigation
    └── components/
        ├── Dashboard.tsx        # GitHub repo analysis &amp; doc generation
        ├── Playground.tsx       # Manual code snippet documentation
        ├── Settings.tsx         # Setup &amp; integration guide
        ├── WebhookDashboard.tsx # Live webhook activity monitoring
        └── DocHistory.tsx       # Past documentation browser</pre>

                <h4 style="margin-top:20px;margin-bottom:10px;">📡 Backend Architecture (server.ts)</h4>
                <table style="width:100%; text-align:left; border-collapse: collapse; margin-bottom: 1.5rem;">
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);"><th>Endpoint</th><th>Method</th><th>Description</th></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">/api/docs/generate</td><td>POST</td><td>Generate docs for a code snippet</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">/api/docs/generate-repo</td><td>POST</td><td>Generate project-level documentation</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">/api/docs/auto-update</td><td>POST</td><td>Agentic auto-update</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">/api/github/webhook</td><td>POST</td><td>GitHub webhook receiver</td></tr>
                </table>

                <h4 style="margin-top:20px;margin-bottom:10px;">🚀 Setup &amp; Usage</h4>
                <p style="margin-bottom:5px;"><strong>Running Locally</strong></p>
                <pre style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 0.9rem; margin-bottom: 1.5rem; color: #a5b4fc; border: 1px solid rgba(255,255,255,0.1);">
git clone https://github.com/sasikumar161106/DocSync_AI-powered_Technical_Documentation_Generator.git
npm install
npm run dev</pre>

                <div class="modal-tech-stack">
                    <h4 style="margin-top:20px;margin-bottom:10px;">Technologies Used</h4>
                    <div class="modal-tech-list">
                        <span>AIML</span><span>Git</span><span>Node.js</span><span>Agentic AI Development</span><span>Agentic Automation</span><span>Agentic Workflows</span><span>Tailwind CSS</span><span>React.js</span><span>Express.js</span>
                    </div>
                </div>
            `
        },
        'water-system': {
            htmlContent: `
                <span class="modal-subtitle">IoT / TinyML AI Model Building / Flutter App Development</span>
                <h3>Smart Water Monitoring System With Weather Data Integration</h3>

                <div style="margin-bottom: 2rem; padding: 15px; background: rgba(66, 133, 244, 0.05); border-left: 4px solid #4285F4; border-radius: 4px;">
                    <h4 style="margin-top:0;margin-bottom:10px;">📱 Part 1: Bluvera Mobile App</h4>
                    <p>Bluvera is a smart, tech-driven application designed for real-time monitoring and analysis of water quality. It leverages modern data analytics and sensor integration to provide actionable insights directly to users.</p>
                    
                    <ul class="modal-project-bullets">
                        <li><strong>Real-Time Monitoring:</strong> Track essential metrics such as pH, turbidity, temperature, and dissolved oxygen instantly.</li>
                        <li><strong>Data Visualization:</strong> Interactive dashboards and charts for clear representations of water conditions over time.</li>
                        <li><strong>Alerts &amp; Notifications:</strong> Receive automated alerts when water quality parameters deviate from safe thresholds.</li>
                        <li><strong>Historical Tracking &amp; Biometrics:</strong> Store past data to identify long-term trends and secure access via fingerprint biometrics.</li>
                    </ul>

                    <pre style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 0.85rem; margin-top: 15px; color: #a5b4fc; border: 1px solid rgba(255,255,255,0.1);">
git clone https://github.com/sasikumar161106/Bluvera--A_Smart_Application_For_Water_Quality_Monitoring.git
flutter pub get
flutter run</pre>
                </div>

                <div style="padding: 15px; background: rgba(16, 185, 129, 0.05); border-left: 4px solid #10B981; border-radius: 4px;">
                    <h4 style="margin-top:0;margin-bottom:10px;">🧠 Part 2: TinyML AI Model</h4>
                    <p>A complete pipeline to generate synthetic water quality data, train an artificial neural network using TensorFlow, and convert the resulting model into a C++ format for TinyML applications on microcontrollers.</p>
                    
                    <ul class="modal-project-bullets">
                        <li><strong>Synthetic Data Generation:</strong> Creates realistic data mimicking sensor outputs for pH, TDS, Turbidity, Temp, Humidity, and Rain.</li>
                        <li><strong>Tiny Neural Network:</strong> A small-footprint Keras Sequential model trained to predict water quality (Good, Moderate, Poor).</li>
                        <li><strong>TFLite &amp; C++ Conversion:</strong> Converts the trained model to TensorFlow Lite and exports to a C++ byte array for immediate microcontroller deployment (Arduino/ESP32).</li>
                    </ul>

                    <pre style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 0.85rem; margin-top: 15px; color: #a5b4fc; border: 1px solid rgba(255,255,255,0.1);">
pip install pandas numpy tensorflow scikit-learn
python generate_water_quality_data.py
python train_water_quality_model.py
python convert_tflite_to_cpp.py</pre>
                </div>

                <div class="modal-tech-stack" style="margin-top: 2rem;">
                    <h4 style="margin-top:20px;margin-bottom:10px;">Technologies Used</h4>
                    <div class="modal-tech-list">
                        <span>AIML</span><span>IoT</span><span>GCP</span><span>TinyML</span><span>Core ML</span><span>Git</span><span>Dart</span><span>Flutter</span><span>Prompt Engineering</span>
                    </div>
                </div>
            `
        },
        'tourist': {
            htmlContent: `
                <span class="modal-subtitle">Premium Mobile App for Tourist Safety and Security</span>
                <h3>TouristGuard 🛡️🗺️</h3>
                <p>TouristGuard is a premium, open-source mobile application built with Flutter and Supabase designed to ensure the safety and security of tourists traveling in unfamiliar areas.</p>

                <h4 style="margin-top:20px;margin-bottom:10px;">✨ Core Features (In Progress)</h4>
                <ul class="modal-project-bullets">
                    <li><strong>One-Tap Emergency SOS:</strong> Immediately trigger native calls to local emergency services (911) with a highly visible, pulsating UI.</li>
                    <li><strong>Premium Dashboard:</strong> A modern, dark-themed dashboard featuring frosted glassmorphism elements to quickly display safety scores and nearby help.</li>
                    <li><strong>Zero-Cost Maps:</strong> Integration with OpenStreetMap via flutter_map for totally free, robust map rendering.</li>
                    <li><strong>Secure Authentication:</strong> User login, registration, and session management powered securely by Supabase.</li>
                </ul>

                <h4 style="margin-top:20px;margin-bottom:10px;">🛠️ Technology Stack</h4>
                <table style="width:100%; text-align:left; border-collapse: collapse; margin-bottom: 1.5rem;">
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);"><th>Component</th><th>Technology</th></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">Frontend Framework</td><td>Flutter (Dart)</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">Backend & Database</td><td>Supabase (PostgreSQL)</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">Maps</td><td>flutter_map & OpenStreetMap</td></tr>
                </table>

                <h4 style="margin-top:20px;margin-bottom:10px;">🎨 Architecture Highlights</h4>
                <ul class="modal-project-bullets">
                    <li>Glassmorphism UI components (GlassCard)</li>
                    <li>Deep Dark Mode Aesthetic</li>
                    <li>Native Device Intents (url_launcher)</li>
                </ul>

                <h4 style="margin-top:20px;margin-bottom:10px;">🚀 Getting Started</h4>
                <pre style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 0.9rem; margin-bottom: 1.5rem; color: #a5b4fc; border: 1px solid rgba(255,255,255,0.1);">
git clone https://github.com/sasikumar161106/Tourist-mobile-app.git
flutter pub get
flutter run</pre>
                <p style="font-size: 0.85rem; color: var(--color-gray-500); font-style: italic; margin-bottom:1.5rem;">Note: You will need to replace the Supabase configuration variables in lib/main.dart with your own project URL and Anon Key to fully utilize the backend features.</p>

                <div class="modal-tech-stack">
                    <h4 style="margin-top:20px;margin-bottom:10px;">Technologies Used</h4>
                    <div class="modal-tech-list">
                        <span>Flutter</span><span>Supabase</span><span>PostgreSQL</span><span>Dart</span><span>OpenStreetMap</span><span>url_launcher</span>
                    </div>
                </div>
            `
        },
        'code-reviewer': {
            htmlContent: `
                <span class="modal-subtitle">AI Agent for Automated Code Review on GitHub</span>
                <h3>AI-Powered Code Review Assistant</h3>
                <p>An AI agent that integrates with GitHub, reviews pull requests in real-time, detects potential bugs, security vulnerabilities, code smells, and performance bottlenecks, and then generates actionable inline review comments automatically.</p>

                <h4 style="margin-top:20px;margin-bottom:10px;">✨ Features</h4>
                <ul class="modal-project-bullets">
                    <li><strong>Real-time Automated Reviews:</strong> Listens to GitHub webhooks (pull_request events) to review code as soon as a PR is opened or updated.</li>
                    <li><strong>Deep Code Analysis:</strong> Uses AI to analyze git diffs for bugs, logic errors, security vulnerabilities, code smells, and performance bottlenecks.</li>
                    <li><strong>One-Click "Suggested Changes":</strong> Provides direct code fixes using GitHub's suggestion syntax, allowing developers to accept fixes with a single click.</li>
                    <li><strong>Automated PR Summaries &amp; Release Notes:</strong> Generates a high-level summary of what changed, why it matters, and potential impact.</li>
                    <li><strong>Custom Rules &amp; Configurations:</strong> Enforce custom coding standards, style guides, or ignoring specific files using a repo-level config file.</li>
                    <li><strong>Context-Aware Reviewing (RAG):</strong> Fetches the full file content (not just the diff) for deeper, architectural understanding before reviewing.</li>
                    <li><strong>Interactive Chat / Q&amp;A:</strong> Tag the bot or reply to its comments on the PR to ask follow-up questions, request clarifications, or discuss design decisions.</li>
                </ul>

                <h4 style="margin-top:20px;margin-bottom:10px;">🛠️ Technology Stack</h4>
                <table style="width:100%; text-align:left; border-collapse: collapse; margin-bottom: 1.5rem;">
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);"><th>Component</th><th>Technology</th></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">Backend API</td><td>Python 3.11, FastAPI, Uvicorn</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">AI Integration</td><td>LiteLLM (Gemini 1.5 Pro, GPT-4o, Claude 3.5 Sonnet)</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">GitHub Integration</td><td>PyGithub (GitHub App/PAT Support)</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:8px 0;">Deployment</td><td>Docker, Hugging Face Spaces</td></tr>
                </table>

                <h4 style="margin-top:20px;margin-bottom:10px;">🚀 Quick Start</h4>
                <p style="margin-bottom:5px;"><strong>Run Locally</strong></p>
                <pre style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 0.9rem; margin-bottom: 1.5rem; color: #a5b4fc; border: 1px solid rgba(255,255,255,0.1);">
git clone https://github.com/sasikumar161106/AI_Powered_Code_Review_Assistant.git
cd AI_Powered_Code_Review_Assistant
python -m venv venv
.\\venv\\Scripts\\activate
pip install -r requirements.txt
python main.py</pre>

                <div class="modal-tech-stack">
                    <h4 style="margin-top:20px;margin-bottom:10px;">Technologies Used</h4>
                    <div class="modal-tech-list">
                        <span>Python</span><span>FastAPI</span><span>Docker</span><span>Git</span><span>GitHub</span>
                    </div>
                </div>
            `
        }
    };

    const projectItems = document.querySelectorAll('.project-card');
    const modalOverlay = document.getElementById('projectModal');
    const modalCloseBtn = document.querySelector('.modal-close');
    const modalBody = document.querySelector('.modal-body');

    function openProjectModal(projectId) {
        const data = projectData[projectId];
        if (!data) return;
        
        if (data.htmlContent) {
            modalBody.innerHTML = data.htmlContent;
        } else {
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
        }
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
    /* ==========================================================================
       CERTIFICATE LIGHTBOX
       ========================================================================== */
    const certCards = document.querySelectorAll('.cert-card');
    const certLightbox = document.getElementById('certLightbox');
    const certLightboxImg = certLightbox?.querySelector('.lightbox-img');
    const certLightboxCaption = certLightbox?.querySelector('.lightbox-caption');
    const certLightboxClose = certLightbox?.querySelector('.lightbox-close');

    if (certLightbox && certLightboxImg) {
        function openLightbox(src, desc) {
            certLightboxImg.src = src;
            if (certLightboxCaption) certLightboxCaption.innerHTML = desc || '';
            certLightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            certLightbox.classList.remove('open');
            document.body.style.overflow = '';
            setTimeout(() => { 
                certLightboxImg.src = ''; 
                if (certLightboxCaption) certLightboxCaption.innerHTML = '';
            }, 300); // clear after animation
        }

        certCards.forEach(card => {
            card.addEventListener('click', () => {
                const src = card.getAttribute('data-src');
                const desc = card.getAttribute('data-description');
                if (src) openLightbox(src, desc);
            });
        });

        certLightboxClose?.addEventListener('click', closeLightbox);
        certLightbox.addEventListener('click', (e) => {
            if (e.target === certLightbox) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && certLightbox.classList.contains('open')) closeLightbox();
        });
    }
});
