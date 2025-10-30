window.addEventListener("DOMContentLoaded", () => {
  kakao.maps.load(() => {
    // ===== 지도 기본 설정 =====
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.318, 126.8361),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // ===== 지도 컨트롤 =====
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // ===== 메인 마커 =====
    const markerPosition = new kakao.maps.LatLng(37.318, 126.8361);
    const marker = new kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);

    // ===== 커스텀 오버레이 =====
    const overlayContent = document.createElement("div");
    overlayContent.className = "pin__container";
    overlayContent.innerHTML = `
  <div class="info__wrap">
    <div class="img__container"></div>  
    <div class="info__text">
      <h2>라인 컴퓨터 아카데미</h2>
      <span>lineacademy@naver.com</span><br/>
      <span>031-365-5008</span>
    </div>
    <div class="close-btn">x</div>
  </div>
    `;

    const overlay = new kakao.maps.CustomOverlay({
      content: overlayContent,
      position: markerPosition,
      yAnchor: 1.3,
    });

    overlay.setMap(map);
    kakao.maps.event.addListener(marker, "click", () => overlay.setMap(map));
    overlayContent.querySelector(".close-btn").addEventListener("click", () => overlay.setMap(null));

    // ===== 실시간 교통정보 , 주차장 버튼 제어 =====
    const mapButtons = document.querySelectorAll(".mapTypeBox button");
    const trafficBtn = document.querySelector('.mapTypeBox button[data-type="traffic"]');
    let trafficOn = false; 
    let carparkOn = false; 

    mapButtons.forEach((btn) => {
      btn.addEventListener("click", () => {

        mapButtons.forEach((b) => b.classList.remove("active"));

        // === 교통정보 버튼 ===
        if (btn.dataset.type === "traffic") {
          if (!trafficOn) {

            map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
            btn.textContent = "실시간 교통정보";
            btn.classList.add("active");
            trafficOn = true;

            carparkMarkers.forEach((m) => m.setMap(null));
            carparkOn = false;
          } else {

            map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
            btn.textContent = "실시간 교통정보";
            trafficOn = false;
          }
        }

        // === 주차장 버튼 ===
        if (btn.textContent.includes("주차장")) {
          if (!carparkOn) {

            carparkMarkers.forEach((m) => m.setMap(map));
            btn.classList.add("active");
            carparkOn = true;

            map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
            trafficBtn.textContent = "실시간 교통정보";
            trafficOn = false;
          } else {

            carparkMarkers.forEach((m) => m.setMap(null));
            carparkOn = false;
          }
        }
      });
    });

    // ===== 주차장 마커 =====
    const markerSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png";
    const carparkPositions = [
      new kakao.maps.LatLng(37.31797240482048, 126.83718280680073),
      new kakao.maps.LatLng(37.31775322680515, 126.83612635081798),
      new kakao.maps.LatLng(37.31751271687612, 126.83467194048639),
    ];

    function createCategoryMarker(pos, spriteY) {
      const imageSize = new kakao.maps.Size(22, 26);
      const imageOptions = {
        spriteOrigin: new kakao.maps.Point(10, spriteY),
        spriteSize: new kakao.maps.Size(36, 98),
      };
      const markerImage = new kakao.maps.MarkerImage(markerSrc, imageSize, imageOptions);
      return new kakao.maps.Marker({ position: pos, image: markerImage, map: null });
    }

    const carparkMarkers = carparkPositions.map((pos) => createCategoryMarker(pos, 72));


    window.changeMarker = function (type) {
      if (type === "carpark") {
        carparkMarkers.forEach((m) => m.setMap(map));
      }
    };

    // ===== 날씨 API =====
    const apiKey = "98d8210428d495382adb2508710b0179";
    const temp = document.getElementById("temp");
    const place = document.getElementById("place");
    const wind = document.getElementById("wind");
    const des = document.getElementById("des");
    const icon = document.getElementById("icon");

    const getWeather = async (lat, lon) => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`
      );
      const data = await res.json();
      temp.textContent = data.main.temp;
      place.textContent = data.name;
      wind.textContent = data.wind.speed;
      des.textContent = data.weather[0].description;
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    };

    getWeather(37.318, 126.8361);
  });
});
