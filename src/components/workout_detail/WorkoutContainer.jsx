import React from "react";
import WorkoutHeader from "./WorkoutHeader";
import WorkoutExercise from "./WorkoutExercise";
import "../../index.css";

const WorkoutContainer = () => {
  return (
    <main className={"page"}>
      <WorkoutHeader />
      <div className="flex flex-col justify-center mt-10 w-full">
        <div className="flex gap-4 pt-5 pb-7 pl-8">
          <WorkoutExercise />
          <button
            color="primary"
            onClick={"/"}
            className="flex justify-end items-center px-2 self-center bg-purple-600 rounded-l-3xl w-[8px] h-[100px]"
          />
        </div>
      </div>
    </main>
  );
};

export default WorkoutContainer;
