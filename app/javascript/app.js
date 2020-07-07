import "@fortawesome/fontawesome-free/js/all";


document.addEventListener("turbolinks:load", function () {
  const hamburger = document.querySelector("#hamburger");
  const navLink = document.getElementById('nav-links');
  const category = document.getElementById('category');
  const genre = document.getElementById('genre');

  hamburger.addEventListener("click", () => {
    navLink.classList.toggle("show");
  })

  genre.addEventListener("click", (e) => {
    e.preventDefault();

    category.classList.toggle("show-ul");
  })
});

