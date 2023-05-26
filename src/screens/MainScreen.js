import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../designs/MainScreen.css";

import KakaoMap from "../components/KakaoMap";
import { KAKAO_client_id, KAKAO_redirect_uri } from "../datas/Oauth_data";

const MainScreen = () => {

  const [loginButtonText, setLoginButtonText] = useState("로그인"); // 상태 추가
  const [showText, setShowText] = useState("");

  useEffect(() => {
    const params = new URL(window.location.href).searchParams
    const code = params.get("code");
    const grant_type = "authorization_code";
  
    const getToken = async () => {
      try {
        const response = await axios.post(
          // `https://kauth.kakao.com/oauth/token`,
          `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${KAKAO_client_id}&redirect_uri=${KAKAO_redirect_uri}&code=${code}`,
          {
            // grant_type: grant_type,
            // client_id: KAKAO_client_id,
            // redirect_uri: KAKAO_redirect_uri,
            // code: code,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
              //Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
            },
          }
        ).then((res) => {
          console.log(res);
          const { data } = res;
          const { access_token } = data;

          if(access_token){
            console.log(`Bearer ${access_token}`);
            axios.post(
              "https://kapi.kakao.com/v2/user/me",
              {},
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                  Authorization: `Bearer ${access_token}`,
                },
              }
            ).then((res) => {
              console.log(res);
              setLoginButtonText(res.data.properties.nickname);
              setShowText("환영합니다");
            });
          } else{
            console.log("there is no access_token");
          }
        })
      } catch (error) {
        console.log(error);
      }
    };
  
    if (code) {
      getToken();
    }
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
                {/* <button className="LoginButton">로그인</button> */}
                <button className="LoginButton">{loginButtonText} <br/> {showText}</button>
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

// useEffect(()=> {
//   const code = new URL(window.location.href).searchParams.get("code");
//   console.log(code);
// }, []);

// const KakaoRedirectHandler = async () => {
// const params = new URL(window.location.toString()).searchParams;
// const code = params.get("code");
// const grant_type = "authorization_code";

//   try {
//     axios
//       .post(
//         `https://kauth.kakao.com/oauth/token?
//     grant_type=${grant_type}
//     &client_id=${KAKAO_client_id}
//     &redirect_uri=http://localhost:3000/oauth/callback/kakao
//     &code=${code}`,
//         {
// headers: {
//   "Content-type":
//     "application/x-www-form-urlencoded;charset=utf-8",
// },
//         }
//       )
//       .then((res) => {
//         console.log(res.data); // 토큰 출력
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

// KakaoRedirectHandler();
