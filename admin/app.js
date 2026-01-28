/**
 * Admin Dashboard - Program Pro Učitele
 */

// Admin credentials (in production, use proper backend auth)
const ADMIN_CREDENTIALS = {
    email: 'svanda@praut.cz',
    password: 'M0r3S0rr7'
};

// Teachers from first training session
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

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
const logoutBtn = document.getElementById('logoutBtn');
const userEmailSpan = document.getElementById('userEmail');

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    // Check if already logged in
    const session = sessionStorage.getItem('adminSession');
    if (session) {
        showDashboard(session);
    }
    
    // Setup event listeners
    loginForm.addEventListener('submit', handleLogin);
    logoutBtn.addEventListener('click', handleLogout);
    
    // Setup tabs
    setupTabs();
    
    // Setup teacher search
    document.getElementById('teacherSearch').addEventListener('input', filterTeachers);
    
    // Setup export
    document.getElementById('exportBtn').addEventListener('click', exportCSV);
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem('adminSession', email);
        showDashboard(email);
    } else {
        errorMessage.textContent = 'Nesprávný email nebo heslo';
        document.getElementById('password').value = '';
    }
}

function handleLogout() {
    sessionStorage.removeItem('adminSession');
    loginScreen.classList.remove('hidden');
    dashboard.classList.add('hidden');
    loginForm.reset();
    errorMessage.textContent = '';
}

function showDashboard(email) {
    loginScreen.classList.add('hidden');
    dashboard.classList.remove('hidden');
    userEmailSpan.textContent = email;
    
    // Load data
    loadStats();
    loadTeachers();
    loadRegistrations();
    loadActivity();
}

function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Activate clicked tab
            tab.classList.add('active');
            document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
        });
    });
}

function loadStats() {
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    const activity = JSON.parse(localStorage.getItem('userActivity') || '{}');
    const checkedTeachers = JSON.parse(localStorage.getItem('checkedTeachers') || '[]');
    
    // Total users (registrations + checked teachers)
    const totalUsers = registrations.length + checkedTeachers.length;
    document.getElementById('totalUsers').textContent = totalUsers;
    
    // Unique schools
    const schools = new Set(registrations.map(r => r.school).filter(Boolean));
    document.getElementById('totalSchools').textContent = schools.size;
    
    // Total points
    let totalPoints = 0;
    Object.values(activity).forEach(user => {
        totalPoints += user.points || 0;
    });
    document.getElementById('totalPoints').textContent = totalPoints;
    
    // Total prompts
    let totalPrompts = 0;
    Object.values(activity).forEach(user => {
        totalPrompts += (user.promptsWritten || 0) + (user.promptsCopied || 0);
    });
    document.getElementById('totalPrompts').textContent = totalPrompts;
}

function loadTeachers() {
    const grid = document.getElementById('teachersGrid');
    const checkedTeachers = JSON.parse(localStorage.getItem('checkedTeachers') || '[]');
    
    grid.innerHTML = '';
    
    TRAINING_TEACHERS.forEach((name, index) => {
        const isChecked = checkedTeachers.includes(name);
        const item = document.createElement('label');
        item.className = 'teacher-item' + (isChecked ? ' checked' : '');
        item.innerHTML = `
            <input type="checkbox" ${isChecked ? 'checked' : ''} data-name="${name}">
            <span>${name}</span>
        `;
        
        const checkbox = item.querySelector('input');
        checkbox.addEventListener('change', () => {
            toggleTeacher(name, checkbox.checked);
            item.classList.toggle('checked', checkbox.checked);
            updateCheckedCount();
        });
        
        grid.appendChild(item);
    });
    
    document.getElementById('totalTeachers').textContent = TRAINING_TEACHERS.length;
    updateCheckedCount();
}

function toggleTeacher(name, checked) {
    let checkedTeachers = JSON.parse(localStorage.getItem('checkedTeachers') || '[]');
    
    if (checked && !checkedTeachers.includes(name)) {
        checkedTeachers.push(name);
    } else if (!checked) {
        checkedTeachers = checkedTeachers.filter(n => n !== name);
    }
    
    localStorage.setItem('checkedTeachers', JSON.stringify(checkedTeachers));
    loadStats(); // Refresh stats
}

function updateCheckedCount() {
    const checkedTeachers = JSON.parse(localStorage.getItem('checkedTeachers') || '[]');
    document.getElementById('checkedCount').textContent = checkedTeachers.length;
}

function filterTeachers() {
    const search = document.getElementById('teacherSearch').value.toLowerCase();
    const items = document.querySelectorAll('.teacher-item');
    
    items.forEach(item => {
        const name = item.querySelector('span').textContent.toLowerCase();
        item.style.display = name.includes(search) ? 'flex' : 'none';
    });
}

function loadRegistrations() {
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    const tbody = document.getElementById('registrationsTable');
    const emptyState = document.getElementById('noRegistrations');
    
    if (registrations.length === 0) {
        tbody.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    
    tbody.innerHTML = registrations.map(r => `
        <tr>
            <td>${escapeHtml(r.surname || '-')}</td>
            <td>${escapeHtml(r.school || '-')}</td>
            <td>${escapeHtml(r.city || '-')}</td>
            <td>${r.birthYear || '-'}</td>
            <td>${escapeHtml(r.subjects || '-')}</td>
            <td>${formatDate(r.timestamp)}</td>
        </tr>
    `).join('');
}

function loadActivity() {
    const activity = JSON.parse(localStorage.getItem('userActivity') || '{}');
    
    // Prompts written
    const writtenList = document.getElementById('writtenPrompts');
    const written = [];
    Object.entries(activity).forEach(([user, data]) => {
        if (data.written) {
            data.written.forEach(item => {
                written.push({ user, ...item });
            });
        }
    });
    
    if (written.length > 0) {
        writtenList.innerHTML = written.slice(0, 50).map(w => `
            <div class="activity-item">
                <span class="user">${escapeHtml(w.user)}</span>: ${escapeHtml(w.text?.substring(0, 100) || '...')}
                <div class="time">${formatDate(w.timestamp)}</div>
            </div>
        `).join('');
    }
    
    // Prompts copied
    const copiedList = document.getElementById('copiedPrompts');
    const copied = [];
    Object.entries(activity).forEach(([user, data]) => {
        if (data.copied) {
            data.copied.forEach(item => {
                copied.push({ user, ...item });
            });
        }
    });
    
    if (copied.length > 0) {
        copiedList.innerHTML = copied.slice(0, 50).map(c => `
            <div class="activity-item">
                <span class="user">${escapeHtml(c.user)}</span>: ${escapeHtml(c.section || c.text?.substring(0, 50) || '...')}
                <div class="time">${formatDate(c.timestamp)}</div>
            </div>
        `).join('');
    }
    
    // Viewed sections
    const viewedList = document.getElementById('viewedSections');
    const viewed = [];
    Object.entries(activity).forEach(([user, data]) => {
        if (data.viewed) {
            data.viewed.forEach(item => {
                viewed.push({ user, ...item });
            });
        }
    });
    
    if (viewed.length > 0) {
        viewedList.innerHTML = viewed.slice(0, 50).map(v => `
            <div class="activity-item">
                <span class="user">${escapeHtml(v.user)}</span>: ${escapeHtml(v.section || '-')}
                <div class="time">${formatDate(v.timestamp)}</div>
            </div>
        `).join('');
    }
}

function exportCSV() {
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    
    if (registrations.length === 0) {
        alert('Žádná data k exportu');
        return;
    }
    
    const headers = ['Příjmení', 'Škola', 'Město', 'Rok narození', 'Předměty', 'Registrace'];
    const rows = registrations.map(r => [
        r.surname || '',
        r.school || '',
        r.city || '',
        r.birthYear || '',
        r.subjects || '',
        r.timestamp || ''
    ]);
    
    const csv = [headers, ...rows].map(row => 
        row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
    ).join('\n');
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `registrace_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}

// Helpers
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(timestamp) {
    if (!timestamp) return '-';
    const date = new Date(timestamp);
    return date.toLocaleDateString('cs-CZ') + ' ' + date.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' });
}
