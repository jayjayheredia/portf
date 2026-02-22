// 1. DATA: Centralizada
const skills = ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "Responsive Design"];

const projects = [
    {
        id: 1,
        title_es: "Taller Amodeo",
        title_en: "Amodeo's Garage",
        desc_es: "Página presentación para un taller de electricidad automotriz.",
        desc_en: "Landing page for an automotive electrical workshop.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        img: "images/amodeo.png",
        liveDemo: "https://amodeo.netlify.app/",
        github: "https://github.com/jayjayheredia/taller"
    },
    {
        id: 2,
        title_es: "Exabyte Tech",
        title_en: "Exabyte Tech",
        desc_es: "Página presentación para una empresa de tecnología. Reparación y venta de insumos",
        desc_en: "Landing page for a technology company. Repair and sales of supplies.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        img: "images/exabyte.png",
        liveDemo: "https://jayjayheredia.github.io/exabyte/",
        github: "https://github.com/jayjayheredia/exabyte"
    },
    {
        id: 3,
        title_es: "Api & Firebase",
        title_en: "API & Firebase",
        desc_es: "Página que demuestra el uso de APIs y un Crud sencillo en Firebase.",
        desc_en: "Page demonstrating the use of APIs and a simple CRUD in Firebase.",
        tags: ["HTML5", "CSS3", "JavaScript", "Firebase", "API", "Responsive Design", "CRUD"],
        img: "images/api.png",
        liveDemo: "https://jayjayheredia.github.io/apiydb/",
        github: "https://github.com/jayjayheredia/apiydb"
    },
    {
        id: 4,
        title_es: "Tatuajes RedFox",
        title_en: "RedFox Tattoos",
        desc_es: "Página de presentación con la posibilidad de solicitar turnos por fecha para una empresa de tatuajes.",
        desc_en: "Landing page for a tattoo company with appointment booking.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        img: "images/redfox.png",
        liveDemo: "https://jayjayheredia.github.io/redfox/",
        github: "https://github.com/jayjayheredia/redfox"
    },
    {
        id: 5,
        title_es: "Cabañas y Descanso",
        title_en: "Cabins and Rest",
        desc_es: "Página de presentación para una cabaña con formulario para solicitar información.",
        desc_en: "Landing page for a cabin rental business with an information request form.",
        tags: ["HTML5", "CSS3", "JavaScript"],  
        img: "images/caba.png",
        liveDemo: "https://jayjayheredia.github.io/caban/",
        github: "https://github.com/jayjayheredia/caban"
    },
        {
        id: 6,
        title_es: "Blog Personal",
        title_en: "Personal Blog",
        desc_es: "Página de blog personal con funcionalidades de publicación.",
        desc_en: "Personal blog with publishing features.",
        tags: ["HTML5", "CSS3"],
        img: "images/blog.png",
        liveDemo: "https://jayjayblog.netlify.app/",
        github: "https://github.com/jayjayheredia/"
    },
    {
        id: 7,
        title_es: "Carrito de Compras",
        title_en: "Shopping Cart",
        desc_es: "Página de carrito de compras con funcionalidades de compra.",
        desc_en: "Shopping cart with purchase features.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        img: "images/carrito.png",
        liveDemo: "https://carrito-jay.netlify.app/",
        github: "https://github.com/jayjayheredia/"
    }
];

const i18n = {
    en: {
        nav_about: "About", nav_projects: "Projects", hero_subtitle: "FullStack Web Developer", hero__desc: "I create modern, functional web solutions that help businesses thrive online.",
        hero_btn: "View Work", about_title: "About Me", about_p1: "I build modern web solutions combining a solid backend with intuitive interfaces.",
        skills_title: "Skills", projects_title: "My Projects", copy: "All Rights Reserved", more_p: "Specialist in delivering custom, functional projects that meet your goals"
    },
    es: {
        nav_about: "Sobre Mí", nav_projects: "Proyectos", hero_subtitle: "Desarrollador Web FullStack", hero__desc: "Creo soluciones web modernas y funcionales que ayudan a los negocios a prosperar en línea.",
        hero_btn: "Ver Trabajo", about_title: "Sobre Mí", about_p1: "Soy un desarrollador apasionado por crear soluciones que combinan un backend sólido con interfaces modernas.",
        skills_title: "Habilidades", projects_title: "Mis Proyectos", copy: "Todos los derechos reservados", more_p: "Especialista en cumplir tus objetivos con proyectos personalizados y funcionales"  
    }
};

// Configuración inicial en Español
let currentLang = 'es';

// 2. INICIALIZACIÓN
function init() {
    renderSkills();
    renderProjects();
    setupTheme();
    setupScrollReveal();
    updateUI(); // Forzar idioma inicial
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skills.map(s => `<span class="tag">${s}</span>`).join('');
}

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
                    <a href="${p.liveDemo}" target="_blank" class="text-accent font-bold text-sm hover:underline">Live Demo <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i></a>
                    <a href="${p.github}" target="_blank" class="text-muted font-bold text-sm hover:underline">GitHub <i class="fa-brands fa-github ml-1"></i></a>
                </div>
            </div>
        </article>
    `).join('');
    setupScrollReveal();
}

// 3. ANIMACIÓN DE SCROLL
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

function updateUI() {
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            el.textContent = i18n[currentLang][key];
        }
    });

    // Actualizar botones de idioma (desktop y mobile)
    const newBtnText = currentLang === 'es' ? 'EN' : 'ES';
    document.querySelectorAll('.nav__lang-btn').forEach(btn => {
        btn.textContent = newBtnText;
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    updateUI();
    renderProjects();
}

document.addEventListener('DOMContentLoaded', init);