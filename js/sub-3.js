window.addEventListener("DOMContentLoaded", () => {
  const newsData = {
    page1: [
      {
        link: "https://inside.nhn.com/news/821",
        img: "",
        category: "기술",
        title:
          "NHN에이티, 소셜페 기반 3분기 인스타그램 마케팅 트렌드 리포트 공개",
        date: "2025.10.17",
      },
      {
        link: "https://nhn.com/pr/26476",
        img: "./NHN/2.jpg",
        category: "기업",
        title: "왓플렛, ‘중소상공인 AI 기술 기반 고객사 예방 사업’ 추진",
        date: "2025.10.16",
      },
      {
        link: "https://nhn.com/pr/26472",
        img: "./NHN/3.jpg",
        category: "게임",
        title:
          "NHN ‘다키스트 데이즈’, PVP 콘텐츠 ‘전쟁장’ 업데이트… “실력으로 한 판 붙자”",
        date: "2025.10.16",
      },
      {
        link: "https://nhn.com/pr/26471",
        img: "./NHN/4.jpg",
        category: "기술",
        title: "NHN클라우드, ‘AI TECH+ 2025’서 GPU 인프라 AI 플랫폼 선보였다",
        date: "2025.10.15",
      },
      {
        link: "https://nhn.com/pr/26468",
        img: "./NHN/5.jpg",
        category: "결제·광고",
        title: "NHN페이코, ‘10주년 맞이 10억 쏜다’ 프로젝트 진행",
        date: "2025.10.13",
      },
      {
        link: "https://nhn.com/pr/26467",
        img: "./NHN/6.jpg",
        category: "기업",
        title: "NHN페이코, 텐메딕과 MOU 체결… ‘헬스케어 플랫폼’ 연동 확대",
        date: "2025.10.13",
      },
      {
        link: "https://nhn.com/pr/26466",
        img: "./NHN/7.jpg",
        category: "기술",
        title:
          "NHN클라우드, ‘중앙행정망 클라우드 서비스’ 임차 운영… “공공 클라우드 본격 확장”",
        date: "2025.10.02",
      },
      {
        link: "https://nhn.com/pr/26465",
        img: "./NHN/8.jpg",
        category: "기업",
        title: "NHN, ‘PC 25주년 맞이 이벤트’로 고객 감사 프로모션 진행",
        date: "2025.09.30",
      },
      {
        link: "https://nhn.com/pr/26464",
        img: "./NHN/9.jpg",
        category: "게임",
        title: "NHN, ‘히어로즈 챔피언십’ 총상금 10억 원 대회 개최",
        date: "2025.09.25",
      },
    ],
    page2: [
      {
        link: "https://nhn.com/pr/26463",
        img: "./NHN/10.jpg",
        category: "기업",
        title:
          "NHN, 신규 모바일 웹툰 플랫폼 ‘함께의 홀덤’ 출시… 속도·쾌적성 향상",
        date: "2025.09.26",
      },
      {
        link: "https://nhn.com/pr/26462",
        img: "./NHN/11.jpg",
        category: "기업",
        title: "아이마켓, 안정성과 편의성 강화한 ‘365클라우드 2.0’ 출시",
        date: "2025.09.25",
      },
      {
        link: "https://nhn.com/pr/26461",
        img: "./NHN/12.jpg",
        category: "기업",
        title:
          "NHN, 보건복지부 주관 ‘한국형 ARPA-H 프로젝트’ 공동연구개발기관으로 참여",
        date: "2025.09.24",
      },
      {
        link: "https://nhn.com/pr/26459",
        img: "./NHN/13.jpg",
        category: "기술",
        title: "NHN 리브랜딩, 세계 3대 디자인 어워드 ‘IDEA 2025’ 은상 수상",
        date: "2025.09.23",
      },
      {
        link: "https://nhn.com/pr/26458",
        img: "./NHN/14.jpg",
        category: "기술",
        title:
          "NHN클라우드, ‘아시아 에듀테크 컨퍼런스 2025’ 참여로 글로벌 협력 기반 마련",
        date: "2025.09.22",
      },
      {
        link: "https://nhn.com/pr/26457",
        img: "./NHN/15.jpg",
        category: "결제·광고",
        title: "NHN페이코, 빅결제 제휴처 최대 10만 원 상당 신규 혜택 제공",
        date: "2025.09.15",
      },
      {
        link: "https://nhn.com/pr/26456",
        img: "./NHN/16.jpg",
        category: "게임",
        title: "NHN, 신규 퍼즐 게임 ‘함께의 이야기 Puzzle Star’ 출시 예정",
        date: "2025.09.15",
      },
      {
        link: "https://nhn.com/pr/26455",
        img: "./NHN/17.jpg",
        category: "기업",
        title: "NHN, ‘한게임 섯다&윷놀이’ 속 독도 기부 이벤트 진행",
        date: "2025.09.12",
      },
      {
        link: "https://nhn.com/pr/26454",
        img: "./NHN/18.jpg",
        category: "기술",
        title:
          "NHN 토스랩과 손잡고 ‘스마트워커’ 협업 AI 실시간 집계 기능 업데이트",
        date: "2025.09.11",
      },
    ],
  };

  function makeCards(containerId, list) {
    const wrap = document.getElementById(containerId);
    list.forEach((item) => {
      wrap.innerHTML += `
              <a href="${item.link}" target="_blank" class="card">
                <img src="${item.img}" alt="${item.title}">
                <div class="text">
                  <p class="category">${item.category}</p>
                  <p class="title">${item.title}</p>
                  <p class="date">${item.date}</p>
                </div>
              </a>`;
    });
  }

  function revealCards(id) {
    const cards = document.querySelectorAll(`#${id} .card`);
    cards.forEach((c) => c.classList.remove("show"));
    const groupSize = 3;
    const gap = 800;

    cards.forEach((card, i) => {
      const group = Math.floor(i / groupSize);
      const offset = Math.random() * 120;
      setTimeout(() => {
        card.classList.add("show");
      }, group * gap + offset);
    });
  }

  makeCards("page1Cards", newsData.page1);
  makeCards("page2Cards", newsData.page2);

  const p1 = document.getElementById("page1");
  const p2 = document.getElementById("page2");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");

  function updateBtns() {
    prev.classList.toggle("disabled", p1.checked);
    next.classList.toggle("disabled", p2.checked);
  }

  function goTo(num) {
    const isPage1 = num === 1;
    p1.checked = isPage1;
    p2.checked = !isPage1;
    updateBtns();

    const target = isPage1 ? "page1Cards" : "page2Cards";
    requestAnimationFrame(() => {
      setTimeout(() => revealCards(target), 0);
    });
  }

  prev.addEventListener("click", () => {
    if (!p1.checked) goTo(1);
  });

  next.addEventListener("click", () => {
    if (!p2.checked) goTo(2);
  });

  p1.addEventListener("change", () => goTo(1));
  p2.addEventListener("change", () => goTo(2));

  updateBtns();
  revealCards("page1Cards");
});
