$(function () {
  const $slides = $(".section1__slide");
  const $bar = $(".section1__bar");
  const $startNum = $(".section1__count--current");
  let idx = 0;
  let isPlaying = false;
  const fadeSpeed = 1000;
  let frameId = null;

  function resetBar() {
    cancelAnimationFrame(frameId);
    $bar.css({ width: "0%" });
  }

  function animateBar(video, callback) {
    let startTime = null;
    function update(now) {
      if (!startTime) startTime = now;
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min((elapsed / video.duration) * 100, 100);
      $bar.css("width", progress + "%");
      if (progress < 100 && !video.paused) {
        frameId = requestAnimationFrame(update);
      } else callback && callback();
    }
    frameId = requestAnimationFrame(update);
  }

  function goNext() {
    const nextIdx = (idx + 1) % $slides.length;
    $slides.eq(idx).fadeOut(fadeSpeed).removeClass("section1__slide--active");
    $slides.eq(nextIdx).fadeIn(fadeSpeed).addClass("section1__slide--active");
    idx = nextIdx;
    $startNum.text(String(idx + 1).padStart(2, "0"));
  }

  function goPrev() {
    const prevIdx = idx === 0 ? $slides.length - 1 : idx - 1;
    $slides.eq(idx).fadeOut(fadeSpeed).removeClass("section1__slide--active");
    $slides.eq(prevIdx).fadeIn(fadeSpeed).addClass("section1__slide--active");
    idx = prevIdx;
    $startNum.text(String(idx + 1).padStart(2, "0"));
  }

  function play() {
    if (isPlaying) return;
    isPlaying = true;

    const video = $slides.eq(idx).find("video").get(0);
    resetBar();
    video.currentTime = 0;

    video.addEventListener("playing", function onPlay() {
      video.removeEventListener("playing", onPlay);
      animateBar(video, function loop() {
        video.pause();
        goNext();
        const nextVideo = $slides.eq(idx).find("video").get(0);
        resetBar();
        nextVideo.currentTime = 0;

        nextVideo.addEventListener("playing", function onNextPlay() {
          nextVideo.removeEventListener("playing", onNextPlay);
          animateBar(nextVideo, loop);
        });
        nextVideo.play();
      });
    });

    video.play();
  }

  function stop() {
    isPlaying = false;
    cancelAnimationFrame(frameId);
    $("video").each(function () {
      this.pause();
    });
    $bar.stop(true);
  }

  $(".section1__btn--next").on("click", () => {
    stop();
    goNext();
    play();
  });

  $(".section1__btn--prev").on("click", () => {
    stop();
    goPrev();
    play();
  });

  $slides.hide().eq(0).show().addClass("section1__slide--active");

  const firstVideo = $slides.eq(0).find("video").get(0);
  firstVideo.addEventListener("loadedmetadata", () => play());
});
