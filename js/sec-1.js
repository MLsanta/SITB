$(function () {
  const slides = $(".slide");
  const bar = $(".bar");
  const startNum = $(".start");
  let idx = 0;
  let isPlaying = false;
  const fadeN = 1000;
  let frameId = null;

  function barReset() {
    cancelAnimationFrame(frameId);
    bar.css({ width: "0%" });
  }

  function barStart(video, callback) {
    let startTime = null;

    function updateBar(now) {
      if (!startTime) startTime = now;
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min((elapsed / video.duration) * 100, 100);
      bar.css("width", progress + "%");

      if (progress < 100 && !video.paused) {
        frameId = requestAnimationFrame(updateBar);
      } else {
        callback && callback();
      }
    }
    frameId = requestAnimationFrame(updateBar);
  }

  function next() {
    const nextIdx = (idx + 1) % slides.length;
    slides.eq(idx).fadeOut(fadeN).removeClass("active");
    slides.eq(nextIdx).fadeIn(fadeN).addClass("active");
    idx = nextIdx;
    startNum.text(String(idx + 1).padStart(2, "0"));
  }

  function prev() {
    const prevIdx = idx === 0 ? slides.length - 1 : idx - 1;
    slides.eq(idx).fadeOut(fadeN).removeClass("active");
    slides.eq(prevIdx).fadeIn(fadeN).addClass("active");
    idx = prevIdx;
    startNum.text(String(idx + 1).padStart(2, "0"));
  }

  function play() {
    if (isPlaying) return;
    isPlaying = true;

    const video = slides.eq(idx).find("video").get(0);
    barReset();
    video.currentTime = 0;

    video.addEventListener("playing", function onPlay() {
      video.removeEventListener("playing", onPlay);
      barStart(video, function repeat() {
        video.pause();
        next();
        const nextVideo = slides.eq(idx).find("video").get(0);
        barReset();
        nextVideo.currentTime = 0;

        nextVideo.addEventListener("playing", function onNextPlay() {
          nextVideo.removeEventListener("playing", onNextPlay);
          barStart(nextVideo, repeat);
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
    bar.stop(true);
  }

  $(".next").on("click", () => {
    stop();
    next();
    play();
  });
  $(".prev").on("click", () => {
    stop();
    prev();
    play();
  });

  slides.hide().eq(0).show().addClass("active");

  const firstVideo = slides.eq(0).find("video").get(0);
  firstVideo.addEventListener("loadedmetadata", () => {
    play();
  });

  $("video").each(function () {
    this.removeAttribute("loop");
    this.muted = true;
    this.play().catch(() => {});
  });
});
