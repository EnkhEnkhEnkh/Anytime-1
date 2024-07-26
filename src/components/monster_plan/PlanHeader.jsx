import React from "react";

function Header(bodyIndex) {
  bodyIndex = 0;
  var title;
  switch (bodyIndex) {
    case 0:
      title = "Monster plan";
      break;
    case 1:
      title = "Pretty plan";
      break;
    case 2:
      title = "Gaint plan";
      break;
  }

  return (
    <header className="header">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e466dc55f26b7dee26ce2c20ef8ba3a315a941d65e0465a931fc4fba913b0b?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
        className="shrink-0 self-start aspect-square w-[45px]"
        alt=""
      />
      <h1 className="flex-auto">{title}</h1>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd76182a64f30d6565742f0a8f6c4db50496a55d1b7ce978d8329ef86395bc2e?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
        className="shrink-0 rounded-full border-purple-600 border-solid aspect-square border-[3px] w-[46px]"
        alt=""
      />
    </header>
  );
}

export default Header;
