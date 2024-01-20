import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import profile from "../assets/profil.jpeg";

const Home = () => {
  const [open, setopen] = useState(false);
  const Menus = ["Profile", "Logout"];
  return (
    <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
      <div className="flex items-center rounded-[5px]">
        <input
          type="text"
          className="bg-[#f8f9fc] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placoholder:text-[14px] leading-[20px] font-normal"
          placeholder="Cari......"
        />
        <div className="bg-cyan-600 h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <FaSearch color="white" />
        </div>
      </div>
      <div className="flex item-center gap-[15px] relative">
        <div className="flex item-center gap-[15px] relative">
          <p className="self-center">Narindra Arifta</p>
          <div className="cursor-pointer items-center justify-center relative">
            <img src={profile} alt="" className="h-10 rounded-full" onClick={() => setopen(!open)} />
            {open && (
              <div className="bg-white p-4 w-max shadow-lg absolute right-0 top-12 border-2">
                <ul>
                  {Menus.map((menu) => (
                    <Link to="/login">
                      <li
                        onClick={() => setopen(false)}
                        className="p-2 text-lg cursor-pointer rounded hover:bg-cyan-100"
                        key={menu}
                      >
                        {menu}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col">
        <ul className="flex flex-col gap-4">
          <li>Profil</li>
          <li>Logout</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Home;
