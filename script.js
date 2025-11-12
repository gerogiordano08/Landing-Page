document.addEventListener('DOMContentLoaded', () => {
    const langChange = document.getElementById('lang_changer');
    let actualLang = 'en'
    const dictionaryLanguages = {
        'en':{'main_title':'Gerónimo\'s Landing Page',
            'language':'Spanish',
            'first_text_header':'This is who I am',
            'first_text':'Hello there! I’m <b>Gerónimo</b>, from <b>Mendoza, Argentina</b>. I’m a Computer Science student who’s eager to gain some freelance experience. I’m fluent in Spanish and English, and I’m a quick learner. I can help you with <b>web technologies</b>, <b>Python</b>, <b>Django</b>, and more. Let me know if you need any help!',
            'portfolio_header':'Portfolio',
            'portfolio_text':'Some of the projects of my portfolio. Feel free to check them by clicking on the images.',
            'portfolio_item_1_description':'A Django webapp to record your trades.',
            'portfolio_item_2_description':'Stock Signal is a python app/script that lets you load a trendline and notifies you via telegram when a certain chosen stock reaches that trendline.',
            'portfolio_item_3_description':'The backgammon game, designed and developed with Python by me as a college project.',
            'phrase_text':'I’m a learning developer who’s eager to learn and grow. I’d be thrilled if you could consider me for your next project.',
            'thank_you_text':'Thank you for taking the time to check out my landing page!',
            'thank_you_text_mail':'You can reach me at: gerogiordano08@gmail.com',
            'contact_text':'Contact Me: gerogiordano08@gmail.com',
            'footer_text':'Made with love from Mendoza'
        },
        'es':{'main_title':'Gerónimo\'s Landing Page',
            'language':'Inglés',
            'first_text_header':'Quién soy',
            'first_text':'¡Hola! Soy <b>Gerónimo</b>, de <b>Mendoza, Argentina</b>. Soy un estudiante de ingeniería en informática buscando experiencia. Soy hablante de español nativo y certificado hablante de ingles a nivel profesional. ¡Te puedo ser útil para los proyectos que incluyan <b>desarrollo web</b>, <b>Python</b>, <b>Django</b> y mucho más! Comunicate conmigo si piensas que podemos trabajar juntos!',
            'portfolio_header':'Portafolio',
            'portfolio_text':'Estos son algunos de los proyectos de mi portafolio. Clickeando las imágenes puedes acceder a sus respectivos repositorios.',
            'portfolio_item_1_description':'Una aplicación web Django para guardar tus trades.',
            'portfolio_item_2_description':'Stock Signal es un script de Python que te permite cargar una línea de tendencia y te notifica por Telegram cuando un ticker llega a ella.',
            'portfolio_item_3_description':'El juego de backgammon, desarrollado con Python por mí como proyecto de la universidad.',
            'phrase_text':'Soy un desarrollador comenzando con su carrera, me encantaría que me consideres para tu próximo proyecto.',
            'thank_you_text':'¡Gracias por tomarte el tiempo y ver mi página!',
            'thank_you_text_mail':'Puedes comunicarte conmigo escribiendo a gerogiordano08@gmail.com',
            'contact_text':'Contáctate: gerogiordano08@gmail.com',
            'footer_text':'Hecho en Mendoza'
        },
    }
    
    function changeLanguage() {
        actualLang = (actualLang == 'en') ? 'es' : 'en'
        const newLangTexts = dictionaryLanguages[actualLang]
        const translateElements = document.querySelectorAll('[data-key]')
        translateElements.forEach(element =>{
            const key = element.getAttribute('data-key');

            if (newLangTexts[key]){
                element.innerHTML = newLangTexts[key]
            }
        }
        )
    }
    langChange.addEventListener('click', changeLanguage);
}
)