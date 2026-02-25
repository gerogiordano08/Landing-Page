document.addEventListener("DOMContentLoaded", () => {
  const langChange = document.getElementById("lang_changer");
  let actualLang = "en";
  const dictionaryLanguages = {
    en: {
      main_title: "Gerónimo's Landing Page",
      language: "Spanish",
      first_text_header: "This is who I am",
      first_text:
        "Hi there! I’m <b>Gerónimo</b>, from <b>Mendoza, Argentina</b>. I’m a <b>Computer Science</b> student and <b>Backend Developer</b> focused on building robust and scalable architectures. My core stack includes <b>Python (Django)</b>, <b>SQL (PostgreSQL)</b>, and <b>Redis</b>, with hands-on experience in cloud deployments using <b>Oracle Cloud (OCI)</b> and <b>Docker</b>. I’m fluent in <b>English (C1)</b> and Spanish, and I’m passionate about solving complex problems through high-quality code.",
      portfolio_header: "Portfolio",
      portfolio_text:
        "Some of the projects of my portfolio. Feel free to check them by clicking on the images.",
      portfolio_item_1_description:
        "Full-stack financial dashboard designed for professional asset tracking. Built with Django and deployed on Oracle Cloud (OCI), it features real-time market data processing and a secure, containerized architecture.",
      portfolio_item_2_description:
        "Automated market monitoring at your fingertips. This Python automation tool tracks custom stock trendlines and delivers instant notifications via Telegram, ensuring you never miss a move without being glued to the screen.",
      portfolio_item_3_description:
        "A high-integrity game engine focused on software quality. Developed in Python and Pygame using modular design patterns, achieving 90% code coverage through rigorous automated testing.",
      phrase_text:
        "Some of the projects of my portfolio. Feel free to check them by clicking on the images or the titles.",
      cv_text: "You can take a look at my CV here",
      thank_you_text_mail: "You can reach me at: gerogiordano08@gmail.com",
      contact_text: "Contact Me: gerogiordano08@gmail.com",
      footer_text: "Made with love from Mendoza",
    },
    es: {
      main_title: "Gerónimo's Landing Page",
      language: "Inglés",
      first_text_header: "Quién soy",
      first_text:
        "¡Hola! Soy <b>Gerónimo</b>, de <b>Mendoza, Argentina</b>. Soy un estudiante de <b>Ingeniería en Informática</b> y desarrollador <b>Backend</b> enfocado en construir arquitecturas robustas, seguras y escalables. Mi stack principal incluye <b>Python (Django)</b>, <b>SQL (PostgreSQL)</b> y <b>Redis</b>, con experiencia práctica desplegando infraestructuras en la nube mediante <b>Oracle Cloud (OCI)</b> y <b>Docker</b>. Hablo fluido <b>inglés (C1)</b> y español, y me apasiona resolver problemas complejos a través de código de alta calidad.",
      portfolio_header: "Portafolio",
      portfolio_text:
        "Estos son algunos de los proyectos de mi portafolio. Clickeando las imágenes puedes acceder a sus respectivos repositorios.",
      portfolio_item_1_description:
        "Gestión financiera profesional en la nube. Un dashboard de alto rendimiento para seguir tus inversiones en tiempo real, construido con Django y desplegado de forma segura en Oracle Cloud (OCI).",
      portfolio_item_2_description:
        "Automatización de alertas bursátiles. Un script en Python que monitorea el mercado por vos y te avisa vía Telegram apenas una acción toca tu línea de tendencia. Eficiencia pura sin estar pegado a la pantalla.",
      portfolio_item_3_description:
        "Lógica y Calidad de Código. Un motor de juego modular desarrollado en Python y Pygame, con un enfoque extremo en la fiabilidad: 90% de cobertura de código testeado.",
      phrase_text:
        "Estos son algunos de los proyectos de mi portafolio. Clickeando las imágenes o los títulos puedes acceder a sus respectivos repositorios.",
      cv_text: "Puedes ver mi CV aquí:",
      thank_you_text_mail:
        "Puedes comunicarte conmigo escribiendo a gerogiordano08@gmail.com",
      contact_text: "Contáctate: gerogiordano08@gmail.com",
      footer_text: "Hecho en Mendoza",
    },
  };

  function changeLanguage() {
    actualLang = actualLang == "en" ? "es" : "en";
    const newLangTexts = dictionaryLanguages[actualLang];
    const translateElements = document.querySelectorAll("[data-key]");
    translateElements.forEach((element) => {
      const key = element.getAttribute("data-key");

      if (newLangTexts[key]) {
        element.innerHTML = newLangTexts[key];
      }
    });
  }
  langChange.addEventListener("click", changeLanguage);
});
