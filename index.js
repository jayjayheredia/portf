// 1. DATA: Centralizada
const skills = ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "Responsive Design"];

const projects = [
    {
        id: 1,
        title_es: "E-commerce Pro",
        title_en: "Pro E-commerce",
        desc_es: "Plataforma de ventas con pasarela de pagos integrada.",
        desc_en: "Sales platform with integrated payment gateway.",
        tags: ["React", "Node", "Stripe"],
        img: "images/dopefolio-Photoroom.png"
    },
    {
        id: 2,
        title_es: "Gestor de Tareas",
        title_en: "Task Manager",
        desc_es: "Aplicación de productividad con drag & drop.",
        desc_en: "Productivity app with drag & drop features.",
        tags: ["JavaScript", "Firebase"],
        img: "images/dopefolio-Photoroom.png"
    },
    {
        id: 3,
        title_es: "Portal Inmobiliario",
        title_en: "Real Estate Portal",
        desc_es: "Buscador de propiedades con filtros avanzados.",
        desc_en: "Property search with advanced filters.",
        tags: ["Node", "MongoDB"],
        img: "images/dopefolio-Photoroom.png"
    }
];

const i18n = {
    en: {
        nav_about: "About", nav_projects: "Projects", hero_subtitle: "FullStack Web Developer",
        hero_btn: "View Work", about_title: "About Me", about_p1: "I build modern web solutions...",
        skills_title: "Skills", projects_title: "My Projects", copy: "All Rights Reserved"
    },
    es: {
        nav_about: "Sobre Mí", nav_projects: "Proyectos", hero_subtitle: "Desarrollador Web FullStack",
        hero_btn: "Ver Trabajo", about_title: "Sobre Mí", about_p1: "Creo soluciones web modernas y funcionales...",
        skills_title: "Habilidades", projects_title: "Mis Proyectos", copy: "Todos los derechos reservados"
    }
};

let currentLang = 'en';

// 2. INICIALIZACIÓN
function init() {
    renderSkills();
    renderProjects();
    setupTheme();
    setupScrollReveal();
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skills.map(s => `<span class="tag">${s}</span>`).join('');
}

// Agrega esto dentro de la función renderProjects() para mejorar el HTML generado:
function renderProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = projects.map(p => `
        <article class="project-card reveal">
            <img src="${p.img}" class="project-card__img" alt="${p.title_en}">
            <div class="project-card__content">
                <div class="mb-3">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <h3 class="font-bold text-xl">${currentLang === 'en' ? p.title_en : p.title_es}</h3>
                <p class="text-muted text-sm mb-4">${currentLang === 'en' ? p.desc_en : p.desc_es}</p>
                <div class="flex gap-4 mt-auto">
                    <a href="#" class="text-accent font-bold text-sm hover:underline">Live Demo <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i></a>
                    <a href="#" class="text-muted font-bold text-sm hover:underline">GitHub <i class="fa-brands fa-github ml-1"></i></a>
                </div>
            </div>
        </article>
    `).join('');
    setupScrollReveal();
}

// 3. ANIMACIÓN DE SCROLL (Senior Approach)
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// 4. MODO OSCURO E IDIOMA
function setupTheme() {
    const themeBtn = document.getElementById('theme-btn');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    document.getElementById('btnIdioma').textContent = currentLang.toUpperCase();
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = i18n[currentLang][key];
    });
    renderProjects();
}

document.addEventListener('DOMContentLoaded', init);
