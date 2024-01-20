import React from "react";
import { FaChevronRight, FaClipboardList, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-cyan-600 h-screen ">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#ededed]/[0.3]">
        <FaPaperPlane className="mr-2 size-8 text-rose-500" />
        <h1 className=" font-serif text-white text-[20px] leading-[24px] font-extrabold cursor-pointer text-center">
          Travel.id
        </h1>
      </div>
      <Link
        to="/"
        className="flex items-center gap-[15px] py-[20px] px-[15px] border-b-[1px] border-[#ededed]/[0.3]"
      >
        <FaTachometerAlt color="white" />
        <p className="text-[14px] leading-[20px] font bold text-white">Dashboard</p>
      </Link>
      <div className="pt-[15px] border-b[1px] border-[#ededed]/[0.3] px-[15px]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">Layanan</p>
        <Link
          to="/listTuris"
          className=" flex items-center justify-between gap-[10px] py-[15px] cursor-pointer"
        >
          <div className="flex items-center gap-[10px]">
            <FaClipboardList color="white" />
            <p className="text-[14px] leading-[20px] font-normal text-white list-none">List Turis</p>
          </div>
          <FaChevronRight color="white" />
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
