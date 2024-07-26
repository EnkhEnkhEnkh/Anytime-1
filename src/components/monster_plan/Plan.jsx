import React, { useState } from "react";
import Header from "./PlanHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../index.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Plan from "../plans.json";

import { EffectCoverflow, Pagination } from "swiper/modules";

const monster_plan = [
  {
    day: "Monday",
    excercise_names:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    day: "Tuesday",
    excercise_names: "list",
  },
  {
    day: "Wednesday",
    excercise_names: "list",
  },
  {
    day: "Thursday",
    excercise_names: "list",
  },
];

const pretty_plan = [
  {
    day: "Monday",
    excercise_names: "list",
  },
  {
    day: "Tuesday",
    excercise_names:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    day: "Wednesday",
    excercise_names: "list",
  },
  {
    day: "Thursday",
    excercise_names: "list",
  },
];

const gaint_plan = [
  {
    day: "Monday",
    excercise_names: "list",
  },
  {
    day: "Tuesday",
    excercise_names: "list",
  },
  {
    day: "Wednesday",
    excercise_names:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    day: "Thursday",
    excercise_names: "list",
  },
];

const MonsterPlan = (bodyIndex) => {
  bodyIndex = 1;
  Header(bodyIndex);
  var plan_name;
  switch (bodyIndex) {
    case 0:
      plan_name = monster_plan;
      break;
    case 1:
      plan_name = pretty_plan;
      break;
    case 2:
      plan_name = gaint_plan;
      break;
  }
  const [active, setActive] = useState(null);

  return (
    <main className="page">
      <Header />
      <div className="flex h-screen items-center max-w-5xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          initialSlide={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 350,
            modifier: 1,
          }}
          spaceBetween={-80}
          slidesPerView={2}
          modules={[EffectCoverflow, Pagination]}
          onSlideChange={(cur) => setActive(cur.realIndex)}
          onClick={() => {}}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-3/5 content-between"
        >
          {plan_name.map((detail, index) => (
            <div className="h-96 flex">
              <SwiperSlide key={index}>
                <div
                  className={`${
                    active === index ? "slide-active" : "slide"
                  } flex flex-col justify-center h-full`}
                >
                  <h2
                    className={`${
                      active === index ? "white-text" : "purple-text"
                    }`}
                  >
                    {detail.day}
                  </h2>
                  <p>{detail.excercise_names}</p>
                  <button className={`${active === index ? "button" : ""}`}>
                    Эхлэх
                  </button>
                </div>
              </SwiperSlide>
            </div>
          ))}
          <div className="pagination"></div>
        </Swiper>
      </div>
    </main>
  );
};

export default MonsterPlan;
