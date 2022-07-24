import React from "react";
import SideBarList from "./SideBarList";
import {RiFlashlightFill} from "react-icons/ri"

const SideBar = () => {
  return (
    <div className="col-span-3 ">
      <header className="flex gap-2 items-center cursor-pointer">
        <RiFlashlightFill fontSize="30" color="#def5f3"/>
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold mb-0 text-darkGray">ascb</h1>
          <p className="text-xs font-semiboldbold -mt-1">online learning</p>
        </div>
      </header>

      <div className="mt-24">
        <SideBarList/>
      </div>
    </div>
  );
};

export default SideBar;
