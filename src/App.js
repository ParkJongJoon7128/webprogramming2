import React from "react";
import { Route, Routes } from "react-router-dom";

import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
};
export default App;
