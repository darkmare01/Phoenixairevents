document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.querySelector("header nav ul");

    // Function to toggle the display of the navigation menu
    function toggleNavMenu() {
        if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "block";
        }
    }

    // Event listener for the menu icon click
    menuIcon.addEventListener("click", toggleNavMenu);

    // Event listener for scroll events
    window.addEventListener("scroll", function() {
        // Check if the screen width is less than or equal to 780px (small screen)
        if (window.innerWidth <= 780) {
            // Hide the navigation menu when scrolling
            navMenu.style.display = "none";
        }
    });
});
