const images = [
    { src: 'images/buffet1.jpg' },
    { src: 'images/buffet2.jpg', },
    { src: 'images/buffet3.jpg', },
    { src: 'images/buffet4.jpg', },
    { src: 'images/buffet5.jpg', },
    { src: 'images/buffet6.jpg', },
    // Add more image objects as needed
];

function createGallery() {
    const gallery = document.querySelector('.gallery');
    images.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.onclick = () => { openLightbox(); currentSlide(index + 1); };

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);
    });
}

function createLightboxSlides() {
    const lightboxContent = document.querySelector('.lightbox-content');
    images.forEach((image) => {
        const lightboxSlide = document.createElement('div');
        lightboxSlide.classList.add('lightbox-slide');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        lightboxSlide.appendChild(img);
        lightboxContent.insertBefore(lightboxSlide, document.querySelector('.prev'));
    });
}

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

let slideIndex = 1;

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('lightbox-slide');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// Initialize the gallery and lightbox
createGallery();
createLightboxSlides();
showSlides(slideIndex);
