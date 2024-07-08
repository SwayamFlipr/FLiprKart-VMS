import React from 'react';
import { Outlet } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { AiFillCaretRight } from 'react-icons/ai';

const TheLayout = () => {
  return (
    <div className=" flex w-screen h-screen overflow-hidden">
      <div className="text-white w-64 flex justify-center ">
        <div className=" w-full bg-[#5bc178] ">
          <div className="text-center text-white flex items-center justify-center mt-24">
            <AiFillCaretRight size={35} />
            <div className="flex items-center flex-1 justify-center">
              <IoMdHome size={26} />
              <div className="text-xl font-medium text-center">Dashboard</div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default TheLayout;
