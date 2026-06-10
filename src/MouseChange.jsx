import React from "react";

const MouseChange = () => {
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "Blue";
  };
  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "transparent";
  };
  const handleMouseDown = (e) => {
    console.log("Mouse button pressed!");
  };
  const handleMouseUp = (e) => {
    console.log("Mouse button released!");
  };
  const handleMouseMove = (e) => {
    console.log(`Mouse moved to (${e.clientX}, ${e.clientY})`);
  };
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="border-2 border-gray-300 p-8 w-64 h-32 flex items-center justify-center rounded-lg"
    >
      MouseChange
    </div>
  );
};

export default MouseChange;
