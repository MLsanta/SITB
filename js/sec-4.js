const sec4 = document.querySelector("#section4"); //섹션 각각의 오브젝트마다 opacity 처리가 되고있는데 이 코드에서는 섹션 전체의 클래스 조절만 붙어있음

const s4Top = sec4.offsetTop;
const s4Height = sec4.offsetHeight;

function revealSection4() {
    const sy = window.scrollY;
    const winH = window.innerHeight;

    if (sy + winH >= s4Top + s4Height / 3) {
        sec4.classList.add("section4--active");
        window.removeEventListener("scroll", revealSection4);
    }
}

window.addEventListener("scroll", revealSection4);
revealSection4();
