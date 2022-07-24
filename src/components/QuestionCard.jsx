import React, { useState, useRef } from "react";
import { questionCard } from "../data/data";
import Questions from "./Questions";

const QuestionCard = () => {
 const [list , setList ] = useState(questionCard)
  const dragItem = useRef();
  const dragOverItem = useRef(); 
  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

    const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };
  return (
    <div className="mt-10">
      <div>
        {list.map((card, index) => (
          <div
            draggable
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
               onDragEnd={drop}
            key={index}
          >
            <Questions card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
