/**
 * Simple Client-side Search Module
 */
const SearchModule = {
    index: [],

    async buildIndex(sections) {
        console.log('Building search index...');
        this.index = [];

        // Fetch all sections in parallel
        const promises = sections.map(async (section) => {
            try {
                const response = await fetch(section.file);
                if (!response.ok) return null;
                const html = await response.text();

                // Strip HTML tags for indexing
                const div = document.createElement('div');
                div.innerHTML = html;
                const text = div.textContent || div.innerText || "";

                return {
                    id: section.id,
                    title: section.title,
                    content: text.toLowerCase(),
                    rawTitle: section.title
                };
            } catch (e) {
                console.warn('Failed to index section:', section.id);
                return null;
            }
        });

        const results = await Promise.all(promises);
        this.index = results.filter(item => item !== null);
        console.log(`Indexed ${this.index.length} sections`);
    },

    search(query) {
        if (!query || query.length < 2) return [];
        const q = query.toLowerCase();

        return this.index
            .filter(item => item.content.includes(q))
            .map(item => {
                // Find snippet
                const idx = item.content.indexOf(q);
                const start = Math.max(0, idx - 40);
                const end = Math.min(item.content.length, idx + 60);
                const snippet = '...' + item.content.substring(start, end) + '...';

                return {
                    id: item.id,
                    title: item.rawTitle,
                    snippet: snippet
                };
            });
    }
};

window.SearchModule = SearchModule;
