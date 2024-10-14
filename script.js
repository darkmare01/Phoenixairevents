document.addEventListener("DOMContentLoaded", function() {
    // Variables for menu functionality
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.querySelector("header nav ul");

    // Function to toggle the display of the navigation menu
    function toggleNavMenu() {
        navMenu.classList.toggle("nav-open");
    }

    // Event listener for the menu icon click
    menuIcon.addEventListener("click", toggleNavMenu);

    // Event listener for scroll events
    window.addEventListener("scroll", function() {
        // Hide the navigation menu when scrolling on small screens
        if (window.innerWidth <= 780) {
            navMenu.classList.remove("nav-open");
        }
    });

    // Variables for modal functionality
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const close = document.getElementById("close");

    // Function to open modal and display clicked image
    function openModal(event) {
        modal.style.display = "block";
        modalImg.src = event.target.src;
        setTimeout(() => {
            modal.style.opacity = 1; // Delay to ensure transition starts correctly
        }, 10);
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = "none";
        setTimeout(() => {
            modal.style.opacity = 0; // Delay to ensure transition starts correctly
        }, 10);
    }

    // Add click event listener to existing gallery items
    document.querySelectorAll("#gallery .gallery-grid img").forEach(item => {
        item.addEventListener("click", openModal);
    });

    // Close modal when clicking outside modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal when close button is clicked
    close.addEventListener("click", closeModal);
    document.getElementById('load-more').addEventListener('click', function() {
        const hiddenImages = document.querySelectorAll('.hidden');
        hiddenImages.forEach(image => image.classList.remove('hidden'));
    
        // Hide the button since all images are now visible
        document.getElementById('load-more').style.display = 'none';    
    });
    
});
