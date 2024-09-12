// Toggle Navigation Menu on Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let slideIndex = 0;
let autoSlideInterval = 6000; // 6 seconds

showSlides(); // Initialize slideshow

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++; // Move to the next slide
    if (slideIndex > slides.length) {
        slideIndex = 1; // Loop back to the first slide
    }

    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and highlight the dot
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    // Set a timer to automatically switch slides every 6 seconds
    setTimeout(showSlides, autoSlideInterval);
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n - 1; // Adjust slideIndex to account for manual change
    showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n - 1; // Adjust slideIndex to match selected dot
    showSlides();
}



// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
