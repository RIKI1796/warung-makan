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
  daftar_menu.style.display = "none";
  favorit.classList.add("none");
  // footer_menu.style.bottom = "100px";
  sigma.classList.add("none");
  search_icon.classList.add("footer-fn");
  home_icon.classList.remove("footer-fn");
  user_icon.classList.remove("footer-fn");
});

home_icon.addEventListener("click", () => {
  search_menu.classList.add("none");
  home.style.display = "inline";
  profil_menu.classList.add("none");
  daftar_menu.style.display = "inline";
  favorit.classList.remove("none");
  menu.style.display = "flex";
  list.style.display = "flex";
  list2.style.display = "flex";
  home_icon.classList.add("footer-fn");
  search_icon.classList.remove("footer-fn");
  user_icon.classList.remove("footer-fn");
  daftar_menu.classList.remove("showdesk");
});

user_icon.addEventListener("click", () => {
  search_menu.classList.add("none");
  home.style.display = "none";
  profil_menu.classList.remove("none")
  daftar_menu.style.display = "none";
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
  const width = window.innerWidth;

  if (width >= 1360) {
    const filter = search.value.toLowerCase()
    const inputValue = search.value.trim().toLowerCase();
    Array.from(list).forEach(function (item) {
      const text = item.textContent.toLowerCase();

      if (text.includes(filter)) {
        item.classList.add("show");
        menu.style.display = "block";
        item.style.display = "block";
        item.classList.add("showdesk");
        item.style.width = "300px";
      } else {
        item.classList.remove("show");
        menu.style.dsisplay = "none";
        item.style.display = "none";
        item.classList.remove("showdesk");
      }
       if (inputValue === "") {
        daftar_menu.style.display = "none"
        menu.style.display = "none";
        item.style.display = "none";
        item.classList.remove("show");
      }
    });
  }
});

search.addEventListener("input", () => {
  const inputValue = search.value.trim().toLowerCase();
  const text = ["ad", "add", "add t", "add to", "add to c", "add to ca", "add to car", "add to cart", "id", "idr", "idr.", "idr. "];
    
  if (inputValue === "sigma") {
    daftar_menu.style.display = "none"; 
    menu.style.display = "none";
    sigma.classList.remove("none");
    sigma.classList.add("sigma");
  } else if (text.includes(inputValue)) {
    daftar_menu.style.display = "none";
    menu.style.display = "none";
    sigma.classList.add("none");
  } else {
    daftar_menu.style.display = "inline";
    menu.style.display = "flex";
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
