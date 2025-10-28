const btn1 = document.querySelector('.sub4__btn1')
const btn2 = document.querySelector('.sub4__btn2')
const sec1 = document.querySelector('.sub4__sec--1')
const sec2 = document.querySelector('.sub4__sec--2')

sec1.classList.add('active');
btn1.classList.add('active');

btn1.addEventListener('click',()=>{
    btn1.classList.add('active')
    btn2.classList.remove('active')

    sec1.classList.add('active')
    sec2.classList.remove('active')
});

btn2.addEventListener('click', ()=>{
    btn1.classList.remove('active')
    btn2.classList.add('active')
    sec1.classList.remove('active')
    sec2.classList.add('active')
})

const yearSelect = document.querySelector('.sub4__sec--2 select');
const tables = document.querySelectorAll('.sub4__sec--2 table');
const table2024 = tables[0];
const table2023 = tables[1];

// table2023.style.display = 'none';

yearSelect.addEventListener('change', ()=>{
    if(yearSelect.value === '2024'){
        table2024.style.display = 'table'
        table2023.style.display = 'none'
    }else if (yearSelect.value === '2023'){
        table2024.style.display = 'none';
        table2023.style.display = 'table';
    }
})