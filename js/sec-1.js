$(document).ready(function () {
  let slides = $(".slider > div");
  let bar = $(".bar");
  let startNum = $(".start");
  let idx = 0;
  let timer = null;
  let barTimer = null;

  let fadeN = 100; // 페이드 속도
  let dur = 7000; // 슬라이드 유지 시간

  // ====== 페이드 전환 ======
  function next() {
    let nextIdx = idx === slides.length - 1 ? 0 : idx + 1;
    $(slides[idx]).stop(true).fadeOut(fadeN).removeClass("active");
    $(slides[nextIdx]).stop(true).fadeIn(fadeN).addClass("active");
    idx = nextIdx;
    startNum.text(String(idx + 1).padStart(2, "0"));
  }

  function prev() {
    let prevIdx = idx === 0 ? slides.length - 1 : idx - 1;
    $(slides[idx]).stop(true).fadeOut(fadeN).removeClass("active");
    $(slides[prevIdx]).stop(true).fadeIn(fadeN).addClass("active");
    idx = prevIdx;
    startNum.text(String(idx + 1).padStart(2, "0"));
  }

  // ====== 진행바 ======
  function barReset() {
    bar.stop(true, true).css({ width: "0%" });
  }

  function barStart() {
    bar
      .stop(true, true)
      .css({ width: "0%" })
      .animate({ width: "100%" }, { duration: dur, easing: "linear" });

    clearInterval(barTimer);
    barTimer = setInterval(function () {
      bar
        .stop(true, true)
        .css({ width: "0%" })
        .animate({ width: "100%" }, { duration: dur, easing: "linear" });
    }, dur);
  }

  function barStop() {
    clearInterval(barTimer);
    barTimer = null;
    bar.stop(true, false);
  }

  // ====== 자동재생 ======
  function play() {
    stop();
    timer = setInterval(next, dur);
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // ====== 버튼 제어 ======
  $(".next").on("click", function () {
    stop();
    barStop();
    next();
    play();
    barReset();
    barStart();
  });

  $(".prev").on("click", function () {
    stop();
    barStop();
    prev();
    play();
    barReset();
    barStart();
  });

  // ====== 마우스 제어 ======
  $(".slider")
    .on("mouseenter", function () {
      stop();
      barStop();
    })
    .on("mouseleave", function () {
      play();
      barReset();
      barStart();
    });

  // ====== 초기 설정 ======
  slides.hide().eq(0).show();
  play();
  barReset();
  barStart();
});
