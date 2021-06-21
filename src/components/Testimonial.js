import React from "react";
import Rating from './Rating'

function Testimonial({name, comment, rating, image}) {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="testimonial-item">
          <img className="quote-img" src="/images/quote.png" alt="" />
          <img className="user-img" src={image} alt="" />
          <h3>{name}</h3>
          <Rating value={rating}/>
          <p>
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
