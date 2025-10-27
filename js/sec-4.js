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
const title = document.querySelector(".section4__title");
const desc = document.querySelector(".section4__desc");
const news = document.querySelector(".news");

function revealSection4() {
  const winH = window.innerHeight;

  const titleTop = title.getBoundingClientRect().top;
  const descTop = desc.getBoundingClientRect().top;
  const newsTop = news.getBoundingClientRect().top;

  if (titleTop < winH * 0.9) title.classList.add("active");
  if (descTop < winH * 0.9) desc.classList.add("active");
  if (newsTop < winH * 0.9) news.classList.add("active");
}

window.addEventListener("scroll", revealSection4);
revealSection4();
