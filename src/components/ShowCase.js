import React from "react";
import Heading from "./Heading";
import Carousel from "react-elastic-carousel";

function ShowCase() {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <div className="showcase">
      <div className="container">
        <div className="showcase-box">
          <Heading
            title="Proudly presented by"
            description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores totam perspiciatis, nam ipsa ullam debitis!"
          />
          <Carousel breakPoints={breakPoints} itemsToShow={4} showArrows={false}>
            <img src="images/presented1.png" alt="" />
            <img src="images/presented2.png" alt="" />
            <img src="images/presented3.png" alt="" />
            <img src="images/presented1.png" alt="" />
            <img src="images/presented2.png" alt="" />
            <img src="images/presented3.png" alt="" />
            <img src="images/presented1.png" alt="" />
            <img src="images/presented2.png" alt="" />
            <img src="images/presented3.png" alt="" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
