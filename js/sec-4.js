const title = document.querySelector(".section4__title");
const desc = document.querySelector(".section4__desc");
const news = document.querySelector(".news");

function revealSection4() {
  const winH = window.innerHeight;

  const titleTop = title.getBoundingClientRect().top;
  const descTop = desc.getBoundingClientRect().top;
  const newsTop = news.getBoundingClientRect().top;

  // 각 요소별로 화면에 들어오면 active 클래스 추가
  if (titleTop < winH * 0.9) title.classList.add("active");
  if (descTop < winH * 0.9) desc.classList.add("active");
  if (newsTop < winH * 0.9) news.classList.add("active");
}

window.addEventListener("scroll", revealSection4);
revealSection4();
