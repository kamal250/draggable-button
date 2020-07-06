import React, { useState } from "react";
import Draggable from "react-draggable";

const DraggableButton = () => {
  const initialBackground = {
    width: `900px`,
    height: `500px`,
    background: "#6ccdc5",
  };
  const handleOnDrag = () => {
    const colorCode = '0123456789abcdef';
    var color = "#";
    for(var i=0;i<6;i++){
        color += colorCode[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    //   Do some fun with height/width
    setBackground({
      width: `900px`,
      height: `500px`,
      background: `${color}`,
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
