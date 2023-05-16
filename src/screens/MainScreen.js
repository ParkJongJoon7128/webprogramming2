import React from "react";
import { Link } from "react-router-dom";

import "../designs/MainScreen.css";

const MainScreen = () => {
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
            <div className="Bottom_Aside">asdasd</div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default MainScreen;
