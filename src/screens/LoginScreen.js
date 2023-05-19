import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";


import Google from "../images/google.png";
import Kakao from "../images/kakao.png";
import FaceBook from "../images/fb.png";
import Naver from "../images/naver.png";

import "../designs/LoginScreen.css";

import {
  kakaoUrl,
  naverUrl,
  GOOGLE_client_id,
} from "../datas/Oauth_data";
import { GoogleOAuthProvider } from "@react-oauth/google";

const LoginScreen = () => {
  const { kakao } = window;

  const kakaoLogin = () => {
    window.location.href = kakaoUrl;
  };

  const naverLogin = () => {
    window.location.href = naverUrl;
  };

  const responseGoogle = (response) => {
    console.log(response); // 로그인 성공 시 구글 사용자 정보 출력
  };

  const renderGoogleButton = ({ onClick }) => (
    <img src={Google} alt="Google" onClick={onClick} />
  );

  return (
    <div className="LoginBody">
      <p>로그인을 하세요.</p>

      <div className="buttonBody">
        <GoogleOAuthProvider clientId={GOOGLE_client_id}>
          <GoogleLogin
            onSuccess={responseGoogle}
            onFailure={responseGoogle} // 실패 시에도 동작하도록 설정하려면 추가
            render={renderGoogleButton}
            cookiePolicy={"single_host_origin"}
          />
        </GoogleOAuthProvider>

        <button onClick={kakaoLogin}>
          <img src={Kakao} />
        </button>
        <button onClick={naverLogin}>
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
