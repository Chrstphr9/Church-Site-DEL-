document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("show");

      // Toggle between hamburger and close icon
      if (navLinks.classList.contains("show")) {
          menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // Show 'X'
      } else {
          menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Show hamburger
      }
  });
});
