import React, { useState } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

const DraggableButton = () => {
  const initialBackground = {
    width: `900px`,
    height: `500px`,
    background: "#6ccdc5",
  };
  const handleOnDrag = () => {
    //   Do some fun with height/width
    setBackground({
      width: `900px`,
      height: `500px`,
      background: "#000",
    });
  };
  const [background, setBackground] = useState(initialBackground);
  return (
    <div style={background}>
      <Draggable onDrag={() => handleOnDrag()}>
        <div>Drag this</div>
      </Draggable>
    </div>
  );
};

export default DraggableButton;
