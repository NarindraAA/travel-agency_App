import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../App";
import Main from "../components/Main";
import Tabelturis from "../components/Tabelturis";
import LoginSignup from "../components/LoginSignup";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Main />} />
          </Route>
          <Route path="/listTuris" element={<App />}>
            <Route index element={<Tabelturis />} />
          </Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
