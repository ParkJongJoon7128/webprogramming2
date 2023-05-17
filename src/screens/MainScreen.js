import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../designs/MainScreen.css";

import KakaoMap from "../components/KakaoMap";
import { KAKAO_REST_KEY, KAKAO_client_id } from "../datas/Oauth_data";

const MainScreen = () => {
  useEffect(() => {
    const KakaoRedirectHandler = async () => {
      const params = new URL(window.location.toString()).searchParams;
      const code = params.get("code");
      const grant_type = "authorization_code";

      try {
        const response = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${KAKAO_client_id}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${code}`,
          {},
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );

        console.log(response.data); // 토큰 출력
      } catch (error) {
        console.log(error);
      }
    };

    KakaoRedirectHandler();
  }, []);

  return (
    <div>
      <div className="Header">
        <h1>웹프로그래밍</h1>
      </div>
      <div>
        <div className="Body">
          <section className="Left_Section">한글</section>
          <section className="Right_Section">
            <div className="Top_Aside">
              <Link to="/login">
                <button className="LoginButton">로그인</button>
              </Link>
            </div>
            <div className="Bottom_Aside">
              <KakaoMap />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default MainScreen;


  // const code = new URL(window.location.href).searchParams.get("code");
  // console.log(code);
