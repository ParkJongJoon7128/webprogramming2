import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Google from "../images/google.png";
import Kakao from "../images/kakao.png";
import FaceBook from "../images/fb.png";
import Naver from "../images/naver.png";

import "../designs/LoginScreen.css";

import { kakaoUrl } from "../datas/Oauth_data";

const LoginScreen = () => {

  const { kakao } = window;

    const kakaoLogin = () => {
      window.location.href = kakaoUrl;
    };

  return (
    <div className="LoginBody">
      <p>로그인을 하세요.</p>

      <div className="buttonBody">
        <button>
          <img src={Google} />
        </button>
        <button onClick={kakaoLogin}>
          <img src={Kakao} />
        </button>
        <button>
          <img src={FaceBook} />
        </button>
        <button>
          <img src={Naver} />
        </button>
      </div>

      <Link to="/">
        <button className="backButton">메인으로 돌아가기</button>
      </Link>
    </div>
  );
};

export default LoginScreen;
