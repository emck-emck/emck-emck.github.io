document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.getElementById("header");

  fetch("https://emck-emck.github.io/header.html")
    .then(response => response.text())
    .then(data => {
      headerPlaceholder.innerHTML = data;

      // Reattach mobile menu functionality after loading
      const menu = document.querySelector("#mobile-menu");
      const navLinks = document.querySelector(".nav-links");

      menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        navLinks.classList.toggle("active");
      });
    })
    .catch(err => console.error("Header failed to load:", err));
});
