
const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");
const sec4 = document.querySelector(".sec4");
const img__container1 = document.querySelector(".img__container1");

let s1__pos = sec1.offsetTop;
let s2__pos = sec2.offsetTop;
let s3__pos = sec3.offsetTop;
let s4__pos = sec4.offsetTop;

window.addEventListener("scroll", () => {
    let sy = window.scrollY;

    if (sy >= s2__pos) {
        img__container1.classList.add("img__container__active");
    } else {
        img__container1.classList.remove("img__container__active");
    }

