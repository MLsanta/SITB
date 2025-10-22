let imgBoxs = document.querySelectorAll('.imgBox2')
let btns = document.querySelectorAll('.btn2')
let dots = document.querySelectorAll('.dot')

imgBoxs.forEach((item, idx) => {
    if(idx !== 0) item.style.display = 'none'
})
btns[0].classList.add('active')
dots[0].classList.add('on')

btns.forEach( (item, idx) => {
    item.addEventListener('click', () =>{
        imgBoxs.forEach( img => (img.style.display = 'none'))
        imgBoxs[idx].style.display = 'flex'

        btns.forEach(b => b.classList.remove('active'))
        item.classList.add('active')

        dots.forEach( d => d.classList.remove('on'))
        dots[idx].classList.add('on')
    })
})

let sec2 = document.querySelector('.sec__2')

window.addEventListener('scroll', ()=>{
    let scrollY = window.scrollY

    if(scrollY + window.innerHeight * 0.8 > sec2.offsetTop){
        sec2.classList.add('active')
    }
})

