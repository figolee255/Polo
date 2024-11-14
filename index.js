// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const aboutSection = document.querySelector('.container'); // You can use a specific class for the section, like .about
    const aboutOffset = aboutSection.offsetTop; // Get the vertical offset of the section
    
    // Listen for scroll event
    window.addEventListener('scroll', function() {
        if (window.scrollY > aboutOffset) {
            // When scroll is past the 'About us' section, add class 'scrolled' to the navbar
            navbar.classList.add('scrolled');
        } else {
            // If scroll is above, remove the 'scrolled' class
            navbar.classList.remove('scrolled');
        }
    });
});
