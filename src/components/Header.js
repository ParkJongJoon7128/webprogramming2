import React from "react";
import { Link } from "react-router-dom";

import "../designs/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>웹프로그래밍</h1>
      <Link to="/login">
        <button>로그인</button>
      </Link>
    </div>
  );
};

export default Header;
