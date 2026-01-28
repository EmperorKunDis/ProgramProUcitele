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
    // Check if user is already registered - redirect to WebApp
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    if (registrations.length > 0) {
        window.location.href = '../WebApp_Guide/';
        return;
    }
    
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
        subjects: document.getElementById('subjects').value.trim(),
        discord: document.getElementById('discord').value.trim()
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
    
    // Redirect to Discord (new tab) and WebApp (current window) after delay
    setTimeout(() => {
        // Open Discord in new tab
        window.open(CONFIG.discordInvite, '_blank');
        
        // Redirect current window to WebApp Guide
        setTimeout(() => {
            window.location.href = '../WebApp_Guide/';
        }, 500);
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
    
    // Auto-check teacher in training list if surname matches
    autoCheckTeacher(data.surname);
    
    console.log('Registration stored:', data);
    
    // TODO: Send to backend
    // fetch('/api/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // });
}

/**
 * Auto-check teacher in training list if surname matches
 * @param {string} surname - Registered surname
 */
function autoCheckTeacher(surname) {
    if (!surname) return;
    
    // Training teachers list (must match admin/app.js)
    const TRAINING_TEACHERS = [
        'Bacílek', 'Baďurová', 'Balák', 'Baláková', 'Beran', 'Beránek', 'Blažko',
        'Bobčíková Pechová', 'Bosák', 'Botlíková', 'Brettschneiderová', 'Brisuda',
        'Bůcha', 'Bumbová', 'Burešová', 'Campr', 'Cimrhaklová', 'Cuper', 'Czelder',
        'Čerevková', 'Černý', 'Červená', 'Degťarová', 'Dobrovolný', 'Domov',
        'Dranczak', 'Ederová', 'Endal', 'Farmačka', 'Fialová', 'Fialová',
        'Fletterová Horová', 'Fučík', 'Fuchs', 'Fůsová', 'Goldschaltová', 'Gross',
        'Gubran', 'Halová', 'Hanzlík', 'Hejda', 'Herink', 'Homolka', 'Honsig',
        'Hovorka', 'Hrachová', 'Hrdličková', 'Hrubec', 'Hůdová', 'Humeníková',
        'Cheníčková', 'Chládková', 'Chval', 'Chvalová', 'Illingerová', 'Jandová',
        'Jaroš', 'Jeníková', 'Jirásková', 'Jirková', 'Jurčík', 'Kábová', 'Kafková',
        'Kalianko', 'Karafiátová', 'Karlíková', 'Klierová', 'Kněžická', 'Kofránková',
        'Kopecká', 'Kouřimský', 'Kovandová', 'Kowaliková', 'Krákora', 'Král',
        'Krejčová', 'Krupičková', 'Kubešová', 'Kubínová', 'Kuklová', 'Kunštár',
        'Labudík', 'Langmaier', 'Lehoczky', 'Loukota', 'Maliňáková', 'Marková',
        'Matějková', 'Matuszný', 'Melková', 'Mondek', 'Müller', 'Müllerová',
        'Neumannová', 'Norková', 'Nowak', 'Ogorková', 'Olišar', 'Opavová',
        'Opeltová', 'Pánková', 'Pátek', 'Pátek', 'Pénzesová', 'Perlinger', 'Petrík',
        'Petrikovičová', 'Petříková', 'Petřík', 'Pivoňková', 'Plaňanská', 'Princ',
        'Procházka', 'Randa', 'Rech', 'Rejkuba', 'Rejsek', 'Rochel', 'Růžička',
        'Rychnová', 'Sabadinová', 'Salajková', 'Serbousek', 'Silovská', 'Skočil',
        'Smutný', 'Sobotka', 'Spáčilová', 'Spáčilová', 'Speierl', 'Speierlová',
        'Stehlíková', 'Straka', 'Strapková', 'Šimáček', 'Šimon', 'Šímová', 'Štádler',
        'Študlarová', 'Šustrová', 'Tau', 'Trappmann', 'Trojáčková', 'Trsková',
        'Třešková', 'Tučák', 'Učíková', 'Urbánková', 'Utíkal', 'Utíkalová',
        'Valinová', 'Vančurová', 'Vaníková', 'Vasyliev', 'Vasylieva', 'Veselá',
        'Volf', 'Vomáčka', 'Vrbata', 'Vyhnálková', 'Wunderlich', 'Zuna'
    ];
    
    // Normalize surname for comparison
    const normalizedSurname = surname.trim().toLowerCase();
    
    // Find matching teacher
    const matchedTeacher = TRAINING_TEACHERS.find(teacher => 
        teacher.toLowerCase() === normalizedSurname
    );
    
    if (matchedTeacher) {
        // Add to checked teachers list
        let checkedTeachers = JSON.parse(localStorage.getItem('checkedTeachers') || '[]');
        if (!checkedTeachers.includes(matchedTeacher)) {
            checkedTeachers.push(matchedTeacher);
            localStorage.setItem('checkedTeachers', JSON.stringify(checkedTeachers));
            console.log('Auto-checked teacher:', matchedTeacher);
        }
    }
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
