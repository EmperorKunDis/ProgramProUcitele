/**
 * Glossary Module - Adds tooltips for technical terms
 * Helps beginners understand technical jargon
 */

const GlossaryModule = {
    terms: {
        // Development terms
        'IDE': 'Integrated Development Environment - program pro psaní kódu s pomocnými nástroji',
        'API': 'Application Programming Interface - způsob, jak programy komunikují mezi sebou',
        'SDK': 'Software Development Kit - sada nástrojů pro vývoj aplikací',

        // File/System terms
        'SSD': 'Solid State Drive - rychlý typ pevného disku bez pohyblivých částí',
        'RAM': 'Random Access Memory - operační paměť počítače pro běžící programy',
        'terminal': 'Příkazový řádek - textové rozhraní pro ovládání počítače',
        'terminál': 'Příkazový řádek - textové rozhraní pro ovládání počítače',
        'localhost': 'Váš vlastní počítač jako server (adresa 127.0.0.1)',

        // Commands
        'sudo': 'Super User DO - spuštění příkazu s administrátorskými právy',
        'dpkg': 'Debian Package - nástroj pro instalaci balíčků na Linux',
        'wget': 'Web Get - příkaz pro stahování souborů z internetu',
        'npm': 'Node Package Manager - správce balíčků pro JavaScript',

        // Git terms
        'git': 'Systém pro správu verzí kódu - sleduje změny v souborech',
        'commit': 'Uložení změn do historie projektu',
        'repository': 'Úložiště projektu se všemi soubory a historií',

        // Web terms
        'CORS': 'Cross-Origin Resource Sharing - bezpečnostní pravidlo prohlížeče pro načítání dat',
        'HTTP': 'HyperText Transfer Protocol - protokol pro přenos webových stránek',
        'URL': 'Uniform Resource Locator - webová adresa (např. https://example.com)',

        // AI terms
        'prompt': 'Textový příkaz nebo otázka pro AI',
        'token': 'Jednotka textu (přibližně 4 znaky nebo 3/4 slova)',
        'model': 'Natrénovaný AI systém schopný generovat odpovědi',
        'agent': 'AI program, který může samostatně vykonávat úkoly',

        // Code terms
        'framework': 'Sada nástrojů a pravidel pro rychlejší vývoj aplikací',
        'debugging': 'Hledání a oprava chyb v kódu',
        'refactoring': 'Vylepšování struktury kódu bez změny jeho funkce',
        'snippet': 'Krátký úsek kódu, který lze znovu použít',

        // File formats
        '.dmg': 'Disk Image - instalační soubor pro macOS',
        '.exe': 'Executable - spustitelný soubor pro Windows',
        '.deb': 'Debian Package - instalační balíček pro Ubuntu/Debian Linux',

        // Antigravity specific
        'Gemini': 'AI model od Google používaný v Antigravity',
        'artifact': 'Výstup agenta - může být kód, dokument nebo plán',
        'artefakt': 'Výstup agenta - může být kód, dokument nebo plán'
    },

    init() {
        // Add tooltip styles if not present
        if (!document.getElementById('glossary-styles')) {
            const style = document.createElement('style');
            style.id = 'glossary-styles';
            style.textContent = `
                .glossary-term {
                    border-bottom: 1px dotted var(--color-brand-primary);
                    cursor: help;
                    position: relative;
                }

                .glossary-tooltip {
                    position: absolute;
                    bottom: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--color-bg-secondary);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-sm);
                    padding: 8px 12px;
                    font-size: 0.85rem;
                    color: var(--color-text-primary);
                    white-space: nowrap;
                    max-width: 300px;
                    white-space: normal;
                    box-shadow: var(--shadow-md);
                    z-index: 100;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.2s;
                    pointer-events: none;
                }

                .glossary-tooltip::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border: 6px solid transparent;
                    border-top-color: var(--color-border);
                }

                .glossary-term:hover .glossary-tooltip {
                    opacity: 1;
                    visibility: visible;
                }

                [data-theme="dark"] .glossary-tooltip {
                    background: var(--color-bg-glass);
                    border-color: var(--color-border);
                }
            `;
            document.head.appendChild(style);
        }
    },

    /**
     * Wrap technical terms in the content with tooltips
     * @param {HTMLElement} container - The container to process
     */
    processContent(container) {
        if (!container) return;

        // Get all text nodes
        const walker = document.createTreeWalker(
            container,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: (node) => {
                    // Skip if parent is already a glossary term, code, or pre
                    const parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;

                    const tagName = parent.tagName.toLowerCase();
                    if (['code', 'pre', 'script', 'style', 'a'].includes(tagName)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    if (parent.classList.contains('glossary-term')) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const textNodes = [];
        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        // Process each text node
        textNodes.forEach(node => {
            let html = node.textContent;
            let hasMatch = false;

            // Check each term
            for (const [term, definition] of Object.entries(this.terms)) {
                // Case insensitive match for whole words
                const regex = new RegExp(`\\b(${this.escapeRegex(term)})\\b`, 'gi');
                if (regex.test(html)) {
                    hasMatch = true;
                    html = html.replace(regex, (match) => {
                        return `<span class="glossary-term">${match}<span class="glossary-tooltip">${definition}</span></span>`;
                    });
                }
            }

            if (hasMatch) {
                const span = document.createElement('span');
                span.innerHTML = html;
                node.parentNode.replaceChild(span, node);
            }
        });
    },

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
};

// Initialize and expose
GlossaryModule.init();
window.GlossaryModule = GlossaryModule;
