      $(function () {
        const slides = $(".slide");
        const bar = $(".bar");
        const startNum = $(".start");
        let idx = 0;
        let isPlaying = false;
        const fadeN = 1000;

        function barReset() {
          bar.stop(true).css({ width: "0%" });
        }

        function barStart(video, callback) {
          if (!video.duration) {
            video.addEventListener("loadedmetadata", function onMeta() {
              video.removeEventListener("loadedmetadata", onMeta);
              barStart(video, callback);
            });
            return;
          }

          const dur = video.duration * 1000;
          bar
            .stop(true)
            .css({ width: "0%" })
            .animate(
              { width: "100%" },
              { duration: dur, easing: "linear", complete: callback }
            );
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
          video.play();

          barStart(video, function repeat() {
            video.pause();
            next();
            const nextVideo = slides.eq(idx).find("video").get(0);
            barReset();
            nextVideo.currentTime = 0;
            nextVideo.play();
            barStart(nextVideo, repeat);
          });
        }

        function stop() {
          isPlaying = false;
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

        $(".slider")
          .on("mouseenter", () => {
            stop();
          })
          .on("mouseleave", () => {
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