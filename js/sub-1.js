const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");
const sec4 = document.querySelector(".sec4");
const img__container1 = document.querySelector(".img__container1");
const img__container2 = document.querySelector(".img__container2");
const img__container3 = document.querySelector(".img__container3");
const img__container4 = document.querySelector(".img__container4");
const desc__sub__container1 = document.querySelector(".desc__sub__container1");
const desc__main__contents1 = document.querySelector(".desc__main__contents1");

const s__top__1 = sec1.offsetTop;

window.addEventListener("scroll", () => {
    let sy = window.scrollY;

    if (sy >= s__top__1 - 400) {
        desc__main__contents1.classList.add("desc__main__contents1__active");
        img__container1.classList.add("img__container__active");
        desc__sub__container1.classList.add("desc__sub__container__active");
    } else {
        desc__main__contents1.classList.remove("desc__main__contents1__active");
        img__container1.classList.remove("img__container__active");
        desc__sub__container1.classList.remove("desc__sub__container__active");
    }
});
