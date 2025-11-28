console.log('This site was made by Nata with <3.');

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

document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.getElementById('lightbox-close');
    const prevButton = document.getElementById('lightbox-prev');
    const nextButton = document.getElementById('lightbox-next');
    const images = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentIndex = index;
            showImage();
            lightbox.classList.remove('hidden');
        });
    });

    closeButton?.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    function showImage() {
        lightboxImage.src = images[currentIndex].src;
    }

    prevButton?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    });

    nextButton?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    });
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

    nextButton?.addEventListener('click', showNextImage);

    prevButton?.addEventListener('click', showPrevImage);

    setInterval(showNextImage, 5000);
});