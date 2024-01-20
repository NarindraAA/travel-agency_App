import React from "react";
import Welcome from "../assets/travel.png";

const Main = () => {
  return (
    <div className="py-[25px] px-[25px] bg-[#f8f9fc] h-[5rem]">
      <div className="flex item-center justify-between">
        <h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">Dashboard</h1>
      </div>
      <div className="flex my-[22px] w-full">
        <div className="basis-[100%] border bg-white shadow-lg rounded-[4px] flex justify-center items-center">
          <img src={Welcome} alt="" className="h-[28rem]" />
        </div>
      </div>

      {/* <div className='mt-[10px] snap-x'>
            <div className='snap-center'>
                <img src={Welcome} alt='' className='size-9/12'/>
            </div>
        </div> */}
    </div>
  );
};
export default Main;
