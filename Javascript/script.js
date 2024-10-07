// filter search

const search = document.getElementById("pencarian");
const list = document.querySelectorAll(".menu div");

search.addEventListener("input", function () {
    var width = window.innerWidth;
    if (width <= 820) {
        const filter = search.value.toLowerCase();
        Array.from(list).forEach(function (item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.classList.remove("none");
                item.style.width = "120px";
            } else {
                item.classList.add("none");
            }
        });
    }
});

search.addEventListener("input", function () {
    var width = window.innerWidth;
    if (width >= 1000) {
        const filter = search.value.toLowerCase();
        Array.from(list).forEach(function (item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.classList.remove("none");
                item.style.width = "350px";
            } else {
                item.classList.add("none");
            }
        });
    }
});


// animasi search

const icari = document.getElementById("search");
const pencarian = document.getElementById("pencarian");
const silang = document.getElementById("silang");
const keranjang = document.getElementById("cart");

icari.addEventListener("click", () => {
    pencarian.style.opacity = "1";
    pencarian.style.width = "130px";
    pencarian.style.marginLeft = "60px";
    keranjang.style.transform = "translateX(" + 7 + "px)";
    icari.style.display = "none";
    icari.style.opacity = "0";
    icari.style.marginLeft = "5px";
    icari.style.transform = "translateX(" + 145 + "px)";
    silang.style.display = "flex";
    silang.style.marginLeft = "5px";
    silang.style.opacity = "1";
});

silang.addEventListener("click", () => {
    pencarian.style.width = "0";
    pencarian.style.marginLeft = "30px";
    pencarian.style.opacity = "0";
    keranjang.style.transform = "translateX(" + 135 + "px)";
    icari.style.display = "flex";
    icari.style.opacity = "1";
    icari.style.marginLeft = "5px";
    silang.style.display = "none";
    silang.style.opacity = "0";
});
