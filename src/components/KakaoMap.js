/*global kakao */

import React, { useEffect, useState } from "react";

const KakaoMap = () => {
  const { kakao } = window;

  // 처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.2757, 127.1325),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(
      37.2757, 127.1325
    );

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var iwContent =
        '<div style="padding:5px;">강남대학교<br><a href="https://map.kakao.com/link/map/강남대학교 입구,37.273629699499, 127.12928668205" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/강남대학교 입구,37.273629699499, 127.12928668205" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(37.2757, 127.1325); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default KakaoMap;
