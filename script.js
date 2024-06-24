document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.querySelector("header nav ul");

    menuIcon.addEventListener("click", function() {
        if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "block";
        }
    });
});