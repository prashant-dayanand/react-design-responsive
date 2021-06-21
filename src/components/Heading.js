import React from "react";

function Heading({ title, description }) {
  return (
    <div class="heading">
      <img src="/images/Group.png" alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Heading;
