// 1. DATA: Centralizada
const skills = ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "Responsive Design"];

const services = [
    {
        icon: "fa-solid fa-rocket",
        title_es: "Landing Pages",
        title_en: "Landing Pages",
        desc_es: "Páginas de presentación rápidas y optimizadas para convertir visitas en clientes.",
        desc_en: "Fast, optimized presentation pages designed to convert visitors into clients."
    },
    {
        icon: "fa-solid fa-cart-shopping",
        title_es: "E-commerce",
        title_en: "E-commerce",
        desc_es: "Tiendas online con carrito, pagos y panel de administración a medida.",
        desc_en: "Online stores with cart, payments and a custom admin panel."
    },
    {
        icon: "fa-solid fa-gears",
        title_es: "Sistemas a Medida",
        title_en: "Custom Systems",
        desc_es: "CRUDs, paneles internos y automatizaciones adaptadas a tu negocio.",
        desc_en: "CRUDs, internal dashboards and automations tailored to your business."
    },
    {
        icon: "fa-solid fa-arrows-rotate",
        title_es: "Mantenimiento",
        title_en: "Maintenance",
        desc_es: "Soporte, actualizaciones y hosting para que tu web nunca se detenga.",
        desc_en: "Support, updates and hosting so your site never stops running."
    }
];

const projects = [
     {
        id: 1,
        title_es: "FIdEO",
        title_en: "FIdEO",
        desc_es: "Página de una feria online, proyecto personal, con venta al público y panel de administración.",
        desc_en: "Online fair page, personal project, with public sales and admin panel.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Node.js", "Express", "MongoDB", "CRUD"],
        img: "images/fideo.png",
        liveDemo: "https://www.fideobahia.com.ar/",
        github: "https://www.fideobahia.com.ar/"
    },
    {
        id: 2,
        title_es: "Landing Page Cafe Simple ",
        title_en: "Simple Cafe Landing Page",
        desc_es: "Página presentación para una Cafeteria. Con formulario de contacto y mapa de ubicación.",
        desc_en: "Landing page for a coffee shop. With contact form and location map.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        img: "images/cafe1.png",
        liveDemo: "https://landingcoffejay.netlify.app/",
        github: "https://github.com/jayjayheredia/landingcafe"
    },
    {
        id: 3,
        title_es: "Landing Page Cafe Simple con más funcionalidades",
        title_en: "Simple Cafe Landing Page with more features",
        desc_es: "Página presentación para una Cafeteria. Con formulario de contacto y mapa de ubicación.",
        desc_en: "Landing page for a coffee shop. With contact form and location map.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        img: "images/cafe2.png",
        liveDemo: "https://landingcoffejjh.netlify.app/",
        github: "https://github.com/jayjayheredia/landingcafe2"
    },
    {
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        nav_about: "About", nav_services: "Services", nav_projects: "Projects", nav_contact: "Contact",
        hero_subtitle: "FullStack Web Developer",
        hero__desc: "I create modern, functional web solutions that help businesses thrive online.",
        hero_btn: "View Work", hero_btn2: "Let's Talk About Your Project",
        about_title: "About Me", profile_title: "My Profile",
        about_p1: "I build modern web solutions combining a solid backend with intuitive interfaces.",
        skills_title: "Skills", services_title: "How Can I Help You?", projects_title: "My Projects",
        contact_title: "Have a project in mind?",
        contact_desc: "Tell me what you need and I'll reply with a clear proposal, no back-and-forth.",
        contact_whatsapp: "Message me on WhatsApp", contact_email: "Send an Email",
        copy: "All Rights Reserved", more_p: "Specialist in delivering custom, functional projects that meet your goals"
    },
    es: {
        nav_about: "Sobre Mí", nav_services: "Servicios", nav_projects: "Proyectos", nav_contact: "Contacto",
        hero_subtitle: "Desarrollador Web FullStack",
        hero__desc: "Creo soluciones web modernas y funcionales que ayudan a los negocios a prosperar en línea.",
        hero_btn: "Ver Trabajo", hero_btn2: "Hablemos de tu Proyecto",
        about_title: "Sobre Mí", profile_title: "Mi Perfil",
        about_p1: "Soy un desarrollador apasionado por crear soluciones que combinan un backend sólido con interfaces modernas.",
        skills_title: "Habilidades", services_title: "¿En qué puedo ayudarte?", projects_title: "Mis Proyectos",
        contact_title: "¿Tenés un proyecto en mente?",
        contact_desc: "Contame qué necesitás y te respondo con una propuesta clara, sin vueltas.",
        contact_whatsapp: "Escribime por WhatsApp", contact_email: "Enviar un Email",
        copy: "Todos los derechos reservados", more_p: "Especialista en cumplir tus objetivos con proyectos personalizados y funcionales"
    }
};

// Idioma inicial: recordado en el navegador, o español por defecto
let currentLang = localStorage.getItem('lang') || 'es';

// 2. INICIALIZACIÓN
function init() {
    renderSkills();
    renderServices();
    renderProjects();
    setupTheme();
    setupMobileMenu();
    setupScrollReveal();
    updateUI();
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skills.map(s => `<span class="tag">${s}</span>`).join('');
}

function renderServices() {
    const container = document.getElementById('services-grid');
    container.innerHTML = services.map(s => `
        <div class="service-card reveal">
            <div class="service-card__icon"><i class="${s.icon}"></i></div>
            <h3>${currentLang === 'en' ? s.title_en : s.title_es}</h3>
            <p>${currentLang === 'en' ? s.desc_en : s.desc_es}</p>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = projects.map(p => {
        const title = currentLang === 'en' ? p.title_en : p.title_es;
        const desc = currentLang === 'en' ? p.desc_en : p.desc_es;
        return `
        <article class="project-card reveal">
            <img src="${p.img}" class="project-card__img" alt="Captura del proyecto ${title}" loading="lazy">
            <div class="project-card__content">
                <div class="mb-4">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <h3 class="font-bold text-xl mb-2">${title}</h3>
                <p class="text-muted text-sm mb-4">${desc}</p>
                <div class="flex gap-4">
                    <a href="${p.liveDemo}" target="_blank" rel="noopener" class="text-accent font-bold text-sm hover:underline">Live Demo <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i></a>
                    <a href="${p.github}" target="_blank" rel="noopener" class="text-muted font-bold text-sm hover:underline">GitHub <i class="fa-brands fa-github ml-1"></i></a>
                </div>
            </div>
        </article>
    `;
    }).join('');
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

// 4. MODO OSCURO (con persistencia)
function setupTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    applyTheme(isDark);

    const toggle = () => {
        const nowDark = !document.body.classList.contains('dark-theme');
        applyTheme(nowDark);
        localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    };

    document.getElementById('theme-btn').addEventListener('click', toggle);
    document.getElementById('theme-btn-mobile').addEventListener('click', toggle);
}

function applyTheme(isDark) {
    document.body.classList.toggle('dark-theme', isDark);
    const icon = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    document.getElementById('theme-btn').innerHTML = icon;
    document.getElementById('theme-btn-mobile').innerHTML = icon;
}

// 5. MENÚ MOBILE
function setupMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', isOpen);
        menuBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    // Cerrar el menú al tocar un link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', false);
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
}

// 6. IDIOMA (con persistencia)
function updateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            el.textContent = i18n[currentLang][key];
        }
    });

    const newBtnText = currentLang === 'es' ? 'EN' : 'ES';
    document.querySelectorAll('.nav__lang-btn').forEach(btn => {
        btn.textContent = newBtnText;
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('lang', currentLang);
    updateUI();
    renderServices();
    renderProjects();
}

document.addEventListener('DOMContentLoaded', init);