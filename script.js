document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para los enlaces
    const handleSmoothScroll = (e, targetId) => {
        if(targetId === '#' || !targetId.startsWith('#')) return;
        
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    document.querySelectorAll('.navbar__item a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            handleSmoothScroll(e, this.getAttribute('href'));
        });
    });

    // Efecto al hacer scroll
    let lastScrollTop = 0;
    const handleScrollEffects = () => {
        const navbar = document.querySelector('.navbar');
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Cambiar la apariencia del navbar al hacer scroll
        if (currentScrollTop > 50) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
        
        // Ocultar/mostrar navbar al hacer scroll (solo en dispositivos móviles)
        if (window.innerWidth <= 768) {
            if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
                // Scroll hacia abajo - ocultar navbar
                navbar.classList.add('navbar--hidden');
            } else {
                // Scroll hacia arriba - mostrar navbar
                navbar.classList.remove('navbar--hidden');
            }
        }
        
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para Safari

        // Añadir efecto de aparición a las secciones
        document.querySelectorAll('.section').forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if(sectionTop < window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScrollEffects);

    // Funcionalidad del modo oscuro
    const initThemeToggle = () => {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');

        if (!themeToggle) return;

        // Verificar si hay una preferencia guardada
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeIcon?.classList.replace('fa-moon', 'fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            if (themeIcon) {
                themeIcon.classList.replace(
                    isDarkMode ? 'fa-moon' : 'fa-sun',
                    isDarkMode ? 'fa-sun' : 'fa-moon'
                );
            }
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    };

    initThemeToggle();

    // Manejar el menú hamburguesa para dispositivos móviles
    const initMobileMenu = () => {
        const navbarToggle = document.querySelector('.navbar__toggle');
        const navbarList = document.querySelector('.navbar__list');

        if (!navbarToggle || !navbarList) return;

        const toggleMenu = () => {
            navbarToggle.classList.toggle('active');
            navbarList.classList.toggle('active');
        };

        navbarToggle.addEventListener('click', toggleMenu);

        // Cerrar el menú al hacer clic en un enlace
        document.querySelectorAll('.navbar__item a').forEach(link => {
            link.addEventListener('click', () => {
                if (navbarToggle.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // Manejar cambios de tamaño de pantalla
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navbarList.classList.contains('active')) {
                toggleMenu();
            }
        });
    };

    initMobileMenu();

    // Initialize animations
    const initAnimations = () => {
        document.querySelectorAll('.feature, .game').forEach((element, index) => {
            setTimeout(() => element.classList.add('animate'), 300 * index);
        });

        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('section--hidden');
        });

        window.dispatchEvent(new Event('scroll'));
    };

    initAnimations();
});