import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="footer-item">
            <div className="footer-branding">
              <img src="/images/footer-logo.png" alt="footer logo" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              accusantium?
            </p>
            <div className="copyright-border"></div>
            <div className="copyright">Copyright 2021 Nature</div>
          </div>
          <div className="footer-item">
            <h3 className="title">Information</h3>
            <div className="info-links">
              <a href="/">About us</a>
              <a href="/">Products</a>
              <a href="/">Contact us</a>
              <a href="/">Term of service</a>
            </div>
          </div>
          <div className="footer-item">
            <h3 className="title">Follow Us</h3>
            <div className="socials-link">
              <img src="images/fb.png" alt="facebook" />
              <img src="images/linkedin.png" alt="Linkedin" />
              <img src="images/insta.png" alt="instgram" />
            </div>
          </div>
        </div>
      </div>
      <img className="footer-png" src="images/footer.png" alt="" />
    </div>
  );
}

export default Footer;
