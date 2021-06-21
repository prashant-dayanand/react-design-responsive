import React from "react";
import Heading from "./Heading";

function Food() {
  return (
    <div className="food">
      <div className="container">
        <Heading
          title="Welcome to Nature"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores totam perspiciatis, nam ipsa ullam debitis!"
        />
        <div className="food-box">
          <div className="food-item">
            <img src="/images/food.png" alt="" />
          </div>
          <div className="food-item">
            <img src="/images/food-dark.png" alt="" />
          </div>
          <div className="food-item">
            <img src="/images/food.png" alt="" />
          </div>
          <div className="food-item">
            <img src="/images/food.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
