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
inputUser.maxLength = 6;
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