import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

const DraggableButton = () => {
  return (
    <Draggable>
      <div>Drag this</div>
    </Draggable>
  );
};

export default DraggableButton;
