let imgs = document.imgBox.querySelectorAll('.sub2-sec1-outBox-imgBox img')
let leftBtn = document.querySelector('sub2-sec1-outBox-imgBox-btn-leftBtn')
let rightBtn = document.querySelector('sub2-sec1-outBox-imgBox-btn-rightBtn') 
let changePage = document.querySelector('.sub2-sec1-outBox-imgBox-btn-changePage')
let totalPage = document.querySelector('.sub2-sec1-outBox-imgBox-btn-page')

let imgIdx = 0 // 현재 보이는 이미지의 인덱스(0부터 시작)
let maxIdx = imgs.length - 1 // 이미지 총 개수

// 모든 이미지를 보면서 현재 인덱스만 보이도록
function showImg(){
    img.forEach((item, idx) => {
        item.style.display = idx === imgIdx ? 'block' : 'none'
    })
}
        
// 페이지 표시
function page(){
    changePage.textContent = imgIdx + 1 // 배열은 0부터 시작하니 페이지는 1부터 표시함으로 +1
    totalPage.textContent = maxIdx + 1 // 총 이미지의 개수
}

// 버튼 클릭 시
leftBtn.addEventListener('click', () =>{
    imgIdxt = imgIdx > 0 ? imgIdx - 1: maxIdx // imgIdx - 1: 이전 이미지/ 첫 이미지면 마지막 이미지로 이동
    showImg()
    page()
})

rightBtn.addEventListener('click', () =>{
    imgIdx = imgIdx < maxIdx ? imgIdx + 1 : 0 // imgIdx + 1: 다음 이미지/ 마지막 이미지면 첫 이미지로 이동
    showImg()
    page()
})
    
function drag(a){
    let imgBox = document.querySelector('.sub2-sec1-outBox-imgBox')
    let down = false, px = 0

    a.addEventListener('mousedown' , (e) => {
        down = true;
        px = e.clientX
        imgBox.style.cursor = 'grabbing'
    }) 

    window.addEventListener('mousemove', (e) => {
        if(!down) return;
        let dx = e.clientX - px
                
        if( dx > 50){
            imgIdx = imgIdx > 0 ? imgIdx - 1: maxIdx 
            showImg()
            page()
            down = false
        }else if(dx < -50) {
            imgIdx = imgIdx < maxIdx ? imgIdx + 1 : 0 
            showImg()
            page()
            down = false
        }
    })

    window.addEventListener('mouseup', () => {
        down = false;
        imgBox.style.cursor = 'grab'
    })
}
        
drag(imgBox)