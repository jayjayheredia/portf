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