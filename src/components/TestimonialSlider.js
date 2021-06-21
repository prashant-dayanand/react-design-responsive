import React from "react";
import Testimonial from "./Testimonial";
import Carousel from "react-elastic-carousel";
import users from "../user";

function TestimonialSlider() {
  return (
    <div className="testimonial-slider">
      <img className="side-img" src="images/branch.png" alt="" />
      <div className="container">
        <Carousel itemsToShow={1} showArrows={false}>
          {users.map((user) => {
            return (
              <>
                <Testimonial
                  name={user.name}
                  rating={user.rating}
                  image={user.image}
                  comment={user.comment}
                />
              </>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default TestimonialSlider;
