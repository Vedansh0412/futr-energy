import React from 'react';
import amazing from '../../assets/images/Amazing.jpg';

function Guide() {
  return (
    <section className="guide">
      <img src={amazing} alt="Travel-banner" />
    <div className="guide-content">
      <h1><span className="heading-italy">ITALY TRAVEL GUIDE</span></h1>
      <div className="para">
        <span className="child">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</span>
      </div>
      <div className="links">
        <div className="button-li"><a href="#">Book Now</a></div>
        <div className="button-li"><a href="#">Get More</a></div>
      </div>
      
    </div>
    </section>
  );
}

export default Guide;
