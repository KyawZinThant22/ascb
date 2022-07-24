import React from "react";
import { RiMessageFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import profile from "../assets/profile.jpg"
import { BsChevronDown } from "react-icons/bs"
import SummaryList from "./SummaryList";

const Summary = () => {
  return (
    <div className="col-span-3">
      <div className="flex justify-end gap-6 items-center relative">
        <div className="relative">
          <RiMessageFill className="text-3xl cursor-pointer" color="#def5f3" />
          <div className="w-[10px] h-[10px] rounded-full bg-pink absolute top-0 -right-1"></div>
        </div>
        <div className="relative">
          <IoMdNotifications className="text-3xl cursor-pointer" color="#ffe1a1" />
          <div className="w-[10px] h-[10px] rounded-full bg-pink absolute top-0 right-[1.8px]"></div>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
            <img src={profile} alt="profile img" className="rounded-full w-[45px] h-[45px]" />
            <BsChevronDown className="font-bold"/>
        </div>
      </div>
      <SummaryList/>
    </div>
  );
};

export default Summary;
