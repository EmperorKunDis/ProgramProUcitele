/**
 * Prompt Library Module - Browser for 1000+ markdown files
 * Features: Category navigation, file preview, copy & overwrite
 */

const PromptLibrary = {
    categories: null,
    currentCategory: null,
    currentFile: null,
    currentContent: '',
    isEditing: false,
    basePath: '../PromptLibrary/',

    async init() {
        this.addStyles();
        this.createModal();
        await this.loadIndex();
    },

    addStyles() {
        if (document.getElementById('prompt-library-styles')) return;

        const style = document.createElement('style');
        style.id = 'prompt-library-styles';
        style.textContent = `
            /* Library Button */
            .library-btn {
                display: flex;
                align-items: center;
                gap: var(--space-sm);
                margin: var(--space-sm) var(--space-lg);
                padding: 10px 14px;
                background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary, var(--color-brand-primary)));
                border: none;
                border-radius: var(--radius-md, 8px);
                cursor: pointer;
                transition: all 0.3s;
                font-family: inherit;
                font-size: 0.85rem;
                color: white;
                font-weight: 600;
            }

            .library-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 0 20px rgba(var(--color-brand-primary), 0.3);
                filter: brightness(1.1);
            }

            .library-btn-icon {
                font-size: 1.1rem;
            }

            /* Library Modal */
            .library-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(8px);
                z-index: 2000;
                display: flex;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s;
            }

            .library-modal.visible {
                opacity: 1;
                visibility: visible;
            }

            .library-container {
                display: grid;
                grid-template-columns: 250px 300px 1fr;
                width: 95%;
                max-width: 1400px;
                height: 90vh;
                margin: auto;
                background: var(--color-bg-primary, #0a0a0f);
                border-radius: var(--radius-lg, 12px);
                border: 1px solid var(--color-border, rgba(255,255,255,0.1));
                overflow: hidden;
                transform: scale(0.95);
                transition: transform 0.3s;
            }

            .library-modal.visible .library-container {
                transform: scale(1);
            }

            /* Categories Panel */
            .library-categories {
                background: var(--color-bg-secondary, #111);
                border-right: 1px solid var(--color-border, rgba(255,255,255,0.1));
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }

            .library-header {
                padding: var(--space-lg, 24px);
                border-bottom: 1px solid var(--color-border, rgba(255,255,255,0.1));
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .library-title {
                font-size: 1.1rem;
                font-weight: 700;
                color: var(--color-brand-primary, #00d4ff);
                margin: 0;
            }

            .library-close {
                width: 32px;
                height: 32px;
                background: none;
                border: 1px solid var(--color-border, rgba(255,255,255,0.1));
                border-radius: 50%;
                color: var(--color-text-secondary, #888);
                cursor: pointer;
                font-size: 1.2rem;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .library-close:hover {
                background: var(--color-brand-primary, #00d4ff);
                color: white;
                border-color: transparent;
            }

            .library-stats {
                padding: var(--space-md, 16px) var(--space-lg, 24px);
                font-size: 0.75rem;
                color: var(--color-text-secondary, #888);
                border-bottom: 1px solid var(--color-border, rgba(255,255,255,0.1));
                font-family: var(--font-family-mono, monospace);
            }

            .category-list {
                flex: 1;
                overflow-y: auto;
                padding: var(--space-sm, 8px) 0;
            }

            .category-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px var(--space-lg, 24px);
                color: var(--color-text-secondary, #888);
                cursor: pointer;
                transition: all 0.2s;
                font-size: 0.85rem;
                border-left: 3px solid transparent;
            }

            .category-item:hover {
                background: rgba(255,255,255,0.05);
                color: var(--color-text-primary, #fff);
            }

            .category-item.active {
                background: rgba(var(--color-brand-primary), 0.1);
                color: var(--color-brand-primary, #00d4ff);
                border-left-color: var(--color-brand-primary, #00d4ff);
            }

            .category-count {
                font-size: 0.7rem;
                padding: 2px 8px;
                background: var(--color-bg-primary, #0a0a0f);
                border-radius: 10px;
                font-family: var(--font-family-mono, monospace);
            }

            /* Files Panel */
            .library-files {
                background: var(--color-bg-primary, #0a0a0f);
                border-right: 1px solid var(--color-border, rgba(255,255,255,0.1));
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }

            .files-header {
                padding: var(--space-md, 16px);
                border-bottom: 1px solid var(--color-border, rgba(255,255,255,0.1));
            }

            .files-search {
                width: 100%;
                padding: 10px 14px;
                background: var(--color-bg-secondary, #111);
                border: 1px solid var(--color-border, rgba(255,255,255,0.1));
                border-radius: var(--radius-sm, 6px);
                color: var(--color-text-primary, #fff);
                font-family: inherit;
                font-size: 0.9rem;
                outline: none;
                transition: border-color 0.2s;
            }

            .files-search:focus {
                border-color: var(--color-brand-primary, #00d4ff);
            }

            .files-search::placeholder {
                color: var(--color-text-secondary, #888);
            }

            .file-list {
                flex: 1;
                overflow-y: auto;
                padding: var(--space-sm, 8px);
            }

            .file-item {
                padding: 10px 14px;
                border-radius: var(--radius-sm, 6px);
                cursor: pointer;
                transition: all 0.2s;
                margin-bottom: 4px;
            }

            .file-item:hover {
                background: rgba(255,255,255,0.05);
            }

            .file-item.active {
                background: var(--color-brand-primary, #00d4ff);
                color: white;
            }

            .file-item-name {
                font-size: 0.85rem;
                font-weight: 500;
                margin-bottom: 2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .file-item-meta {
                font-size: 0.7rem;
                color: var(--color-text-secondary, #888);
                font-family: var(--font-family-mono, monospace);
            }

            .file-item.active .file-item-meta {
                color: rgba(255,255,255,0.8);
            }

            /* Preview Panel */
            .library-preview {
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }

            .preview-header {
                padding: var(--space-md, 16px) var(--space-lg, 24px);
                border-bottom: 1px solid var(--color-border, rgba(255,255,255,0.1));
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: var(--space-md, 16px);
            }

            .preview-title {
                font-size: 1rem;
                font-weight: 600;
                color: var(--color-text-primary, #fff);
                flex: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .preview-actions {
                display: flex;
                gap: var(--space-sm, 8px);
            }

            .preview-btn {
                padding: 8px 16px;
                border-radius: var(--radius-sm, 6px);
                border: none;
                cursor: pointer;
                font-family: inherit;
                font-size: 0.85rem;
                font-weight: 600;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .btn-copy {
                background: var(--color-brand-primary, #00d4ff);
                color: white;
            }

            .btn-copy:hover {
                filter: brightness(1.1);
                transform: translateY(-1px);
            }

            .btn-copy.copied {
                background: #22c55e;
            }

            .btn-edit {
                background: transparent;
                border: 1px solid var(--color-border, rgba(255,255,255,0.2));
                color: var(--color-text-secondary, #888);
            }

            .btn-edit:hover {
                background: rgba(255,255,255,0.1);
                color: var(--color-text-primary, #fff);
            }

            .btn-edit.active {
                background: #f59e0b;
                border-color: #f59e0b;
                color: white;
            }

            .btn-save {
                background: #22c55e;
                color: white;
            }

            .btn-save:hover {
                filter: brightness(1.1);
            }

            .btn-cancel {
                background: #ef4444;
                color: white;
            }

            .btn-cancel:hover {
                filter: brightness(1.1);
            }

            .preview-content {
                flex: 1;
                overflow-y: auto;
                padding: var(--space-lg, 24px);
            }

            .preview-markdown {
                font-size: 0.9rem;
                line-height: 1.7;
                color: var(--color-text-primary, #fff);
            }

            .preview-markdown h1,
            .preview-markdown h2,
            .preview-markdown h3,
            .preview-markdown h4 {
                color: var(--color-brand-primary, #00d4ff);
                margin: 1.5em 0 0.5em;
            }

            .preview-markdown h1 { font-size: 1.5rem; }
            .preview-markdown h2 { font-size: 1.3rem; }
            .preview-markdown h3 { font-size: 1.1rem; }

            .preview-markdown code {
                background: rgba(255,255,255,0.1);
                padding: 2px 6px;
                border-radius: 4px;
                font-family: var(--font-family-mono, monospace);
                font-size: 0.85em;
            }

            .preview-markdown pre {
                background: #0d0d0d;
                padding: var(--space-md, 16px);
                border-radius: var(--radius-sm, 6px);
                overflow-x: auto;
                margin: 1em 0;
            }

            .preview-markdown pre code {
                background: none;
                padding: 0;
            }

            .preview-markdown ul,
            .preview-markdown ol {
                padding-left: 1.5em;
                margin: 1em 0;
            }

            .preview-markdown blockquote {
                border-left: 3px solid var(--color-brand-primary, #00d4ff);
                padding-left: 1em;
                margin: 1em 0;
                color: var(--color-text-secondary, #888);
            }

            .preview-editor {
                width: 100%;
                height: 100%;
                background: #0d0d0d;
                border: none;
                color: var(--color-text-primary, #fff);
                font-family: var(--font-family-mono, monospace);
                font-size: 0.9rem;
                line-height: 1.6;
                padding: var(--space-lg, 24px);
                resize: none;
                outline: none;
            }

            .preview-empty {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                color: var(--color-text-secondary, #888);
                text-align: center;
            }

            .preview-empty-icon {
                font-size: 4rem;
                margin-bottom: 1rem;
                opacity: 0.5;
            }

            /* Scrollbar */
            .category-list::-webkit-scrollbar,
            .file-list::-webkit-scrollbar,
            .preview-content::-webkit-scrollbar {
                width: 6px;
            }

            .category-list::-webkit-scrollbar-track,
            .file-list::-webkit-scrollbar-track,
            .preview-content::-webkit-scrollbar-track {
                background: transparent;
            }

            .category-list::-webkit-scrollbar-thumb,
            .file-list::-webkit-scrollbar-thumb,
            .preview-content::-webkit-scrollbar-thumb {
                background: var(--color-border, rgba(255,255,255,0.2));
                border-radius: 3px;
            }

            .category-list::-webkit-scrollbar-thumb:hover,
            .file-list::-webkit-scrollbar-thumb:hover,
            .preview-content::-webkit-scrollbar-thumb:hover {
                background: var(--color-brand-primary, #00d4ff);
            }

            /* Mobile */
            @media (max-width: 1024px) {
                .library-container {
                    grid-template-columns: 200px 1fr;
                    grid-template-rows: auto 1fr;
                }

                .library-categories {
                    grid-row: 1 / 3;
                }

                .library-files {
                    display: none;
                }

                .library-files.mobile-visible {
                    display: flex;
                    position: absolute;
                    top: 0;
                    left: 200px;
                    width: 280px;
                    height: 100%;
                    z-index: 10;
                }
            }

            @media (max-width: 768px) {
                .library-container {
                    grid-template-columns: 1fr;
                    width: 100%;
                    height: 100%;
                    border-radius: 0;
                }

                .library-categories {
                    display: none;
                }

                .library-categories.mobile-visible {
                    display: flex;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 280px;
                    height: 100%;
                    z-index: 10;
                }
            }
        `;
        document.head.appendChild(style);
    },

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'library-modal';
        modal.id = 'library-modal';
        modal.innerHTML = `
            <div class="library-container">
                <!-- Categories Panel -->
                <div class="library-categories">
                    <div class="library-header">
                        <h2 class="library-title">📚 Prompt Library</h2>
                        <button class="library-close" onclick="PromptLibrary.close()">×</button>
                    </div>
                    <div class="library-stats">
                        <span id="library-total">0</span> souborů v <span id="library-cats">0</span> kategoriích
                    </div>
                    <div class="category-list" id="category-list"></div>
                </div>

                <!-- Files Panel -->
                <div class="library-files">
                    <div class="files-header">
                        <input type="text" class="files-search" id="files-search" placeholder="🔍 Hledat soubory..." oninput="PromptLibrary.filterFiles(this.value)">
                    </div>
                    <div class="file-list" id="file-list">
                        <div class="preview-empty">
                            <div class="preview-empty-icon">📁</div>
                            <p>Vyberte kategorii</p>
                        </div>
                    </div>
                </div>

                <!-- Preview Panel -->
                <div class="library-preview">
                    <div class="preview-header">
                        <span class="preview-title" id="preview-title">Vyberte soubor</span>
                        <div class="preview-actions" id="preview-actions" style="display: none;">
                            <button class="preview-btn btn-copy" id="btn-copy" onclick="PromptLibrary.copyContent()">
                                📋 Kopírovat
                            </button>
                            <button class="preview-btn btn-edit" id="btn-edit" onclick="PromptLibrary.toggleEdit()">
                                ✏️ Upravit
                            </button>
                        </div>
                    </div>
                    <div class="preview-content" id="preview-content">
                        <div class="preview-empty">
                            <div class="preview-empty-icon">📄</div>
                            <p>Vyberte soubor pro náhled</p>
                            <p style="font-size: 0.8rem; margin-top: 0.5rem;">Podporované akce: Kopírovat, Upravit a Přepsat</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.close();
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('visible')) {
                this.close();
            }
        });
    },

    async loadIndex() {
        try {
            const response = await fetch(this.basePath + 'library-index.json');
            this.categories = await response.json();
            this.renderCategories();
        } catch (error) {
            console.error('Failed to load library index:', error);
        }
    },

    renderCategories() {
        const list = document.getElementById('category-list');
        const totalFiles = Object.values(this.categories).reduce((sum, cat) => sum + cat.count, 0);
        const totalCats = Object.keys(this.categories).length;

        document.getElementById('library-total').textContent = totalFiles;
        document.getElementById('library-cats').textContent = totalCats;

        list.innerHTML = Object.entries(this.categories).map(([key, cat]) => `
            <div class="category-item" data-category="${key}" onclick="PromptLibrary.selectCategory('${key}')">
                <span>${cat.name}</span>
                <span class="category-count">${cat.count}</span>
            </div>
        `).join('');
    },

    selectCategory(categoryKey) {
        this.currentCategory = categoryKey;
        this.currentFile = null;

        // Update active state
        document.querySelectorAll('.category-item').forEach(el => {
            el.classList.toggle('active', el.dataset.category === categoryKey);
        });

        this.renderFiles();
    },

    renderFiles(filter = '') {
        const list = document.getElementById('file-list');
        const category = this.categories[this.currentCategory];

        if (!category) return;

        const filteredFiles = filter
            ? category.files.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()))
            : category.files;

        list.innerHTML = filteredFiles.map(file => `
            <div class="file-item" data-file="${file.file}" onclick="PromptLibrary.selectFile('${file.file}')">
                <div class="file-item-name">${file.name}</div>
                <div class="file-item-meta">${this.formatSize(file.size)}</div>
            </div>
        `).join('');

        if (filteredFiles.length === 0) {
            list.innerHTML = `
                <div class="preview-empty">
                    <div class="preview-empty-icon">🔍</div>
                    <p>Žádné soubory nenalezeny</p>
                </div>
            `;
        }
    },

    filterFiles(query) {
        this.renderFiles(query);
    },

    async selectFile(filename) {
        this.currentFile = filename;
        this.isEditing = false;

        // Update active state
        document.querySelectorAll('.file-item').forEach(el => {
            el.classList.toggle('active', el.dataset.file === filename);
        });

        // Show loading
        const previewContent = document.getElementById('preview-content');
        previewContent.innerHTML = '<div class="preview-empty"><div class="preview-empty-icon">⏳</div><p>Načítání...</p></div>';

        try {
            const path = `${this.basePath}agent-docs/${this.currentCategory}/${filename}`;
            const response = await fetch(path);
            this.currentContent = await response.text();

            document.getElementById('preview-title').textContent = filename.replace('.md', '');
            document.getElementById('preview-actions').style.display = 'flex';
            document.getElementById('btn-edit').classList.remove('active');
            document.getElementById('btn-edit').innerHTML = '✏️ Upravit';

            this.renderMarkdown(this.currentContent);
        } catch (error) {
            previewContent.innerHTML = `
                <div class="preview-empty">
                    <div class="preview-empty-icon">❌</div>
                    <p>Nepodařilo se načíst soubor</p>
                    <p style="font-size: 0.8rem; margin-top: 0.5rem;">${error.message}</p>
                </div>
            `;
        }
    },

    renderMarkdown(content) {
        const previewContent = document.getElementById('preview-content');

        // Simple markdown to HTML conversion
        let html = content
            // Escape HTML
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            // Headers
            .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
            .replace(/^### (.+)$/gm, '<h3>$1</h3>')
            .replace(/^## (.+)$/gm, '<h2>$1</h2>')
            .replace(/^# (.+)$/gm, '<h1>$1</h1>')
            // Bold and italic
            .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/___(.+?)___/g, '<strong><em>$1</em></strong>')
            .replace(/__(.+?)__/g, '<strong>$1</strong>')
            .replace(/_(.+?)_/g, '<em>$1</em>')
            // Code blocks
            .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            // Blockquotes
            .replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>')
            // Lists
            .replace(/^\* (.+)$/gm, '<li>$1</li>')
            .replace(/^- (.+)$/gm, '<li>$1</li>')
            .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
            // Paragraphs
            .replace(/\n\n/g, '</p><p>')
            // Line breaks
            .replace(/\n/g, '<br>');

        // Wrap in paragraph
        html = '<p>' + html + '</p>';

        // Clean up list items
        html = html.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');
        html = html.replace(/<\/ul>\s*<ul>/g, '');

        previewContent.innerHTML = `<div class="preview-markdown">${html}</div>`;
    },

    toggleEdit() {
        const previewContent = document.getElementById('preview-content');
        const editBtn = document.getElementById('btn-edit');

        if (this.isEditing) {
            // Switch to preview mode
            this.isEditing = false;
            editBtn.classList.remove('active');
            editBtn.innerHTML = '✏️ Upravit';

            // Get content from editor
            const editor = document.getElementById('content-editor');
            if (editor) {
                this.currentContent = editor.value;
            }

            this.renderMarkdown(this.currentContent);

            // Update actions
            document.getElementById('preview-actions').innerHTML = `
                <button class="preview-btn btn-copy" id="btn-copy" onclick="PromptLibrary.copyContent()">
                    📋 Kopírovat
                </button>
                <button class="preview-btn btn-edit" id="btn-edit" onclick="PromptLibrary.toggleEdit()">
                    ✏️ Upravit
                </button>
            `;
        } else {
            // Switch to edit mode
            this.isEditing = true;
            editBtn.classList.add('active');
            editBtn.innerHTML = '👁️ Náhled';

            previewContent.innerHTML = `
                <textarea class="preview-editor" id="content-editor">${this.escapeHtml(this.currentContent)}</textarea>
            `;

            document.getElementById('content-editor').focus();

            // Update actions
            document.getElementById('preview-actions').innerHTML = `
                <button class="preview-btn btn-save" onclick="PromptLibrary.saveContent()">
                    💾 Přepsat soubor
                </button>
                <button class="preview-btn btn-cancel" onclick="PromptLibrary.cancelEdit()">
                    ❌ Zrušit
                </button>
                <button class="preview-btn btn-edit active" id="btn-edit" onclick="PromptLibrary.toggleEdit()">
                    👁️ Náhled
                </button>
            `;
        }
    },

    async copyContent() {
        const btn = document.getElementById('btn-copy');

        try {
            // Get current content (from editor if editing)
            let content = this.currentContent;
            if (this.isEditing) {
                const editor = document.getElementById('content-editor');
                if (editor) content = editor.value;
            }

            await navigator.clipboard.writeText(content);

            btn.classList.add('copied');
            btn.innerHTML = '✅ Zkopírováno!';

            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = '📋 Kopírovat';
            }, 2000);
        } catch (error) {
            console.error('Failed to copy:', error);
            btn.innerHTML = '❌ Chyba';
            setTimeout(() => {
                btn.innerHTML = '📋 Kopírovat';
            }, 2000);
        }
    },

    async saveContent() {
        const editor = document.getElementById('content-editor');
        if (!editor) return;

        const newContent = editor.value;
        const path = `${this.basePath}agent-docs/${this.currentCategory}/${this.currentFile}`;

        // Since we can't write files directly from browser,
        // we'll copy the content and show instructions
        try {
            await navigator.clipboard.writeText(newContent);

            this.currentContent = newContent;

            // Show success modal
            const confirmModal = document.createElement('div');
            confirmModal.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--color-bg-secondary, #111);
                border: 1px solid var(--color-brand-primary, #00d4ff);
                border-radius: 12px;
                padding: 30px;
                z-index: 3000;
                text-align: center;
                max-width: 400px;
                box-shadow: 0 0 40px rgba(0, 212, 255, 0.3);
            `;
            confirmModal.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: 1rem;">📋</div>
                <h3 style="color: var(--color-brand-primary, #00d4ff); margin-bottom: 1rem;">Obsah zkopírován!</h3>
                <p style="color: var(--color-text-secondary, #888); margin-bottom: 1rem; font-size: 0.9rem;">
                    Upravený obsah byl zkopírován do schránky.<br><br>
                    Pro přepsání souboru vložte obsah do:<br>
                    <code style="background: #0d0d0d; padding: 8px 12px; border-radius: 4px; display: block; margin-top: 8px; font-size: 0.8rem; word-break: break-all;">
                        ${path}
                    </code>
                </p>
                <button onclick="this.parentElement.remove()" style="
                    background: var(--color-brand-primary, #00d4ff);
                    color: white;
                    border: none;
                    padding: 10px 24px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 600;
                ">OK</button>
            `;
            document.body.appendChild(confirmModal);

            // Switch back to preview
            this.toggleEdit();

        } catch (error) {
            console.error('Failed to save:', error);
            alert('Nepodařilo se uložit změny: ' + error.message);
        }
    },

    cancelEdit() {
        this.isEditing = false;

        // Restore original content
        this.renderMarkdown(this.currentContent);

        // Reset buttons
        document.getElementById('preview-actions').innerHTML = `
            <button class="preview-btn btn-copy" id="btn-copy" onclick="PromptLibrary.copyContent()">
                📋 Kopírovat
            </button>
            <button class="preview-btn btn-edit" id="btn-edit" onclick="PromptLibrary.toggleEdit()">
                ✏️ Upravit
            </button>
        `;
    },

    formatSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    open() {
        document.getElementById('library-modal').classList.add('visible');
        document.body.style.overflow = 'hidden';
    },

    close() {
        document.getElementById('library-modal').classList.remove('visible');
        document.body.style.overflow = '';
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    PromptLibrary.init();
});

// Expose globally
window.PromptLibrary = PromptLibrary;
