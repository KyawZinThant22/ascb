import React, { useState } from "react";
import { BiExpand } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const Questions = ({ card, index }) => {
  const [open, setOpen] = useState(false);
  const { text, color, bgColor } = card;

  return (
    <>
      <div className="mt-4 flex items-center gap-3 ">
        <BiExpand
          fontSize="30"
          className={`${open && "self-start"} cursor-pointer`}
          color="#5a5bb5"
        />
        <div
          className={`${
            open ? "bg-white" : "bg-pureLight"
          } p-3 px-5  rounded-lg w-full shadow-md  h-[5rem] ${
            open ? "h-[12rem]" : "h-[5rem]"
          } `}
          id="main"
        >
          <div className="flex justify-between items-center cursor-pointer mt-2 ">
            <div className="flex items-center gap-4" onClick={()=> setOpen(!open)}>
              <div className={` ${bgColor} p-2 px-3 rounded-lg text-white`}>
                {color}
              </div>
              <card.icon color="#000" />
              <p>{text}</p>
            </div>
            <div className="flex item justify-end gap-4">
                <AiFillEye
                  color="#5a5bb5"
                  fontSize="25"
                  className="cursor-pointer"
                />
              <FaTrashAlt
                fontSize="20"
                color="#e6939a"
                className="cursor-pointer"
              />
            </div>
          </div>
          {open && (
            <div
              className="mt-8 flex justify-between items-center px-6 pr-36 "
              id="details"
            >
              <div className="flex flex-col gap-4">
                <h1>Project:</h1>
                <p className="tracking-wide text-md">ASCEPT Project</p>
              </div>
              <div className="flex flex-col gap-4">
                <h1>Topic:</h1>
                <p className="tracking-wide text-md">
                  {" "}
                  Evolution & Natural <br /> Selection
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h1>Key Ideas:</h1>
                <p className="tracking-wide text-md">CE 5C / M1 A</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Questions;
