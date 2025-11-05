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
const desc__class1 = document.querySelector(".desc__class--1");

// 타이핑 관련
const content = "오늘을 만드는 기술";
let index = 0;
let typingInterval;
let typingStarted = false;

function startTyping() {
    const mobile = window.innerWidth <= 480;
    if (mobile) {
        desc__class1.textContent = content; // 모바일이면 바로 출력
        return; // 애니메이션 종료
    }

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
        }, 100);
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

// 섹션 offset 계산 (리사이즈에도 대응)
let s__top__1 = sec1.offsetTop;
let s__top__2 = sec2.offsetTop;
let s__top__3 = sec3.offsetTop;
let s__top__4 = sec4.offsetTop;

function updateSectionOffsets() {
    s__top__1 = sec1.offsetTop;
    s__top__2 = sec2.offsetTop;
    s__top__3 = sec3.offsetTop;
    s__top__4 = sec4.offsetTop;
}

window.addEventListener("resize", updateSectionOffsets);

// 스크롤 이벤트
window.addEventListener("scroll", () => {
    const sy = window.scrollY;
    const mobile = window.innerWidth <= 480;
    const offset = mobile ? 200 : 400; // 모바일용 스크롤 오프셋

    // 섹션 1
    if (sy >= s__top__1 - offset && sy < s__top__2 - offset) {
        desc__main__contents1.classList.add("desc__main__contents1__active");
        img__container1.classList.add("img__container__active");
        desc__sub__container1.classList.add("desc__sub__container__active");
    } else {
        desc__main__contents1.classList.remove("desc__main__contents1__active");
        img__container1.classList.remove("img__container__active");
        desc__sub__container1.classList.remove("desc__sub__container__active");
    }

    // 섹션 2
    if (sy >= s__top__2 - offset && sy < s__top__3 - offset) {
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
    if (sy >= s__top__3 - offset && sy < s__top__4 - offset) {
        desc__main__contents3.classList.add("desc__main__contents__active");
        img__container3.classList.add("img__container__active2");
        desc__sub__container3.classList.add("desc__sub__container__active");
    } else {
        desc__main__contents3.classList.remove("desc__main__contents__active");
        img__container3.classList.remove("img__container__active2");
        desc__sub__container3.classList.remove("desc__sub__container__active");
    }

    // 섹션 4
    if (sy >= s__top__4 - offset) {
        desc__main__contents4.classList.add("desc__main__contents__active");
        img__container4.classList.add("img__container__active3");
        desc__sub__container4.classList.add("desc__sub__container__active");
    } else {
        desc__main__contents4.classList.remove("desc__main__contents__active");
        img__container4.classList.remove("img__container__active3");
        desc__sub__container4.classList.remove("desc__sub__container__active");
    }

    // 버튼 체크
    desc__btn__1.checked = s__top__1 && sy >= s__top__1;
    desc__btn__2.checked = sy >= s__top__1 && sy < s__top__2;
    desc__btn__3.checked = sy >= s__top__2 && sy < s__top__3;
    desc__btn__4.checked = sy >= s__top__3;
});

// 버튼 클릭 스크롤
const scrollToSection = (top) => {
    const mobile = window.innerWidth <= 480;
    const offset = mobile ? 150 : 300; // 모바일 스크롤 오프셋
    window.scrollTo({ top: top - offset, behavior: "smooth" });
};

desc__btn__1.addEventListener("click", () => scrollToSection(s__top__1));
desc__btn__2.addEventListener("click", () => scrollToSection(s__top__2));
desc__btn__3.addEventListener("click", () => scrollToSection(s__top__3));
desc__btn__4.addEventListener("click", () => scrollToSection(s__top__4));

// 모바일 이미지 스케일 조정
function adjustImageScale() {
    if (window.innerWidth <= 480) {
        img__container1.style.transform = "scale(1)";
        img__container2.style.transform = "scale(1)";
        img__container3.style.transform = "scale(1)";
        img__container4.style.transform = "scale(1)";
        desc__class1.style.fontSize = "1.2rem";
    } else {
        img__container1.style.transform = "";
        img__container2.style.transform = "";
        img__container3.style.transform = "";
        img__container4.style.transform = "";
        desc__class1.style.fontSize = "";
    }
}

window.addEventListener("resize", adjustImageScale);
adjustImageScale();
