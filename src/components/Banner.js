import React from "react";

function Banner() {
  return (
    <header className="header">
      <div className="container">
        <div className="banner">
          <div className="banner-left">
            <p className="banner-left-top">Healthy life with</p>
            <h2>Nature Organic</h2>
            <p className="banner-left-info">
              Vegetables are the edible parts of a plant that is used in cooking
              or can be eaten now.
            </p>
            <button className="banner-btn">Explore Now</button>
          </div>
          <div className="banner-right">
            <div className="banner-images">
              <div className="img-box">
                {/* <div className="img-1">
                  <img src="images/banner/banner-img.png" alt="" />
                </div>
                <div className="img-2">
                  <img src="images/banner/banner-img2.png" alt="" />
                </div> */}
                <img src="images/banner/bannerImg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
