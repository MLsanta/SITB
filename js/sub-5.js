var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.318, 126.8361), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

var markerPosition = new kakao.maps.LatLng(37.318, 126.8361);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent =
    '<div class="pin__container"><div class="img__container"></div><h2>라인 컴퓨터 아카데미</h2><span>lineacademy@naver.com</span><span>031-365-5008</span></div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
});

// 마커에 마우스오버 이벤트를 등록합니다
kakao.maps.event.addListener(marker, "mouseover", function () {
    // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
    infowindow.open(map, marker);
});

// 마커에 마우스아웃 이벤트를 등록합니다
kakao.maps.event.addListener(marker, "mouseout", function () {
    // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
    infowindow.close();
});
map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
