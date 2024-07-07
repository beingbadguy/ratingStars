import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";

const App = () => {
  const numberOfStars = 5;
  const [stars, setStars] = useState(null);
  const [hover, setHover] = useState(null);
  const handleClick = (index) => {
    setStars(index);
  };
  const handleEnter = (index) => {
    setHover(index);
  };
  const handleLeave = (index) => {
    setHover(stars);
  };
  return (
    <div className="flex justify-center">
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <IoStarSharp
            key={index}
            className={`${
              index <= (stars || hover) ? "text-red-600" : ""
            } h-20 w-16 cursor-pointer`}
            onClick={() => {
              handleClick(index);
            }}
            onMouseEnter={() => {
              handleEnter(index);
            }}
            onMouseLeave={() => {
              handleLeave(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default App;
