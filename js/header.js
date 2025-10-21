const header = document.querySelector(".hd");

let lastScrollY = 0;

window.addEventListener('scroll', ()=> {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        header.classList.add("hd--hidden");
    } else{
        header.classList.remove("hd--hidden");
    }
    lastScrollY = currentScrollY;
})