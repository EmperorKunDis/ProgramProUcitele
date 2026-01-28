/**
 * User Activity Tracking - Program Pro Učitele
 * Tracks: viewed sections, copied prompts, written prompts, points
 */

(function() {
    'use strict';
    
    // Get current user from registrations
    function getCurrentUser() {
        const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
        if (registrations.length > 0) {
            return registrations[registrations.length - 1].surname || 'Anonym';
        }
        return 'Anonym';
    }
    
    // Get or create user activity
    function getActivity() {
        return JSON.parse(localStorage.getItem('userActivity') || '{}');
    }
    
    function saveActivity(activity) {
        localStorage.setItem('userActivity', JSON.stringify(activity));
    }
    
    function getUserActivity(user) {
        const activity = getActivity();
        if (!activity[user]) {
            activity[user] = {
                points: 0,
                promptsWritten: 0,
                promptsCopied: 0,
                sectionsViewed: 0,
                written: [],
                copied: [],
                viewed: []
            };
        }
        return activity;
    }
    
    // Track section view
    function trackSectionView(sectionId, sectionTitle) {
        const user = getCurrentUser();
        const activity = getUserActivity(user);
        
        // Check if already viewed recently (within 5 min)
        const recentView = activity[user].viewed.find(v => 
            v.section === sectionTitle && 
            (Date.now() - new Date(v.timestamp).getTime()) < 5 * 60 * 1000
        );
        
        if (!recentView) {
            activity[user].viewed.push({
                section: sectionTitle,
                sectionId: sectionId,
                timestamp: new Date().toISOString()
            });
            activity[user].sectionsViewed++;
            activity[user].points += 1; // 1 point per section view
            saveActivity(activity);
        }
    }
    
    // Track prompt copy
    function trackPromptCopy(text, section) {
        const user = getCurrentUser();
        const activity = getUserActivity(user);
        
        activity[user].copied.push({
            text: text.substring(0, 200),
            section: section,
            timestamp: new Date().toISOString()
        });
        activity[user].promptsCopied++;
        activity[user].points += 2; // 2 points per copy
        saveActivity(activity);
    }
    
    // Track prompt written/submitted
    function trackPromptWritten(text) {
        const user = getCurrentUser();
        const activity = getUserActivity(user);
        
        activity[user].written.push({
            text: text.substring(0, 500),
            timestamp: new Date().toISOString()
        });
        activity[user].promptsWritten++;
        activity[user].points += 5; // 5 points per written prompt
        saveActivity(activity);
    }
    
    // Expose global tracking functions
    window.PPUTracking = {
        trackSectionView,
        trackPromptCopy,
        trackPromptWritten,
        getCurrentUser,
        getActivity
    };
    
    // Auto-track copy events
    document.addEventListener('copy', function(e) {
        const selection = window.getSelection().toString();
        if (selection.length > 20) { // Only track meaningful copies
            const section = document.querySelector('.section-title, h1, h2')?.textContent || 'Unknown';
            trackPromptCopy(selection, section);
        }
    });
    
    // Auto-track section views (when content loads)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Check if a new section was loaded
                const sectionTitle = document.querySelector('.section-title, h1.active, [data-section-title]');
                const sectionId = document.querySelector('[data-section-id]')?.dataset.sectionId || window.location.hash;
                
                if (sectionTitle && sectionTitle.textContent) {
                    trackSectionView(sectionId, sectionTitle.textContent);
                }
            }
        });
    });
    
    // Start observing main content area
    document.addEventListener('DOMContentLoaded', function() {
        const mainContent = document.querySelector('main, .main-content, #content, .content-area');
        if (mainContent) {
            observer.observe(mainContent, { childList: true, subtree: true });
        }
        
        // Track initial page view
        const initialTitle = document.querySelector('h1, .page-title')?.textContent;
        if (initialTitle) {
            trackSectionView(window.location.pathname, initialTitle);
        }
    });
    
    // Track hash changes (SPA navigation)
    window.addEventListener('hashchange', function() {
        setTimeout(function() {
            const sectionTitle = document.querySelector('.section-title, h1, h2')?.textContent;
            if (sectionTitle) {
                trackSectionView(window.location.hash, sectionTitle);
            }
        }, 100);
    });
    
    console.log('[PPU Tracking] Initialized for user:', getCurrentUser());
})();
