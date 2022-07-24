import React from "react";
import { sidebar } from "../data/data";

const SideBarList = () => {
  return (
    <>
      <div className="w-[18rem] flex flex-col gap-20 px-6">
        {sidebar.map((list) => (
          <div className="flex justify-between cursor-pointer" key={list.text}>
            <h3 className="text-xl text-gray-400 hover:text-darkGray font-bold main " id="a">
              {list.text}
            </h3>
            <span  id="b">
              <list.icon
                fontSize="25"
              />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBarList;
