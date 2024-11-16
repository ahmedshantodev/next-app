import React from "react";
import { RiStarLine, RiStarHalfFill, RiStarFill } from "react-icons/ri";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<RiStarFill key={i} className="text-[#fdc040] text-[14px]" />);
    } else if (i === Math.floor(rating) && rating % 1 !== 0) {
      stars.push(
        <RiStarHalfFill key={i} className="text-[#fdc040] text-[14px]" />
      );
    } else {
      stars.push(<RiStarLine key={i} className="text-[#fdc040] text-[14px]" />);
    }
  }

  return (
    <div className="star-rating flex justify-centers gap-x-[6px] mb-1">
      {stars}
    </div>
  );
};

export default StarRating;
