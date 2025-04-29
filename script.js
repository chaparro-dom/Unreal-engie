document.addEventListener('DOMContentLoaded', function() {

    // Scroll suave para los enlaces
    document.querySelectorAll('.navbar__item a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#' || !targetId.startsWith('#')) return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
            navbar.style.background = 'linear-gradient(135deg, var(--navbar-gradient-start) 0%, var(--navbar-gradient-end) 100%)';
        } else {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            navbar.style.background = 'linear-gradient(135deg, var(--navbar-gradient-start) 0%, var(--navbar-gradient-end) 100%)';
        }

        // Añadir efecto de aparición a las secciones
        document.querySelectorAll('.section').forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if(sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    });
    
    // Funcionalidad del modo oscuro
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const themeIcon = document.getElementById('theme-icon');
        
        // Verificar si hay una preferencia guardada
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
        
        // Cambiar entre modo claro y oscuro
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Cambiar el icono
            if (themeIcon) {
                if (document.body.classList.contains('dark-mode')) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                    localStorage.setItem('theme', 'dark');
                } else {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                    localStorage.setItem('theme', 'light');
                }
            }
        });
    }

    // Manejar cambios de tamaño de pantalla para dispositivos móviles
    window.addEventListener('resize', function() {
        const navbarList = document.querySelector('.navbar__list');
        // Implementar menú móvil si es necesario en el futuro
    });

    // Añadir clase para animaciones iniciales
    document.querySelectorAll('.feature, .game').forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate');
        }, 300 * index);
    });

    // Inicializar todas las secciones como no visibles
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('section--hidden');
    });

    // Disparar el evento de scroll para activar las animaciones iniciales
    window.dispatchEvent(new Event('scroll'));
});