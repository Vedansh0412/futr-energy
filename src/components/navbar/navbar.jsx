import React from 'react';
import logo from '../../assets/images/logo-2.png';
import location from '../../assets/images/1.png';
import phone from '../../assets/images/2.png';
import mail from '../../assets/images/3.png';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <div className="top-links">
          <ul>
            <li><span className="icon"><img src={location} alt="Icon 1" /></span> <span>145 Street Road, New York</span></li>
            <li><span className="icon"><img src={phone} alt="Icon 2" /></span> <span>+71567895437</span></li>
            <li><span className="icon"><img src={mail} alt="Icon 3" /></span> <span>Demo@hmail.com</span></li>
          </ul>
        </div>

        <div className="bottom-links">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">TRAVEL</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
