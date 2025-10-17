const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");
const sec4 = document.querySelector(".sec4");
const img__container1 = document.querySelector(".img__container1");
const img__container2 = document.querySelector(".img__container2");
const img__container3 = document.querySelector(".img__container3");
const img__container4 = document.querySelector(".img__container4");
const desc__sub__container = document.querySelector(".desc__sub__container");
const desc__main__contents1 = document.querySelector(".desc__main__contents1");

let s1__pos = sec1.offsetTop;
let s2__pos = sec2.offsetTop;
let s3__pos = sec3.offsetTop;
let s4__pos = sec4.offsetTop;

const descSub = document.querySelector(".desc__sub__container");

const descClasses = [
    "desc__sub__container1",
    "desc__sub__container2",
    "desc__sub__container3",
    "desc__sub__container4",
];

window.addEventListener("scroll", () => {
    let sy = window.scrollY;

    // 모든 이미지 초기화
    img__container1.classList.remove("img__container__active");
    img__container2.classList.remove("img__container__active");
    img__container3.classList.remove("img__container__active");
    img__container4.classList.remove("img__container__active");

    // desc__sub__container 초기화 (활성화 클래스 + 섹션별 클래스 제거)
    descSub.classList.remove("desc__sub__container__active");
    descClasses.forEach((cls) => descSub.classList.remove(cls));

    if (sy >= s1__pos - 300 && sy < s2__pos - 300) {
        img__container1.classList.add("img__container__active");
        descSub.classList.add(
            "desc__sub__container__active",
            "desc__sub__container1"
        );
    } else if (sy >= s2__pos - 300 && sy < s3__pos - 300) {
        img__container2.classList.add("img__container__active");
        descSub.classList.add(
            "desc__sub__container__active",
            "desc__sub__container2"
        );
    } else if (sy >= s3__pos - 300 && sy < s4__pos - 300) {
        img__container3.classList.add("img__container__active");
        descSub.classList.add(
            "desc__sub__container__active",
            "desc__sub__container3"
        );
    } else if (sy >= s4__pos - 300) {
        img__container4.classList.add("img__container__active");
        descSub.classList.add(
            "desc__sub__container__active",
            "desc__sub__container4"
        );
    }
});
