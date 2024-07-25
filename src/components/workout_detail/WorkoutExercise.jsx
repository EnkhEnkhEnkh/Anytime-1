import React from "react";
import ExerciseItem from "./ExerciseItem";
import ExerciseDetail from "./ExerciseDetail";
import "../../index.css";

function WorkoutExercise() {
  const exerciseItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d856317a3766b08ce30a816ac70de5543d512c70407fbc838a0f4d407f339722?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21",
      label: "Мөр",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/35b0e4f1d1eda1ad578bc61001ea0913ee1f9ed1ad873feb8591253465f5ff49?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21",
      label: "Алчуур",
    },
  ];

  const exerciseDetails = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/84fbc53ad6036f1bedc121b563e17070d40f0183f227052cdbe269f347bdd714?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21",
      title: "Оролт",
      value: "3-4",
      unit: "(30 секундын зайтай)",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/400c3aa2a124b06621074910b1190031f696ccdb5d8e1fc41b510df5aca767d8?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21",
      title: "Давтах",
      value: "10-12",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/74e5620b6d885d0662b8f3480d6b0f864baaa8b1494f0e49e0557e8c734a403d?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21",
      title: "Нэмэлт",
      value: "Оролт бүрд усаа солих",
    },
  ];

  return (
    <section className={"exr"}>
      <div className={"bg-gray-gradiant"}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/561c286f547af43715607b7995b847d0aa9e22810efd1ba0c4e3bf16c88ebb8d?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
          className="shrink-0 max-w-full aspect-[0.48] w-[130px]"
          alt="Exercise illustration"
        />
        <div className="flex flex-col flex-1 self-start mt-4">
          <h2 className={"purple-text"}>Алчуур угаах</h2>
          <div className={"normal-text"}>
            {exerciseItems.map((item, index) => (
              <ExerciseItem key={index} icon={item.icon} label={item.label} />
            ))}
            {/* Timer */}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed1f90495bd531a440a63199e414ce21af6f0a16e74f8a5ebcdeaeefdedbeb44?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
              className="mt-8 ml-5 aspect-square w-[100px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start pr-20 pl-7 mt-8">
        {exerciseDetails.map((detail, index) => (
          <ExerciseDetail
            key={index}
            icon={detail.icon}
            title={detail.title}
            value={detail.value}
            unit={detail.unit}
          />
        ))}
        {/* tutorial video */}
        <button className={"button"}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e08b87f107f08b929d12eef622a470c460462d68f6930edc67a2c8c3bd8687ba?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
            alt="Start exercise"
          />
        </button>
      </div>
    </section>
  );
}

export default WorkoutExercise;
