// This script adds a modern fade-in effect to your product cards and about section as you scroll

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Stop observing once faded in
            }
        });
    }, observerOptions);

    // Select elements to animate
    const cards = document.querySelectorAll('.card');
    const aboutCard = document.querySelector('.about-card');

    // Set initial styles for animation
    const setInitialStyles = (element) => {
        if(element) {
            element.style.opacity = 0;
            element.style.transform = "translateY(30px)";
            element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            observer.observe(element);
        }
    };

    cards.forEach(setInitialStyles);
    setInitialStyles(aboutCard);
});
