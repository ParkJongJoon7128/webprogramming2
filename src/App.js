import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/LoginScreen" component={LoginScreen} />
    </BrowserRouter>
  );
};
export default App;
