// Banner slider functionality
const slides = [
    {
        image: "/background1.png",
        title: "YOUR PARTNER AT STRATEGIC CROSSROADS",
        subtitle: "We intend to be a preferred business partner by being an effective and progressive solution provider. Our mission is to satisfy our customers."
    },
    {
        image: "/background2.jpg",
        title: "YOUR PARTNER AT STRATEGIC CROSSROADS",
        subtitle: "We intend to be a preferred business partner by being an effective and progressive solution provider. Our mission is to satisfy our customers."
    },
    {
        image: "/background3.jpg",
        title: "YOUR PARTNER AT STRATEGIC CROSSROADS",
        subtitle: "We intend to be a preferred business partner by being an effective and progressive solution provider. Our mission is to satisfy our customers."
    }
];

let currentSlide = 0;
const slidesContainer = document.querySelector('.slides-container');

// Initialize slides
function initializeSlides() {
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.style.position = 'absolute';
        slideElement.style.inset = '0';
        slideElement.style.opacity = index === 0 ? '1' : '0';
        slideElement.style.transition = 'opacity 0.5s ease-in-out';
        slideElement.style.backgroundImage = `url(${slide.image})`;
        slideElement.style.backgroundSize = 'cover';
        slideElement.style.backgroundPosition = 'center';
        slidesContainer.appendChild(slideElement);
    });
}

// Change slide
function changeSlide(direction) {
    const slides = slidesContainer.children;
    slides[currentSlide].style.opacity = '0';
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].style.opacity = '1';
}

// Auto-slide
function startAutoSlide() {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Navigation buttons
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeSlides();
    startAutoSlide();
});