/**
 * Glossary Module - Adds tooltips for technical terms
 * Phase 4: God Mode - Advanced terms for power users
 */

const GlossaryModule = {
    terms: {
        // Core AI terms
        'IDE': 'Integrated Development Environment - program pro psaní kódu s pomocnými nástroji',
        'API': 'Application Programming Interface - způsob, jak programy komunikují mezi sebou',
        'SDK': 'Software Development Kit - sada nástrojů pro vývoj aplikací',
        'LLM': 'Large Language Model - velký jazykový model (např. GPT, Gemini)',
        'RAG': 'Retrieval Augmented Generation - technika obohacení AI o externí znalosti',

        // Agent terms
        'agent': 'AI program, který může samostatně vykonávat úkoly',
        'multi-agent': 'Systém více AI agentů spolupracujících na úkolu',
        'orchestrace': 'Koordinace a řízení více procesů nebo agentů',
        'orchestration': 'Koordinace a řízení více procesů nebo agentů',
        'agentic': 'Schopnost AI jednat autonomně a rozhodovat se',

        // MCP terms
        'MCP': 'Model Context Protocol - protokol pro propojení AI s externími nástroji',
        'tool': 'Nástroj, který může AI agent použít (např. čtení souborů, API volání)',
        'plugin': 'Rozšíření přidávající nové funkce do aplikace',
        'integration': 'Propojení dvou nebo více systémů',
        'webhook': 'HTTP callback - automatické upozornění při události',

        // Prompt Engineering
        'prompt': 'Textový příkaz nebo otázka pro AI',
        'system prompt': 'Základní instrukce definující chování AI',
        'few-shot': 'Učení AI pomocí několika příkladů v promptu',
        'chain-of-thought': 'Technika, kdy AI "přemýšlí nahlas" krok po kroku',
        'CoT': 'Chain of Thought - technika postupného uvažování AI',
        'context window': 'Maximální množství textu, které AI může zpracovat najednou',

        // Automation
        'CI/CD': 'Continuous Integration/Deployment - automatizace testování a nasazování',
        'pipeline': 'Automatizovaný sled kroků pro zpracování dat nebo kódu',
        'workflow': 'Definovaný sled kroků pro dokončení úkolu',
        'cron': 'Plánovač úloh - spouští příkazy v nastavených časech',
        'daemon': 'Program běžící na pozadí bez uživatelské interakce',

        // Code/Dev terms
        'token': 'Jednotka textu (přibližně 4 znaky nebo 3/4 slova)',
        'model': 'Natrénovaný AI systém schopný generovat odpovědi',
        'embedding': 'Číselná reprezentace textu pro strojové zpracování',
        'vector': 'Matematický objekt reprezentující data v prostoru',
        'latency': 'Zpoždění mezi požadavkem a odpovědí',
        'throughput': 'Množství zpracovaných požadavků za časovou jednotku',

        // Configuration
        'JSON': 'JavaScript Object Notation - formát pro strukturovaná data',
        'YAML': 'YAML Ain\'t Markup Language - čitelný formát pro konfigurace',
        'schema': 'Definice struktury dat nebo databáze',
        'environment variable': 'Proměnná prostředí - konfigurace mimo kód',
        'env': 'Environment - prostředí (development, staging, production)',

        // Enterprise
        'SSO': 'Single Sign-On - jednotné přihlášení do více aplikací',
        'RBAC': 'Role-Based Access Control - řízení přístupu podle rolí',
        'audit log': 'Záznam všech akcí pro bezpečnostní kontrolu',
        'compliance': 'Soulad s předpisy a standardy',
        'SLA': 'Service Level Agreement - garantovaná úroveň služby',

        // Git terms
        'git': 'Systém pro správu verzí kódu - sleduje změny v souborech',
        'commit': 'Uložení změn do historie projektu',
        'repository': 'Úložiště projektu se všemi soubory a historií',
        'branch': 'Větev - samostatná linie vývoje v Git',

        // File formats
        'localhost': 'Váš vlastní počítač jako server (adresa 127.0.0.1)',
        'terminal': 'Příkazový řádek - textové rozhraní pro ovládání počítače',

        // Antigravity specific
        'Gemini': 'AI model od Google používaný v Antigravity',
        'artifact': 'Výstup agenta - může být kód, dokument nebo plán',
        'artefakt': 'Výstup agenta - může být kód, dokument nebo plán',
        'brain': 'Paměť agenta - uložené znalosti a kontext projektu',
        'rules': 'Pravidla definující chování a omezení agenta'
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
