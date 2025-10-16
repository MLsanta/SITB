const sections = document.querySelectorAll("section");
const imageContainers = document.querySelectorAll(
    ".container > div:nth-child(2)"
);

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    sections.forEach((sec, i) => {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
            imageContainers[i].classList.add("img__container__active");
        } else {
            imageContainers[i].classList.remove("img__container__active");
        }
    });
});
