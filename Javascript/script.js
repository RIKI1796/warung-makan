// footer menu

const search_menu = document.getElementById("search-menu");
const home = document.getElementById("home");
const home_icon = document.getElementById("home-icon");
const search_icon = document.getElementById("search-icon");
const user_icon = document.getElementById("user-icon");
const profil_menu = document.getElementById("profil-menu");
const daftar_menu = document.getElementById("daftar-menu");
const favorit = document.getElementById("favorit");
const search = document.getElementById("search");
const list = document.querySelectorAll(".menu div");
const sigma = document.getElementById("sigma");

search_icon.addEventListener("click", () => {
  search_menu.style.display = "grid";
  home.style.display = "none";
  profil_menu.style.display = "none";
  daftar_menu.classList.add("none");
  favorit.classList.add("none");
  sigma.classList.add("none");
  search_icon.classList.add("footer-fn");
  home_icon.classList.remove("footer-fn");
  user_icon.classList.remove("footer-fn");
});

home_icon.addEventListener("click", () => {
  search_menu.style.display = "none";
  home.style.display = "grid";
  profil_menu.style.display = "none";
  daftar_menu.style.display = "inherit";
  favorit.style.display = "inherit";
  home_icon.classList.add("footer-fn");
  search_icon.classList.remove("footer-fn");
  user_icon.classList.remove("footer-fn");
});

user_icon.addEventListener("click", () => {
  search_menu.style.display = "none";
  home.style.display = "none";
  profil_menu.style.display = "grid";
  daftar_menu.style.display = "none";
  favorit.style.display = "none";
  user_icon.classList.add("footer-fn");
  home_icon.classList.remove("footer-fn");
  search_icon.classList.remove("footer-fn");
});

search.addEventListener("input", function () {
  var width = window.innerWidth;
  if (width <= 820) {
    const filter = search.value.toLowerCase();
    Array.from(list).forEach(function (item) {
      const text = item.textContent.toLowerCase();
      if (text.includes(filter)) {
        item.classList.add("show");
        daftar_menu.classList.remove("none");
        item.classList.remove("none");
        item.style.width = "135px"
      } else {
        item.classList.add("none");
        item.classList.remove("show");
      }
    });
  }
});

search.addEventListener("input", () => {
  const inputValue = search.value.trim().toLowerCase();
  if (inputValue === "") {
    daftar_menu.classList.add("none");
  } else if (inputValue === "sigma") {
    daftar_menu.classList.add("none");
    sigma.classList.remove("none");
    sigma.classList.add("sigma");
  } else {
    daftar_menu.classList.remove("none");
    sigma.classList.add("none");
  }
});