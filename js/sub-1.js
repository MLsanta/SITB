const sections = document.querySelectorAll("section");
const imageContainers = document.querySelectorAll(
    ".container > div:nth-child(2)"
);
const textContents = document.querySelectorAll(".desc__main__contents");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const inView =
            scrollY >= top - window.innerHeight / 1.5 && scrollY < top + height;

        if (inView) {
            imageContainers[index].classList.add("img__container__active");
            textContents[index].classList.add("active");
        } else {
            imageContainers[index].classList.remove("img__container__active");
            textContents[index].classList.remove("active");
        }
    });
});
