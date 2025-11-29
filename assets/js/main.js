console.log('This site was made by Natalia with <3.');

// Logo fade out on scroll
document.addEventListener("scroll", function () {
    const logo = document.querySelector(".logo");
    if (logo) {
        if (window.scrollY > 100) {
            logo.style.opacity = "0";
            logo.style.transition = "opacity 2s ease";
        } else {
            logo.style.opacity = "1";
        }
    }
});
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('DOM cargado');

//     const hamburgerButton = document.getElementById('hamburger-button');
//     const hamburgerMenu = document.getElementById('hamburger-menu');

//     if (hamburgerButton && hamburgerMenu) {
//         console.log('Botón y menú encontrados');

//         // hamburgerButton.addEventListener('click', function (event) {
//         //     // event.stopPropagation(); // Evita que el clic se propague al documento
//         //     // Alterna la visibilidad del menú usando display
//         //     const isHidden = hamburgerMenu.style.display === 'none' || hamburgerMenu.style.display === '';
//         //     hamburgerMenu.style.display = isHidden ? 'block' : 'none';
//         //     const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
//         //     hamburgerButton.setAttribute('aria-expanded', !isExpanded);
//         //     console.log('isHidden', isHidden);
//         //     console.log('Menú alternado', isHidden ? 'visible' : 'oculto');
//         // });

//         // document.addEventListener('click', function (event) {
//         //     if (!hamburgerButton.contains(event.target) && !hamburgerMenu.contains(event.target)) {
//         //         hamburgerMenu.style.display = 'none';
//         //         hamburgerButton.setAttribute('aria-expanded', 'false');
//         //         console.log('Menú cerrado');
//         //     }
//         // });
//     } else {
//         console.error('No se encontraron el botón o el menú', {
//             button: hamburgerButton,
//             menu: hamburgerMenu
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.getElementById('lightbox-close');
    const prevButton = document.getElementById('lightbox-prev');
    const nextButton = document.getElementById('lightbox-next');
    const images = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    // Abrir el lightbox al hacer clic en una imagen
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentIndex = index;
            showImage();
            lightbox.classList.remove('hidden');
        });
    });

    // Cerrar el lightbox al hacer clic en el botón de cierre
    closeButton?.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    // Mostrar la imagen actual
    function showImage() {
        lightboxImage.src = images[currentIndex].src;
    }

    // Navegar a la imagen anterior
    prevButton?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    });

    // Navegar a la imagen siguiente
    nextButton?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const images = carousel?.children;
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images?.length;
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Cambiar imagen cada 5 segundos
    setInterval(showNextImage, 5000);
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const images = carousel?.children;
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentIndex = 0;

    function showImage(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images?.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images?.length) % images?.length;
        showImage(currentIndex);
    }

    // Evento para botón "Siguiente"
    nextButton?.addEventListener('click', showNextImage);

    // Evento para botón "Anterior"
    prevButton?.addEventListener('click', showPrevImage);

    // Cambiar imagen automáticamente cada 5 segundos
    setInterval(showNextImage, 5000);
});