import React, { useState } from "react";
import { Link } from "react-router-dom";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className=" flex flex-col items-center justify-center h-[100vh] bg-gradient-to-b from-cyan-600 to-red-400">
      <div className="flex flex-col bg-white rounded-md">
        <div className="flex flex-col items-center gap-[9px] w-full mt-[30px]">
          <div className="text-cyan-700 text-[48px] font-bold">{action}</div>
          <div className="w-[61px] h-[6px] bg-cyan-700 rounded-[9px]"></div>
        </div>
        <div className="mt-[55px] flex flex-col gap-[25px]">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="flex items-center m-auto w-[380px] h-[80px] bg-slate-200 rounded-[16px]">
              <img src={user_icon} alt="" className=" mx-6" />
              <input
                type="text"
                placeholder="Nama"
                className="h-[40px] w-[350px] bg-transparent rounded-none outline-none bg-slate-50 text-l mr-2 rounded-lg"
              />
            </div>
          )}

          <div className="flex items-center m-auto w-[380px] h-[80px] bg-slate-200 rounded-[16px]">
            <img src={email_icon} alt="" className=" mx-6" />
            <input
              type="email"
              placeholder="Email"
              className="h-[40px] w-[350px] bg-transparent rounded-none outline-none bg-slate-50 text-l mr-2 rounded-lg"
            />
          </div>
          <div className="flex items-center m-auto w-[380px] h-[80px] bg-slate-200 rounded-[16px]">
            <img src={password_icon} alt="" className=" mx-6" />
            <input
              type="password"
              placeholder="Password"
              className="h-[40px] w-[350px] bg-transparent rounded-none outline-none bg-slate-50 text-l mr-2 rounded-lg"
            />
          </div>
        </div>
        <div className="flex gap-[20px] my-[40px] mx-auto">
          <div
            className="flex justify-center items-center w-[180px] h-[59px] ml-5 text-white bg-cyan-800 rounded-[50px] text-sm cursor-pointer font-bold"
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign UP
          </div>
          <Link to="/">
            <div
              className="flex justify-center items-center w-[180px] h-[59px] mr-5 text-neutral-500 bg-slate-200 rounded-[50px] text-sm cursor-pointer font-bold"
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
