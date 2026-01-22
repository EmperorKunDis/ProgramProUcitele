/**
 * PRAUT Guide - Main App
 * Enhanced for beginners with improved UX
 */

const App = {
    config: null,
    currentState: {
        activeSectionId: null,
        completedSections: new Set()
    },

    async init() {
        console.log('Inicializace PRAUT Průvodce...');

        try {
            await this.loadConfig();
            this.renderSidebar();
            this.setupEventListeners();
            this.loadTheme();
            this.loadSearch();
            this.loadGlossary();
            this.loadProgress();
            this.checkFirstVisit();

            // Handle initial route
            this.handleRoute();

        } catch (error) {
            console.error('Init failed:', error);
            document.getElementById('content-container').innerHTML = `
                <div class="callout callout-danger">
                    <div class="callout-content">
                        <h3>Chyba Inicializace</h3>
                        <p>${error.message}</p>
                        <p>Pokud otevíráte tento soubor napřímo (file://), prohlížeč může blokovat načítání externích souborů.</p>
                        <p><strong>Řešení:</strong> Spusťte v této složce příkaz <code>python3 -m http.server</code> a otevřete <code>http://localhost:8000</code></p>
                    </div>
                </div>
            `;
        }
    },

    async loadConfig() {
        const response = await fetch('config.json');
        if (!response.ok) throw new Error('Failed to load config.json');
        this.config = await response.json();
    },

    renderSidebar() {
        const nav = document.getElementById('sidebar-nav');
        nav.innerHTML = this.config.sections.map(section => `
            <div class="nav-item" data-id="${section.id}" onclick="App.navigateTo('${section.id}'); App.closeMobileMenu();">
                <div class="nav-item-check"></div>
                <div class="nav-item-content">
                    <span>${section.title}</span>
                    ${section.readingTime ? `<span class="reading-time">${section.readingTime}</span>` : ''}
                </div>
            </div>
        `).join('');
    },

    navigateTo(sectionId) {
        window.location.hash = sectionId;
    },

    handleRoute() {
        const hash = window.location.hash.substring(1);
        const sectionId = hash || this.config.sections[0].id;
        this.loadSection(sectionId);
    },

    async loadSection(sectionId) {
        const section = this.config.sections.find(s => s.id === sectionId);
        if (!section) return;

        const idx = this.config.sections.findIndex(s => s.id === sectionId);

        // Update Sidebar UI
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-item[data-id="${sectionId}"]`);
        if (activeNav) activeNav.classList.add('active');

        // Load Content
        const container = document.getElementById('content-container');
        container.classList.remove('fade-in');
        void container.offsetWidth;

        try {
            const response = await fetch(section.file);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            let html = await response.text();

            // Add section TOC if multiple h2 headings
            const tocHtml = this.generateSectionTOC(html);

            // Add navigation footer
            const navFooter = this.generateNavFooter(idx);

            container.innerHTML = tocHtml + html + navFooter;
            container.classList.add('fade-in');

            // Post-load enhancements
            if (window.Prism) Prism.highlightAll();
            this.addCopyButtons();
            this.addHeadingIds();

            // Add glossary tooltips for technical terms
            if (window.GlossaryModule) {
                window.GlossaryModule.processContent(container);
            }

            // Update State
            const isNewSection = !this.currentState.completedSections.has(sectionId);
            this.currentState.activeSectionId = sectionId;
            this.saveProgress(sectionId, isNewSection);

            // Scroll to top
            document.querySelector('.main-content').scrollTop = 0;

        } catch (error) {
            container.innerHTML = `<h2>Error loading section</h2><p>${error.message}</p>`;
        }
    },

    generateSectionTOC(html) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const headings = tempDiv.querySelectorAll('h2');

        if (headings.length < 3) return '';

        const tocItems = [...headings].map((h, i) => {
            const id = `section-heading-${i}`;
            return `<a href="#${id}" class="toc-link">${h.textContent}</a>`;
        }).join('');

        return `
            <nav class="section-toc">
                <div class="toc-header">V této sekci:</div>
                <div class="toc-links">${tocItems}</div>
            </nav>
        `;
    },

    addHeadingIds() {
        document.querySelectorAll('#content-container h2').forEach((h, i) => {
            h.id = `section-heading-${i}`;
        });
    },

    generateNavFooter(currentIdx) {
        const prev = currentIdx > 0 ? this.config.sections[currentIdx - 1] : null;
        const next = currentIdx < this.config.sections.length - 1 ? this.config.sections[currentIdx + 1] : null;

        return `
            <div class="nav-footer">
                ${prev ? `
                    <button class="nav-btn nav-btn-prev" onclick="App.navigateTo('${prev.id}')">
                        <span class="nav-btn-arrow">←</span>
                        <span class="nav-btn-text">
                            <span class="nav-btn-label">Předchozí</span>
                            <span class="nav-btn-title">${prev.title}</span>
                        </span>
                    </button>
                ` : '<div></div>'}
                ${next ? `
                    <button class="nav-btn nav-btn-next" onclick="App.navigateTo('${next.id}')">
                        <span class="nav-btn-text">
                            <span class="nav-btn-label">Další</span>
                            <span class="nav-btn-title">${next.title}</span>
                        </span>
                        <span class="nav-btn-arrow">→</span>
                    </button>
                ` : '<div></div>'}
            </div>
        `;
    },

    addCopyButtons() {
        document.querySelectorAll('#content-container pre code').forEach(block => {
            const pre = block.parentElement;
            if (pre.querySelector('.copy-btn')) return;

            const wrapper = document.createElement('div');
            wrapper.className = 'code-wrapper';
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            const btn = document.createElement('button');
            btn.className = 'copy-btn';
            btn.innerHTML = '<span class="copy-icon">📋</span> Kopírovat';
            btn.onclick = async () => {
                try {
                    await navigator.clipboard.writeText(block.textContent);
                    btn.innerHTML = '<span class="copy-icon">✓</span> Zkopírováno!';
                    btn.classList.add('copied');
                    setTimeout(() => {
                        btn.innerHTML = '<span class="copy-icon">📋</span> Kopírovat';
                        btn.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    btn.textContent = 'Chyba';
                }
            };
            wrapper.appendChild(btn);
        });
    },

    // ==================== ONBOARDING ====================

    checkFirstVisit() {
        const hasVisited = localStorage.getItem('phase2-visited');
        if (!hasVisited) {
            this.showOnboarding();
        }
    },

    showOnboarding() {
        const overlay = document.createElement('div');
        overlay.id = 'onboarding-overlay';
        overlay.className = 'onboarding-overlay';
        overlay.innerHTML = `
            <div class="onboarding-modal">
                <div class="onboarding-header">
                    <img src="assets/images/logo/praut-logo-purple.png" alt="PRAUT" class="onboarding-logo">
                    <h2>Vítejte v průvodci!</h2>
                </div>
                <div class="onboarding-content">
                    <p>Tento interaktivní průvodce vám pomůže zvládnout Google Antigravity IDE.</p>

                    <div class="onboarding-tips">
                        <div class="onboarding-tip">
                            <span class="tip-icon">📖</span>
                            <div>
                                <strong>Navigace</strong>
                                <p>Klikejte v menu vlevo nebo použijte tlačítka Předchozí/Další</p>
                            </div>
                        </div>
                        <div class="onboarding-tip">
                            <span class="tip-icon">⌨️</span>
                            <div>
                                <strong>Klávesové zkratky</strong>
                                <p><kbd>←</kbd> <kbd>→</kbd> pro navigaci, <kbd>Ctrl+K</kbd> pro hledání</p>
                            </div>
                        </div>
                        <div class="onboarding-tip">
                            <span class="tip-icon">💾</span>
                            <div>
                                <strong>Automatické ukládání</strong>
                                <p>Váš postup se ukládá automaticky</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="onboarding-btn" onclick="App.closeOnboarding()">
                    Rozumím, začít! →
                </button>
            </div>
        `;
        document.body.appendChild(overlay);

        // Animate in
        requestAnimationFrame(() => overlay.classList.add('visible'));
    },

    closeOnboarding() {
        const overlay = document.getElementById('onboarding-overlay');
        if (overlay) {
            overlay.classList.remove('visible');
            setTimeout(() => overlay.remove(), 300);
        }
        localStorage.setItem('phase2-visited', 'true');
    },

    // ==================== SEARCH ====================

    async loadSearch() {
        if (!window.SearchModule) {
            await import('./modules/search.js');
        }
        if (window.SearchModule) {
            setTimeout(() => {
                window.SearchModule.buildIndex(this.config.sections);
            }, 1000);
        }
    },

    async loadGlossary() {
        if (!window.GlossaryModule) {
            await import('./modules/glossary.js');
        }
    },

    toggleSearch() {
        let modal = document.getElementById('search-modal');
        if (!modal) {
            this.createSearchModal();
            modal = document.getElementById('search-modal');
        }

        const isHidden = !modal.classList.contains('visible');
        if (isHidden) {
            modal.classList.add('visible');
            document.getElementById('search-input').focus();
        } else {
            modal.classList.remove('visible');
        }
    },

    createSearchModal() {
        const modal = document.createElement('div');
        modal.id = 'search-modal';
        modal.className = 'search-modal';

        modal.innerHTML = `
            <div class="search-container">
                <div class="search-header">
                    <span class="search-icon">🔍</span>
                    <input id="search-input" type="text" placeholder="Hledat v průvodci..." autocomplete="off">
                    <kbd class="search-hint">ESC</kbd>
                </div>
                <div id="search-results" class="search-results"></div>
            </div>
        `;

        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.toggleSearch();
        });

        const input = modal.querySelector('input');
        input.addEventListener('input', (e) => this.handleSearch(e.target.value));
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.toggleSearch();
        });

        document.body.appendChild(modal);
    },

    handleSearch(query) {
        const resultsContainer = document.getElementById('search-results');
        if (!window.SearchModule) return;

        const results = window.SearchModule.search(query);

        if (!query || query.length < 2) {
            resultsContainer.innerHTML = '<div class="search-empty">Začněte psát pro vyhledávání...</div>';
            return;
        }

        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="search-empty">Žádné výsledky pro "' + query + '"</div>';
            return;
        }

        resultsContainer.innerHTML = results.map(res => `
            <div class="search-item" onclick="App.navigateTo('${res.id}'); App.toggleSearch();">
                <div class="search-item-title">${res.title}</div>
                <div class="search-item-snippet">${res.snippet}</div>
            </div>
        `).join('');
    },

    // ==================== MOBILE MENU ====================

    toggleMobileMenu() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.getElementById('mobile-overlay');

        sidebar.classList.toggle('mobile-open');

        if (!overlay) {
            const newOverlay = document.createElement('div');
            newOverlay.id = 'mobile-overlay';
            newOverlay.className = 'mobile-overlay';
            newOverlay.onclick = () => this.closeMobileMenu();
            document.body.appendChild(newOverlay);
        }

        document.getElementById('mobile-overlay')?.classList.toggle('visible', sidebar.classList.contains('mobile-open'));
    },

    closeMobileMenu() {
        document.querySelector('.sidebar')?.classList.remove('mobile-open');
        document.getElementById('mobile-overlay')?.classList.remove('visible');
    },

    // ==================== EVENTS ====================

    setupEventListeners() {
        window.addEventListener('hashchange', () => this.handleRoute());

        // Theme toggle
        document.getElementById('theme-btn')?.addEventListener('click', () => {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            this.setTheme(isDark ? 'light' : 'dark');
        });

        // Mobile menu
        document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Search button
        document.getElementById('search-btn')?.addEventListener('click', () => {
            this.toggleSearch();
        });

        // Back to top
        const mainContent = document.querySelector('.main-content');
        const backToTop = document.getElementById('back-to-top');

        mainContent?.addEventListener('scroll', () => {
            if (backToTop) {
                backToTop.classList.toggle('visible', mainContent.scrollTop > 400);
            }
        });

        backToTop?.addEventListener('click', () => {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Keyboard Nav
        document.addEventListener('keydown', (e) => {
            // Don't trigger if in input
            if (document.activeElement.tagName === 'INPUT') {
                if (e.key === 'Escape') {
                    this.toggleSearch();
                }
                return;
            }

            if (e.key === 'ArrowRight' || e.key === 'j') this.navigateNext();
            if (e.key === 'ArrowLeft' || e.key === 'k') this.navigatePrev();

            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.toggleSearch();
            }

            if (e.key === 'Escape') {
                const searchModal = document.getElementById('search-modal');
                if (searchModal?.classList.contains('visible')) {
                    this.toggleSearch();
                }
                this.closeMobileMenu();
            }
        });
    },

    navigateNext() {
        if (!this.currentState.activeSectionId) return;
        const idx = this.config.sections.findIndex(s => s.id === this.currentState.activeSectionId);
        if (idx < this.config.sections.length - 1) {
            this.navigateTo(this.config.sections[idx + 1].id);
        }
    },

    navigatePrev() {
        if (!this.currentState.activeSectionId) return;
        const idx = this.config.sections.findIndex(s => s.id === this.currentState.activeSectionId);
        if (idx > 0) {
            this.navigateTo(this.config.sections[idx - 1].id);
        }
    },

    // ==================== THEME ====================

    loadTheme() {
        const saved = localStorage.getItem('phase2-theme');
        const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        this.setTheme(saved || system);
    },

    setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('phase2-theme', theme);

        const btn = document.getElementById('theme-btn');
        if (btn) {
            btn.innerHTML = theme === 'dark'
                ? '<span>☀️</span> Světlý režim'
                : '<span>🌙</span> Tmavý režim';
        }
    },

    // ==================== PROGRESS ====================

    saveProgress(sectionId, isNew = false) {
        if (!sectionId) return;

        let progress = JSON.parse(localStorage.getItem('phase2-progress') || '[]');
        if (!progress.includes(sectionId)) {
            progress.push(sectionId);
            localStorage.setItem('phase2-progress', JSON.stringify(progress));

            if (isNew && progress.length > 1) {
                this.showToast('✓ Sekce dokončena!');
            }
        }

        this.currentState.completedSections = new Set(progress);
        this.updateProgressUI();
    },

    updateProgressUI() {
        const total = this.config.sections.length;
        const completed = this.currentState.completedSections.size;
        const percent = Math.round((completed / total) * 100);

        // Update progress bar
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');

        if (progressFill) progressFill.style.width = `${percent}%`;
        if (progressText) progressText.textContent = `${completed}/${total} sekcí`;

        // Update sidebar checks
        document.querySelectorAll('.nav-item').forEach(el => {
            const id = el.getAttribute('data-id');
            if (this.currentState.completedSections.has(id)) {
                el.classList.add('completed');
            }
        });
    },

    loadProgress() {
        const progress = JSON.parse(localStorage.getItem('phase2-progress') || '[]');
        this.currentState.completedSections = new Set(progress);
        this.updateProgressUI();
        this.updatePhaseSwitcher();
    },

    // ==================== PHASE SWITCHER ====================

    updatePhaseSwitcher() {
        const phases = [
            { key: 'antigravity-progress', total: 12, element: 'phase1-progress' },
            { key: 'phase2-progress', total: 8, element: 'phase2-progress' },
            { key: 'phase3-progress', total: 8, element: 'phase3-progress' },
            { key: 'phase4-progress', total: 8, element: 'phase4-progress' }
        ];

        phases.forEach((phase, index) => {
            const progress = JSON.parse(localStorage.getItem(phase.key) || '[]');
            const percent = Math.round((progress.length / phase.total) * 100);
            const el = document.getElementById(phase.element);
            if (el) {
                el.textContent = `${percent}%`;
            }

            // Mark completed phases
            const dot = document.querySelector(`.phase-dot[data-phase="${index + 1}"]`);
            if (dot && percent === 100) {
                dot.classList.add('completed');
            }
        });
    },

    // ==================== TOAST ====================

    showToast(message) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.add('visible');

        setTimeout(() => {
            toast.classList.remove('visible');
        }, 2500);
    }
};

// Expose to window
window.App = App;

// Start
document.addEventListener('DOMContentLoaded', () => App.init());
