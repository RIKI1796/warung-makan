const search_menu = document.getElementById("search-menu");
const searchMenu = document.querySelector("#search-menu .menu");
const navbar = document.getElementById("navbar");
const home = document.getElementById("home");
const home_icon = document.getElementById("home-icon");
const search_icon = document.getElementById("search-icon");
const user_icon = document.getElementById("user-icon");
const profil_menu = document.getElementById("profil-menu");
const daftar_menu = document.getElementById("daftar-menu");
const favorit = document.getElementById("favorit");
const search = document.getElementById("search");
const list = document.querySelectorAll(".daftar-menu .mnuuu");
const sigma = document.getElementById("sigma");
const footer_menu = document.getElementById("footer-menu");
const list2 = document.getElementById("list2");
const menu = document.querySelector("#daftar-menu #menu");
const button = document.getElementById("darkLight");
const darkMode = document.getElementById("darkMode");
const textElement = document.getElementById("titik");

// script search
search_icon.addEventListener("click", function() {
  search_menu.style.display = "unset";
  home.style.display = "none";
  daftar_menu.style.display = "none";
  favorit.style.display = "none";
  sigma.style.display = "none";
  profil_menu.style.display = "none";
  search_icon.classList.add("footer-fn");
  home_icon.classList.remove("footer-fn");
  user_icon.classList.remove("footer-fn");
  button.style.display = "none";
});

home_icon.addEventListener("click", function() {
  search_menu.style.display = "none";
  home.style.display = "unset";
  daftar_menu.style.display = "unset";
  favorit.style.display = "inherit";
  sigma.style.display = "none";
  profil_menu.style.display = "none";
  search_icon.classList.remove("footer-fn");
  home_icon.classList.add("footer-fn");
  user_icon.classList.remove("footer-fn");
  button.style.display = "none";
});

user_icon.addEventListener("click", function() {
  search_menu.style.display = "none";
  home.style.display = "none";
  daftar_menu.style.display = "none";
  favorit.style.display = "none";
  sigma.style.display = "none";
  profil_menu.style.display = "unset";
  search_icon.classList.remove("footer-fn");
  home_icon.classList.remove("footer-fn");
  user_icon.classList.add("footer-fn");
  button.style.display = "unset";
});

search.addEventListener('input', () => {
  searchMenu.style.opacity = '1';
  if (search.value.trim() === '') {
    searchMenu.style.opacity = '0';
    signa.style.display = 'none';
  }
  if (search.value.trim().toLowerCase() === 'sigma') {
    searchMenu.style.opacity = '0';
    sigma.style.display = 'unset';
  }
});

var tombol = document.querySelector("#profil-menu .button");
let username = document.querySelector("#profil-menu .username");
var inputUser = document.createElement('input');
inputUser.maxLength = 10;
var confirm = document.querySelector('#profil-menu .confirm');
var message = document.getElementById("message");

window.addEventListener("load", function() {
  const savedUsername = localStorage.getItem("username");
  const savedFoto = localStorage.getItem("fotoProfil");
  if (savedFoto) {
    fotoprofil.src = savedFoto;
  } if (savedUsername) {
    username.innerHTML = savedUsername;
  };
});

inputUser.addEventListener("input", function() {
  if (inputUser.value.length >= 3) {
    message.style.display = "none";
    confirm.addEventListener("click", function() {
      if (inputUser.value.trim() === "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Form tidak boleh kosong!',
        });
      } else {
        message.style.display = "none";
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Username berhasil diganti.',
        }).then(() => {
          inputUser.replaceWith(username);
          let newValue = inputUser.value.trim();
          username.innerHTML = newValue;
          confirm.replaceWith(tombol);
          localStorage.setItem("username", inputUser.value.trim());
        });
      }
    });
  } else {
    message.style.display = 'grid';
    return;
  }
});

let fotoprofil = document.querySelector("#profil-menu .gambar .picture");
let fileprofil = document.getElementById("picfile");
let buttonchange = document.getElementById("probutton");

tombol.addEventListener("click", function() {
  username.replaceWith(inputUser);
  inputUser.style.marginLeft = '50px';
  inputUser.style.width = '60%';
  inputUser.style.position = 'relative';
  fotoprofil.style.position = 'relative';
  tombol.replaceWith(confirm);
  confirm.style.display = 'grid';
  confirm.style.justifyContent = 'end';
  confirm.style.transform = 'translateX(0) translateY(23px)';
});


buttonchange.addEventListener('click', function() {
  fileprofil.click();
});

fileprofil.addEventListener('change', function() {
  let file = this.files[0];
  let reader = new FileReader();

  reader.onload = function(e) {
    fotoprofil.src = e.target.result
    localStorage.setItem("fotoProfil", e.target.result);
  };

  reader.readAsDataURL(file);
});

let Keranjang = document.getElementById("icons");
let ListKeranjang = document.getElementById("cart-list");
let close = document.getElementById("close");

Keranjang.addEventListener("click", function() {
  ListKeranjang.style.transform = "translateX(0px)";
  ListKeranjang.style.opacity = "1";
});
close.addEventListener("click", () => {
  ListKeranjang.style.transform = "translateX(-400px)";
  ListKeranjang.style.opacity = "0";
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("halamanUtama").style.display = "unset";
  }, 2300);
});

const textToType = "... ";
let index = 0;

let isDeleting = false;
const typingSpeed = 130;
const deletingSpeed = 100;
const pauseTime = 300;
const restartDelay = 300;

function typeText() {
  if (isDeleting) {
    textElement.textContent = textToType.substring(0, index);
    index--;
    if (index < 0) {
      isDeleting = false;
      setTimeout(typeText, restartDelay);
    } else {
      setTimeout(typeText, deletingSpeed);
    }
  } else {
    textElement.textContent = textToType.substring(0, index);
    index++;
    if (index >= textToType.length) {
      setTimeout(function() {
        isDeleting = true;
        typeText();
      }, pauseTime);
    } else {
      setTimeout(typeText, typingSpeed);
    }
  }
}

typeText();

const qtty = document.getElementById("qtty");
const wrng = document.getElementById("wrng");
const body = document.getElementById("badan");
const loadingElement = document.getElementById("loading");
const textLoading = document.getElementById("textLoading");

function darkModeButton() {
  body.setAttribute("data-bs-theme", "dark");
  button.innerHTML = "🌙";
  button.style.backgroundColor = "#1f1f1f";
  navbar.style.backgroundColor = "#1e1e1e";
  footer_menu.style.backgroundColor = "#1e1e1e";
  button.style.transform = "translateX(30px)";
  search_icon.style.color = "white";
  user_icon.style.color = "white";
  home_icon.style.color = "white";
  requestAnimationFrame(() => {
    loadingElement.setAttribute("data-bs-theme", "dark");
    textLoading.style.color = "white";
    titik.style.color = "white";
  })

  search_icon.addEventListener("click", () => {
    search_icon.style.color = "#3e3e3e";
    home_icon.style.color = "white";
    user_icon.style.color = "white";
  });

  home_icon.addEventListener("click", () => {
    search_icon.style.color = "white";
    user_icon.style.color = "white";
    home_icon.style.color = "#3e3e3e";
  });

  user_icon.addEventListener("click", () => {
    search_icon.style.color = "white";
    user_icon.style.color = "#3e3e3e";
    home_icon.style.color = "white";
  });
};

function lightModeButton() {
  body.setAttribute("data-bs-theme", "light");
  button.innerHTML = "☀️";
  button.style.backgroundColor = "white";
  navbar.style.backgroundColor = "white";
  footer_menu.style.backgroundColor = "white";
  button.style.transform = "translateX(0)";
  search_icon.style.color = "black";
  user_icon.style.color = "black";
  home_icon.style.color = "black";
  requestAnimationFrame(() => {
    loadingElement.setAttribute("data-bs-theme", "light");
    textLoading.style.color = "black";
    titik.style.color = "black";
  })

  search_icon.addEventListener("click", () => {
    search_icon.style.color = "#6c6c6c";
    home_icon.style.color = "black";
    user_icon.style.color = "black";
  });

  home_icon.addEventListener("click", () => {
    search_icon.style.color = "black";
    user_icon.style.color = "black";
    home_icon.style.color = "#6c6c6c";
  });

  user_icon.addEventListener("click", () => {
    search_icon.style.color = "black";
    user_icon.style.color = "#6c6c6c";
    home_icon.style.color = "black";
  });
};

darkMode.addEventListener("click", () => {
  if (body.getAttribute("data-bs-theme") === "dark") {
    lightModeButton();
    localStorage.setItem("data-bs-theme", "light");
  } else {
    darkModeButton();
    localStorage.setItem("data-bs-theme", "dark");
  }
});

window.addEventListener("load", () => {
  if (body.Attribute("data-bs-theme") === "light") {
    lightModeButton();
  } else {
    darkModeButton();
  }
});

window.addEventListener("load", () => {
  const tema = localStorage.getItem("data-bs-theme");
  if (tema) {
    body.setAttribute("data-bs-theme", tema);
    if (tema === "light") {
      lightModeButton();
    } else {
      darkModeButton();
    }
  }
});
function adjustMargin() {
  requestAnimationFrame(() => {
    document.querySelector(".loading").style.marginTop = window.innerHeight * 0.5 + "px";
  });
}
window.addEventListener("resize", adjustMargin);
adjustMargin();
