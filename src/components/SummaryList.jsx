import React from "react";
import SummaryQuestion from "./SummaryQuestion";
import { MdAdd } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import LastEdit from "./LastEdit";
import SummaryAction from "./SummaryAction";

const SummaryList = () => {
  return (
    <div className="mt-24 p-4 px-6 rounded-xl bg-pureLight mb-12">
      <h1 className="text-3xl font-bold text-darkGray">Test Summary</h1>
      <div className="mt-10">
        <SummaryQuestion
          title="Questions"
          number="17"
          amount="Elements"
          icon={<MdAdd color="#5a5ab5" fontSize="25"  className="cursor-pointer"/>}
          question="Add question"
        />
      </div>
      <div className="mt-16">
        <SummaryQuestion
          title="Responses"
          number="73"
          amount="Students"
          icon={<AiOutlineEye color="#5a5ab5" fontSize="25" className="cursor-pointer" />}
          question="View results"
        />
      </div>
      <LastEdit/>
      <SummaryAction/>
    </div>
  );
};

export default SummaryList;
