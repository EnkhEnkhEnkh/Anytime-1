import React from "react";
import "../../index.css";

function WorkoutHeader() {
  return (
    <header className="header">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eac4bcdbb8e4d77d5a419d0ad6ec5f5f5a06ac968d1af640d070fbb7d942a142?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
        className="shrink-0 self-start aspect-square w-[45px]"
        alt=""
      />
      <h1 className="flex-auto my-auto">Workout</h1>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd76182a64f30d6565742f0a8f6c4db50496a55d1b7ce978d8329ef86395bc2e?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
        className="shrink-0 rounded-full border-purple-600 border-solid aspect-square border-[3px] w-[46px]"
        alt="User profile"
      />
    </header>
  );
}

export default WorkoutHeader;
