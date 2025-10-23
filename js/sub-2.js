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

        // 서브2 자바스크립트

        document.querySelectorAll('.imgBox').forEach((item) => {
            let imgs = item.querySelectorAll('img')
            let leftBtn = item.querySelector('.leftBtn')
            let rightBtn = item.querySelector('.rightBtn')
            let changePage = item.querySelector('.changePage')
            let page = item.querySelector('.page')
            
            let idx = 0
            let down = false;
            let startX = 0
            let total = imgs.length
            page.textContent = String(total).padStart(2, '0')

            show(0)

            // 표시 함수
            function show(a) {
                let offset = -a * 100;
                imgs.forEach((img, i) => {
                    img.style.transform = `translateX(${offset}%)`
                })
                changePage.textContent = String(a + 1).padStart(2, '0')
            }

            // 버튼 클릭 시
            leftBtn.addEventListener('click', () => {
                if(idx > 0){
                    idx --
                    show(idx);
                }
            })

            rightBtn.addEventListener('click', () => {
                if(idx < total - 1){
                    idx ++ 
                    show(idx);
                }
            })

            // 드래그
            item.addEventListener('mousedown', (e) => {
                down = true;
                startX = e.clientX
                item.classList.add('move')
            })

            window.addEventListener('mouseup', () => {
                down = false;
                item.classList.remove('move')
            })

            window.addEventListener('mousemove', (e) => {
                if (!down) return;
                let dx = e.clientX - startX

                if (dx > 80  && idx > 0) {
                    idx = (idx - 1 + total) % total
                    show(idx)
                    down = false
                } else if (dx < -80 && idx < total - 1) {
                    idx = (idx + 1) % total
                    show(idx)
                    down = false
                }
            })
        })

        // 스크롤
        let sections = document.querySelectorAll('section')

        window.addEventListener('scroll', ()=>{
            let scrollY = window.scrollY

            sections.forEach((item) => {
                // 시작 위치보다 보이는 섹션의 80%가 내려갔다면
                if(scrollY + window.innerHeight * 0.8 > item.offsetTop){
                    item.classList.add('active')
                }
            })
        })