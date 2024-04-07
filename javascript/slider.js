let slideIndex = 1;
let autoSlideInterval; // Variable to hold the interval for automatic slideshow

// Function to show slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Function to move to next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to move to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to start automatic slideshow
function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        plusSlides(1); // Move to the next slide
    }, 2000); // Change slides every 2000 milliseconds (2 seconds)
    showSlides(slideIndex); // Show the initial slide (img1.jpg)
}

// Function to stop automatic slideshow
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Start automatic slideshow initially
startAutoSlide();

// Pause automatic slideshow when mouse hovers over the slideshow container
document.querySelector('.slideshow-container').addEventListener('mouseenter', stopAutoSlide);

// Resume automatic slideshow when mouse leaves the slideshow container
document.querySelector('.slideshow-container').addEventListener('mouseleave', startAutoSlide);
