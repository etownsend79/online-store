import "@fortawesome/fontawesome-free/js/all";


document.addEventListener("turbolinks:load", function () {
  const hamburger = document.querySelector("#hamburger");
  const navLink = document.getElementById('nav-links');

  hamburger.addEventListener("click", () => {
    navLink.classList.toggle("show");
  })
});

