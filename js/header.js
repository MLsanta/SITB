const header = document.querySelector(".hd");

window.addEventListener("scroll", () => {
    let sy = window.scrollY;

    if (sy > 20) {
        header.classList.add("header__active");
    } else {
        header.classList.remove("header__active");
    }
});

document.addEventListener("DOMContentLoaded", () =>{
    const currentPagePath = window.location.pathname ;
    const menuLinks = document.querySelectorAll(".hd .menu a")

    menuLinks.forEach((link)=>{
        const linkHref = link.getAttribute("href");

        if(currentPagePath.endsWith(linkHref)){
            link.classList.add("active");
        }
    })
})
