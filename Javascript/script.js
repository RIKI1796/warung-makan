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
const footer_menu = document.getElementById("footer-menu");
const list2 = document.getElementById("list2");
const menu = document.getElementById("menu");

// script search
search_icon.addEventListener("click", () => {
  search_menu.classList.remove("none");
  home.style.display = "none";
  profil_menu.classList.add("none");
  daftar_menu.classList.add("none");
  favorit.classList.add("none");
  // footer_menu.style.bottom = "100px";
  sigma.classList.add("none");
  search_icon.classList.add("footer-fn");
  home_icon.classList.remove("footer-fn");
  user_icon.classList.remove("footer-fn");
});

home_icon.addEventListener("click", () => {
  search_menu.classList.add("none");
  home.style.display = "inherit";
  profil_menu.classList.add("none");
  daftar_menu.classList.remove("none");
  favorit.classList.remove("none");
  menu.style.display = "flex";
  home_icon.classList.add("footer-fn");
  search_icon.classList.remove("footer-fn");
  user_icon.classList.remove("footer-fn");
  daftar_menu.classList.remove("showdesk");
  list2.classList.remove("translate");
});

user_icon.addEventListener("click", () => {
  search_menu.classList.add("none");
  home.style.display = "none";
  profil_menu.classList.remove("none");
  daftar_menu.classList.add("none");
  favorit.classList.add("none");
  // footer_menu.style.bottom = "0";
  user_icon.classList.add("footer-fn");
  home_icon.classList.remove("footer-fn");
  search_icon.classList.remove("footer-fn");
});

// script search
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

search.addEventListener("input", function () {
  const inputValue = search.value.trim().toLowerCase();
  var width = window.innerWidth;
  if (width >= 1336) {
    const filter = search.value.toLowerCase();
    Array.from(list).forEach(function (item) {
      const text = item.textContent.toLowerCase();
      if (text.includes(filter)) {
        item.classList.add("show");
        daftar_menu.classList.add("showdesk");
        daftar_menu.classList.remove("none");
        item.classList.remove("none");
        item.style.width = "300px"
        list2.classList.add("translate");
      } else if (inputValue === "") {
        daftar_menu.classList.add("none");
        daftar_menu.classList.remove("showdesk");
        list2.classList.remove("translate");
        menu.style.display = "flex";
        item.classList.remove("show");
      }
    });
  }
});

search.addEventListener("input", () => {
  const inputValue = search.value.trim().toLowerCase();
  const text = ["ad", "add", "add t", "add to", "add to c", "add to ca", "add to car", "add to cart", "id", "idr", "idr.", "idr. "];
    
  if (inputValue === "sigma") {
    daftar_menu.classList.add("none");
    sigma.classList.remove("none");
    sigma.classList.add("sigma");
  } else if (text.includes(inputValue)) {
    daftar_menu.classList.add("none");
    sigma.classList.add("none");
  } else {
    daftar_menu.classList.remove("none");
    sigma.classList.add("none");
  }
});

  // var prevScrollpos = window.pageYOffset;

  // window.onscroll = function() {
  //   var width = window.innerWidth;
  //   if (width >= 1440) {
  //     var currentScrollPos = window.pageYOffset;

  //     if (prevScrollpos < currentScrollPos) {
  //       footer_menu.style.bottom = "0";
  //     } else {
  //       footer_menu.style.bottom = "-100px";
  //     }

  //     prevScrollpos = currentScrollPos;
  //   }
  // };
