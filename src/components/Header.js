import React from "react";
import { Link } from "react-router-dom";

import "../designs/Header.css";

const Header = () => {
  return (
    <header>
      <h1>웹프로그래밍</h1>
      <Link to="/LoginScreen"><button>로그인</button></Link>
    </header>
  );
};

export default Header;
