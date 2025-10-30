window.addEventListener("DOMContentLoaded", () => {
    fetch("js/news.json")
        .then((res) => res.json())
        .then((data) => {
            render("wrap--1", data.page1);
            render("wrap--2", data.page2);

            const pages = document.querySelectorAll(".page");
            const nums = document.querySelectorAll(".num");
            const btnPrev = document.getElementById("btnPrev");
            const btnNext = document.getElementById("btnNext");

            let now = 1;

            function move(n) {
                now = n;
                pages.forEach((p, i) =>
                    p.classList.toggle("active", i + 1 === now)
                );
                nums.forEach((b, i) => b.classList.toggle("on", i + 1 === now));
                toggleArrow();
                const id = now === 1 ? "wrap--1" : "wrap--2";
                show(id);
            }

            function toggleArrow() {
                btnPrev.classList.toggle("off", now === 1);
                btnNext.classList.toggle("off", now === pages.length);
            }

            btnPrev.addEventListener("click", () => {
                if (now > 1) move(now - 1);
            });
            btnNext.addEventListener("click", () => {
                if (now < pages.length) move(now + 1);
            });
            nums.forEach((b, i) =>
                b.addEventListener("click", () => move(i + 1))
            );

            toggleArrow();
            show("wrap--1");
        });

    function render(id, list) {
        const box = document.getElementById(id);
        list.forEach((v) => {
            box.innerHTML += `
              <div href="" class="card">
                <img src="${v.img}" alt="${v.title}" class="img" />
                <div class="txt">
                  <p class="cat">${v.category}</p>
                  <p class="head">${v.title}</p>
                  <p class="date">${v.date}</p>
                </div>
              </div>`;
        });
    }

    function show(id) {
        const cards = document.querySelectorAll(`#${id} .card`);
        cards.forEach((c, i) => {
            c.classList.remove("card--show");
            setTimeout(() => c.classList.add("card--show"), i * 150);
        });
    }
});
