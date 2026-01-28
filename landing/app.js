/**
 * Program Pro Učitele - Landing Page
 * Interactive functionality
 */

// Configuration
const CONFIG = {
    // Discord server invite link
    discordInvite: 'https://discord.gg/RDt5HvP9',
    
    // Intro animation duration (ms)
    introDuration: 3600,
    
    // Redirect delay after form submission (ms)
    redirectDelay: 2500
};

// DOM Elements
const introOverlay = document.getElementById('introOverlay');
const mainContent = document.getElementById('mainContent');
const teacherForm = document.getElementById('teacherForm');
const successModal = document.getElementById('successModal');

/**
 * Initialize the application
 */
function init() {
    // Check if intro was already shown this session
    const introShown = sessionStorage.getItem('introShown');
    
    if (introShown) {
        // Skip intro animation
        skipIntro();
    } else {
        // Show intro animation
        setTimeout(() => {
            hideIntro();
            sessionStorage.setItem('introShown', 'true');
        }, CONFIG.introDuration);
    }
    
    // Setup form handling
    setupForm();
    
    // Add keyboard navigation
    setupKeyboardNav();
}

/**
 * Skip intro animation immediately
 */
function skipIntro() {
    introOverlay.classList.add('hidden');
    mainContent.classList.add('visible');
}

/**
 * Hide intro with smooth transition
 */
function hideIntro() {
    introOverlay.classList.add('hidden');
    
    // Small delay before showing main content for smooth transition
    setTimeout(() => {
        mainContent.classList.add('visible');
    }, 200);
}

/**
 * Setup form submission handling
 */
function setupForm() {
    teacherForm.addEventListener('submit', handleFormSubmit);
    
    // Add input animations
    const inputs = teacherForm.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
}

/**
 * Handle form submission
 * @param {Event} e - Submit event
 */
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        surname: document.getElementById('surname').value.trim(),
        school: document.getElementById('school').value.trim(),
        city: document.getElementById('city').value.trim(),
        birthYear: document.getElementById('birthYear').value,
        subjects: document.getElementById('subjects').value.trim()
    };
    
    // Validate required fields
    if (!formData.surname || !formData.school) {
        showValidationError();
        return;
    }
    
    // Store data (you can send this to a backend later)
    storeRegistration(formData);
    
    // Show success modal
    showSuccessModal();
    
    // Redirect to Discord after delay
    setTimeout(() => {
        window.open(CONFIG.discordInvite, '_blank');
        
        // Optionally close modal and reset form
        setTimeout(() => {
            successModal.classList.remove('visible');
            teacherForm.reset();
        }, 1000);
    }, CONFIG.redirectDelay);
}

/**
 * Store registration data
 * @param {Object} data - Form data
 */
function storeRegistration(data) {
    // For now, store in localStorage
    // In production, send to your backend
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    registrations.push({
        ...data,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('registrations', JSON.stringify(registrations));
    
    console.log('Registration stored:', data);
    
    // TODO: Send to backend
    // fetch('/api/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // });
}

/**
 * Show validation error
 */
function showValidationError() {
    const requiredInputs = teacherForm.querySelectorAll('[required]');
    
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            input.addEventListener('input', function handler() {
                input.style.borderColor = '';
                input.removeEventListener('input', handler);
            });
        }
    });
}

/**
 * Show success modal
 */
function showSuccessModal() {
    successModal.classList.add('visible');
}

/**
 * Setup keyboard navigation
 */
function setupKeyboardNav() {
    // Allow skipping intro with any key or click
    document.addEventListener('keydown', (e) => {
        if (!introOverlay.classList.contains('hidden')) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                hideIntro();
                sessionStorage.setItem('introShown', 'true');
            }
        }
    });
    
    introOverlay.addEventListener('click', () => {
        if (!introOverlay.classList.contains('hidden')) {
            hideIntro();
            sessionStorage.setItem('introShown', 'true');
        }
    });
    
    // Close modal with Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && successModal.classList.contains('visible')) {
            successModal.classList.remove('visible');
        }
    });
}

/**
 * Allow clicking outside modal to close it
 */
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('visible');
    }
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
