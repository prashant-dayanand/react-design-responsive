import React, { useState } from "react";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="branding">
            <img src="images/banner/banner-img2.png" alt="" />
            <h2>organic</h2>
          </div>
          <div className="menus">
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option mobile-option" onClick={closeMobileMenu}>Home</li>
              <li className="option mobile-option" onClick={closeMobileMenu}>Product</li>
              <li className="option mobile-option" onClick={closeMobileMenu}>Blog</li>
              <li className="option mobile-option" onClick={closeMobileMenu}>About us</li>
              <li className="option mobile-option" onClick={closeMobileMenu}>
                <button>Contact</button>
              </li>
            </ul>
          </div>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
