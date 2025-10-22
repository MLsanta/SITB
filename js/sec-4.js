const sec4 = document.querySelector("#section4");
const s4Top = sec4.offsetTop;
const s4Height = sec4.offsetHeight;

function revealSection4() {
  const sy = window.scrollY;
  const winH = window.innerHeight;

  if (sy + winH >= s4Top + s4Height / 3) {
    sec4.classList.add("active");
    window.removeEventListener("scroll", revealSection4);
  }
}

window.addEventListener("scroll", revealSection4);
revealSection4();
