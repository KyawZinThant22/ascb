import React from "react";
import {RiSearchLine} from "react-icons/ri"
import { BiLeftArrowAlt} from "react-icons/bi"
import DashboardHeader from "./DashboardHeader";
import QuestionCard from "./QuestionCard";
import {MdAdd} from "react-icons/md"

const Dashboard = () => {
  return (
    <div className="col-span-6">
      <div className="flex justify-between w-[26rem] items-center relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-pureLight p-3 rounded-lg w-full text-lg"
        />
        <RiSearchLine className="absolute right-5 text-primary font-bold text-xl"/>
      </div>
      <div className="mt-5">
          <div className="flex gap-2 items-center cursor-pointer">
            <BiLeftArrowAlt fontSize="25" color="#5a5ab5"/>
            <h4 className="font-semibold text-md text-darkGray mb-0">Back to list</h4>
          </div>
      </div>
      <DashboardHeader/>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-darkGray font-bold text-[20px]">Questions</h1>
          <div className="bg-primary p-3 px-4 rounded-lg hover:bg-blue-900 " >
            <button aria-label="add question button" className="flex items-center gap-2 text-white ">
            <MdAdd color="#ffffff" fontSize="20"/> <span>Add question</span>
            </button>
          </div>
        </div>
          <QuestionCard/>
      </div>
    </div>
  );
};

export default Dashboard;
