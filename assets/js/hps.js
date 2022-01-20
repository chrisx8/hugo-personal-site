// hamburger nav menu on mobile
var burger = document.querySelector(".burger");
var target = document.querySelector("#"+burger.dataset.target);
burger.addEventListener("click", function() {
    burger.classList.toggle("is-active"), target.classList.toggle("is-active");
});

// toggle color of current page button based on browser color scheme
var currentPagerBtn = document.getElementById("current-pager-btn");
if (currentPagerBtn != null && darkMode) {
    currentPagerBtn.classList.remove('is-dark');
    currentPagerBtn.classList.add('is-light');
}
