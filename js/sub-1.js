// 섹션
const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");
const sec4 = document.querySelector(".sec4");

// 버튼
const desc__btn__1 = document.getElementById("desc__btn__1");
const desc__btn__2 = document.getElementById("desc__btn__2");
const desc__btn__3 = document.getElementById("desc__btn__3");
const desc__btn__4 = document.getElementById("desc__btn__4");

// 이미지 컨테이너
const img__container1 = document.querySelector(".img__container1");
const img__container2 = document.querySelector(".img__container2");
const img__container3 = document.querySelector(".img__container3");
const img__container4 = document.querySelector(".img__container4");

// 서브 컨테이너
const desc__sub__container1 = document.querySelector(".desc__sub__container1");
const desc__sub__container2 = document.querySelector(".desc__sub__container2");
const desc__sub__container3 = document.querySelector(".desc__sub__container3");
const desc__sub__container4 = document.querySelector(".desc__sub__container4");

// 메인 컨텐츠
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
const textContents = document.querySelectorAll(".desc__main__contents");

// 타이핑 관련
const content = "오늘을 만드는 기술";
const desc__class1 = document.querySelector(".desc__class--1");
let index = 0;
let typingInterval;
let typingStarted = false;

function startTyping() {
    if (!typingStarted) {
        typingStarted = true;
        index = 0;
        desc__class1.textContent = "";
        typingInterval = setInterval(() => {
            desc__class1.textContent += content[index++];
            if (index >= content.length) {
                clearInterval(typingInterval);
                typingStarted = false;
            }
        }, 200);
    }
}

function stopTyping() {
    if (typingStarted) {
        clearInterval(typingInterval);
        typingStarted = false;
        index = 0;
        desc__class1.textContent = "";
    }
}

// 섹션 offset
const s__top__1 = sec1.offsetTop;
const s__top__2 = sec2.offsetTop;
const s__top__3 = sec3.offsetTop;
const s__top__4 = sec4.offsetTop;

// 스크롤 이벤트
window.addEventListener("scroll", () => {
    const sy = window.scrollY;

    // 섹션 1
    if (sy >= s__top__1 - 400 && sy < s__top__2 - 400) {
        desc__main__contents1.classList.add("desc__main__contents1__active");
        img__container1.classList.add("img__container__active");
        desc__sub__container1.classList.add("desc__sub__container__active");
    } else {
        desc__main__contents1.classList.remove("desc__main__contents1__active");
        img__container1.classList.remove("img__container__active");
        desc__sub__container1.classList.remove("desc__sub__container__active");
    }

    // 섹션 2
    if (sy >= s__top__2 - 400 && sy < s__top__3 - 400) {
        startTyping();
        desc__main__contents2.classList.add("desc__main__contents__active");
        img__container2.classList.add("img__container__active");
        desc__sub__container2.classList.add("desc__sub__container__active");
    } else {
        stopTyping();
        desc__main__contents2.classList.remove("desc__main__contents__active");
        img__container2.classList.remove("img__container__active");
        desc__sub__container2.classList.remove("desc__sub__container__active");
    }

    // 섹션 3
    if (sy >= s__top__3 - 400 && sy < s__top__4 - 400) {
        desc__main__contents3.classList.add("desc__main__contents__active");
        img__container3.classList.add("img__container__active");
        desc__sub__container3.classList.add("desc__sub__container__active");
    } else {
        desc__main__contents3.classList.remove("desc__main__contents__active");
        img__container3.classList.remove("img__container__active");
        desc__sub__container3.classList.remove("desc__sub__container__active");
    }

    // 섹션 4
    if (sy >= s__top__4 - 400) {
        desc__main__contents4.classList.add("desc__main__contents__active");
        img__container4.classList.add("img__container__active");
        desc__sub__container4.classList.add("desc__sub__container__active");
    } else {
        desc__main__contents4.classList.remove("desc__main__contents__active");
        img__container4.classList.remove("img__container__active");
        desc__sub__container4.classList.remove("desc__sub__container__active");
    }

    // 버튼 체크
    desc__btn__1.checked = s__top__1;
    desc__btn__2.checked = sy >= s__top__1 && sy < s__top__2;
    desc__btn__3.checked = sy >= s__top__2 && sy < s__top__3;
    desc__btn__4.checked = sy >= s__top__3;
});

// 버튼 클릭 스크롤
desc__btn__1.addEventListener("click", () => {
    window.scrollTo({ top: s__top__1 - 300, behavior: "smooth" });
});
desc__btn__2.addEventListener("click", () => {
    window.scrollTo({ top: s__top__2 - 300, behavior: "smooth" });
});
desc__btn__3.addEventListener("click", () => {
    window.scrollTo({ top: s__top__3 - 300, behavior: "smooth" });
});
desc__btn__4.addEventListener("click", () => {
    window.scrollTo({ top: s__top__4 - 300, behavior: "smooth" });
});
