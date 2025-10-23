let sec3 = document.querySelector(".sec--3")

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY

    if(scrollY + window.innerHeight * 0.8 > sec3.offsetTop){
        sec3.classList.add("active")
    }
})