import React from 'react';
import facebook from '../../assets/icon/facebook.png';
import Twitter from '../../assets/icon/Twitter.png';
import linkedin from '../../assets/icon/linkedin.png';
import instagram from '../../assets/icon/instagram.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <img src={facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h2>CONTACT US</h2>
            <p>123 Second Street, Fifth <br/> Avenue, Manhatan, New York</p>
            <p>+71567895437</p>
          </div>
          <div className="footer-column">
            <h2>ADDITIONAL LINKS</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>CONTACT</h2>
            <form action="#">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" /><br />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" /><br />
              <label htmlFor="comment">Comment:</label>
              <textarea id="comment" name="comment" placeholder="Enter your comment"></textarea><br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
