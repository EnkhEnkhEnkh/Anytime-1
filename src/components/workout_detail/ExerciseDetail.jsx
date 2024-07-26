import React from "react";
import "../../index.css";

function ExerciseDetail({ icon, title, value, unit }) {
  return (
    <div className="flex gap-5 space-y-5 justify-between">
      <img
        loading="lazy"
        src={icon}
        className="mt-3 shrink-0 aspect-[1] w-2/5"
        alt=""
      />
      <div className="flex flex-col">
        <div className="purple-text">{title}</div>
        <div className="normal-text">
          <span className="">{value} </span>
          {unit && <span className="text-xs ">{unit}</span>}
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetail;
