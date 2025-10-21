const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");
const sec4 = document.querySelector(".sec4");

const desc__btn__1 = document.getElementById("desc__btn__1");
const desc__btn__2 = document.getElementById("desc__btn__2");
const desc__btn__3 = document.getElementById("desc__btn__3");
const desc__btn__4 = document.getElementById("desc__btn__4");

const img__container1 = document.querySelector(".img__container1");
const img__container2 = document.querySelector(".img__container2");
const img__container3 = document.querySelector(".img__container3");
const img__container4 = document.querySelector(".img__container4");
const desc__sub__container1 = document.querySelector(".desc__sub__container1");
const desc__sub__container2 = document.querySelector(".desc__sub__container2");
const desc__sub__container3 = document.querySelector(".desc__sub__container3");
const desc__sub__container4 = document.querySelector(".desc__sub__container4");
const desc__main__contents1 = document.querySelector(".desc__main__contents1");
const desc__main__contents2 = document.querySelector(
    ".desc__main__contents2 h1"
);
const desc__main__contents3 = document.querySelector(
    ".desc__main__contents3 h1"
);
const desc__main__contents4 = document.querySelector(
    ".desc__main__contents4 h1"
);

const s__top__1 = sec1.offsetTop;
const s__top__2 = sec2.offsetTop;
const s__top__3 = sec3.offsetTop;
const s__top__4 = sec4.offsetTop;

window.addEventListener("scroll", () => {
    let sy = window.scrollY;

    if (sy >= s__top__1 - 400 && sy < s__top__1) {
        desc__main__contents1.classList.add("desc__main__contents1__active");
        img__container1.classList.add("img__container__active");
        desc__sub__container1.classList.add("desc__sub__container__active");
    } else {
        desc__main__contents1.classList.remove("desc__main__contents1__active");
        img__container1.classList.remove("img__container__active");
        desc__sub__container1.classList.remove("desc__sub__container__active");
    }
    if (sy >= s__top__2 - 500 && sy < s__top__2) {
        document
            .querySelector(".desc__main__contents2 h1")
            .classList.add("desc__main__contents__active");
        img__container2.classList.add("img__container__active");
        desc__sub__container2.classList.add("desc__sub__container__active");
    } else {
        document
            .querySelector(".desc__main__contents2 h1")
            .classList.remove("desc__main__contents__active");
        img__container2.classList.remove("img__container__active");
        desc__sub__container2.classList.remove("desc__sub__container__active");
    }
    if (sy >= s__top__3 - 500 && sy < s__top__3) {
        document
            .querySelector(".desc__main__contents3 h1")
            .classList.add("desc__main__contents__active");
        img__container3.classList.add("img__container__active");
        desc__sub__container3.classList.add("desc__sub__container__active");
    } else {
        document
            .querySelector(".desc__main__contents3 h1")
            .classList.remove("desc__main__contents__active");
        img__container3.classList.remove("img__container__active");
        desc__sub__container3.classList.remove("desc__sub__container__active");
    }
    if (sy >= s__top__4 - 500 && sy < s__top__4) {
        document
            .querySelector(".desc__main__contents4 h1")
            .classList.add("desc__main__contents__active");
        img__container4.classList.add("img__container__active");
        desc__sub__container4.classList.add("desc__sub__container__active");
    } else {
        document
            .querySelector(".desc__main__contents4 h1")
            .classList.remove("desc__main__contents__active");
        img__container4.classList.remove("img__container__active");
        desc__sub__container4.classList.remove("desc__sub__container__active");
    }
});
// 버튼 선택자
const s__top__1__top = document.querySelector(".sec1").offsetTop; // 이동할 섹션 위치

desc__btn__1.addEventListener("click", () => {
    window.scrollTo({
        top: s__top__1__top - 300,
        behavior: "smooth",
    });
});
const s__top__2__top = document.querySelector(".sec2").offsetTop; // 이동할 섹션 위치

desc__btn__2.addEventListener("click", () => {
    window.scrollTo({
        top: s__top__2__top - 300,
        behavior: "smooth",
    });
});
const s__top__3__top = document.querySelector(".sec3").offsetTop; // 이동할 섹션 위치

desc__btn__3.addEventListener("click", () => {
    window.scrollTo({
        top: s__top__3__top - 300,
        behavior: "smooth",
    });
});
const s__top__4__top = document.querySelector(".sec4").offsetTop; // 이동할 섹션 위치

desc__btn__4.addEventListener("click", () => {
    window.scrollTo({
        top: s__top__4__top - 300,
        behavior: "smooth",
    });
});
