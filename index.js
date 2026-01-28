<<<<<<< HEAD
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
=======
let idiomaActual = 'en'; // idioma actual, comienza en inglés

function cambiarIdioma() {
    if (idiomaActual === 'en') {
    // Cambiar a español
    document.getElementById('me').textContent = 'Sobre mí';
    document.getElementById('pr').textContent = 'Proyectos';
    document.getElementById('social').textContent = 'Contacto';
    document.getElementById('btnIdioma').textContent = 'English';
    document.getElementById('abou').textContent = 'Soy un Desarrollador Web Fullstack';
    document.getElementById('abti').textContent = 'Sobre mí';
    document.getElementById('abp').textContent = 'Aqui encontraras mas informacion sobre mi, que hago, y mis habilidades, mayormente en terminos de programacion y tecnologias';
    document.getElementById('wm').textContent = 'Quien soy?';
    document.getElementById('wmp').textContent = 'Soy desarrollador web fullstack. Me dedico a crear soluciones web modernas, funcionales y a medida, tanto del lado del frontend como del backend. Disfruto Transformar ideas en productos reales, ya sea desarrollando sitios dinamicos, aplicaciones web oherramientas internas para negocios. Trabajo de forma independiente, colaborando con emprendedores, pequeñas empresas y profesionales que necesitan presencia digital o automatización de procesos. También estoy abierto a formar parte de equipos en empresas que busquen sumar un perfil proactivo y resolutivo. Si tenés un proyecto en mente o buscás sumar a alguien con experiencia fullstack, me encantaría que conversemos.'
    document.getElementById('kn').textContent = 'Mis Conocimientos';
    document.getElementById('ph').textContent = 'Proyectos';
    document.getElementById('pp').textContent = 'Aqui encontraras algunos de mis proyectos personales y de mis clientes que contienen mis conocimientos';
    document.getElementById('pdh').textContent = 'Titulo del Proyecto';
    document.getElementById('pdp').textContent = 'Descripcion del proyecto blablablabalmbadñbnadlbnadbdnikbdaódab';
    document.getElementById('pdh2').textContent = 'Titulo del Proyecto';
    document.getElementById('pdp2').textContent = 'Descripcion del proyecto blablablabalmbadñbnadlbnadbdnikbdaódab';
    document.getElementById('pdh3').textContent = 'Titulo del Proyecto';
    document.getElementById('pdp3').textContent = 'Descripcion del proyecto blablablabalmbadñbnadlbnadbdnikbdaódab';
    document.getElementById('pdh4').textContent = 'Titulo del Proyecto';
    document.getElementById('pdp4').textContent = 'Descripcion del proyecto blablablabalmbadñbnadlbnadbdnikbdaódab';
    document.getElementById('fp').textContent = 'Desarrollador Web enfocado en el Frontend, construyendo la interfaz de sitios web y aplicaciones web que contribuyen al éxito del producto en general';
    document.getElementById('copyp').textContent = 'Todos Los Derechos Reservados';
    idiomaActual = 'es';
    } else {
      // Cambiar a inglés
    document.getElementById('me').textContent = 'About Me';
    document.getElementById('pr').textContent = 'Projects';
    document.getElementById('social').textContent = 'Contact';
    document.getElementById('btnIdioma').textContent = 'Español';
    document.getElementById('abou').textContent = 'I am a FullStack Web Developer';
    document.getElementById('abti').textContent = 'About Me';
    document.getElementById('abp').textContent = 'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology';
    document.getElementById('wm').textContent = 'Who Am I?';
    document.getElementById('wmp').textContent = "I build modern, functional, and custom web solutions, working on both the frontend and backend. I enjoy turning ideas into real products—whether it's dynamic websites, web applications, or internal tools for businesses. I work independently, collaborating with entrepreneurs, small businesses, and professionals who need a digital presence or process automation. I'm also open to joining teams in companies looking for a proactive and solution-oriented developer. If you have a project in mind or you're looking for someone with fullstack experience, I'd love to connect."; 
    document.getElementById('kn').textContent = 'My Knowledge';
    document.getElementById('kn').textContent = 'Mis Conocimientos';
    document.getElementById('ph').textContent = 'Projects';
    document.getElementById('pp').textContent = 'Here you will find some of the personal and clients projects that I created with each project containing its own case study';
    document.getElementById('pdh').textContent = 'Title project';
    document.getElementById('pdp').textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, tenetur dicta! Repudiandae soluta illo, asperiores animi illum laudantium debitis minus voluptatum voluptate eos cupiditate labore. Blanditiis repellendus nemo aliquam hic';
    document.getElementById('pdh2').textContent = 'Title project';
    document.getElementById('pdp2').textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, tenetur dicta! Repudiandae soluta illo, asperiores animi illum laudantium debitis minus voluptatum voluptate eos cupiditate labore. Blanditiis repellendus nemo aliquam hic';
    document.getElementById('pdh3').textContent = 'Title project';
    document.getElementById('pdp3').textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, tenetur dicta! Repudiandae soluta illo, asperiores animi illum laudantium debitis minus voluptatum voluptate eos cupiditate labore. Blanditiis repellendus nemo aliquam hic';
    document.getElementById('pdh4').textContent = 'Title project';
    document.getElementById('pdp4').textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, tenetur dicta! Repudiandae soluta illo, asperiores animi illum laudantium debitis minus voluptatum voluptate eos cupiditate labore. Blanditiis repellendus nemo aliquam hic';
    document.getElementById('fp').textContent = 'A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product';
    document.getElementById('copyp').textContent = 'All Rights Reserved';
    idiomaActual = 'en';
}
}
>>>>>>> 16b238fb55196cfbfc3f64088afd7522c253b15a
