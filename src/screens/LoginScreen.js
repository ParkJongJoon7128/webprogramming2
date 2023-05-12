import React from "react";

import Google from "../images/google.png";
import Kakao from "../images/kakao.png";
import FaceBook from "../images/fb.png";
import Naver from "../images/naver.png";

import "../designs/LoginScreen.css";

const LoginScreen = () => {
  return (
    <login>
      <image src={Google} />
      <image src={Kakao} />
      <image src={FaceBook} />
      <image src={Naver} />
    </login>
  );
};

export default LoginScreen;
