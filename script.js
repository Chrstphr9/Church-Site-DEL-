document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const menuIconElement = menuIcon.querySelector("i"); // Get the icon inside the button

    menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("show");
      
      // Toggle between hamburger and close icon
      if (navLinks.classList.contains("show")) {
        menuIconElement.classList.replace("fa-bars", "fa-times"); // Change to "X"
      } else {
        menuIconElement.classList.replace("fa-times", "fa-bars"); // Change back to "☰"
      }
    });
  });