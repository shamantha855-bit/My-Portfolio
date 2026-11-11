// Welcome message
console.log("Welcome to Shamantha's Portfolio!");

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Show a message when the page loads
window.addEventListener("load", function() {
    console.log("Portfolio loaded successfully!");
});