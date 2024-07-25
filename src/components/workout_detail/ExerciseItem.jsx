import React from "react";
import "../../index.css";

function ExerciseItem({ icon, label }) {
  return (
    <div className="flex gap-5 justify-center">
      <img
        loading="lazy"
        src={icon}
        className="shrink-0 aspect-square w-[30px]"
        alt=""
      />
      <div className="my-auto">{label}</div>
    </div>
  );
}

export default ExerciseItem;
