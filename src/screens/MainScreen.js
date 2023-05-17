import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../designs/MainScreen.css";

import KakaoMap from "../components/KakaoMap";
import { REST_KEY } from "../datas/KAKAO_Data";
import axios from "axios";

const MainScreen = () => {

  const KakaoRedirectHandler = () => {
    useEffect(()=> {
      let params = new URL(document.location.toString()).searchParams;
      let code = params.get('code');
      let grant_type = "authorization_code";
      let client_id = REST_KEY;

      axios.post(``)
    }, []);
  }

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
               <KakaoMap/>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default MainScreen;
