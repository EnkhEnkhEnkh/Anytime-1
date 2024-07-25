import React from "react";
import "../../index.css";

function ExerciseDetail({ icon, title, value, unit }) {
  return (
    <div className="flex gap-5 space-y-5 justify-between">
      <img
        loading="lazy"
        src={icon}
        className="mt-3 shrink-0 aspect-[1] w-[52px]"
        alt=""
      />
      <div className="flex flex-col my-auto">
        <div className="text-lg font-bold tracking-normal leading-5 text-purple-600">
          {title}
        </div>
        <div className="mt-2.5 text-base font-semibold tracking-normal leading-5 text-white">
          <span className="">{value} </span>
          {unit && <span className="text-xs ">{unit}</span>}
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetail;
