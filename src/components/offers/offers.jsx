import React from 'react';
import travel1 from '../../assets/icon/travel-icon.png';
import travel2 from '../../assets/icon/travel-icon2.png';
import travel3 from '../../assets/icon/travel-icon3.png';
import travel4 from '../../assets/icon/travel-icon4.png';

function Offers() {
  return (
    <section className="offers">
      <div className="parent">
      <h1 className="heading">SELECT OFFERS FOR TRAVELLING</h1>
    </div>
    <div className="para">
      <span className="child">It is a long established tact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
    </div>
    <div className="list">
      <div className="item">
        <div className="item-content"><img src={travel1} alt="travel-icon" /></div>
        <div className="item-content">
          <h2><span>Different Countries</span></h2>
          <p>There are many variations of passages of lorem ipsum.</p>
          <div className="button-li"><a href="#">Read More</a></div>
        </div>
      </div>
      <div className="item">
        <div className="item-content"><img src={travel2} alt="travel-icon" /></div>
        <div className="item-content">
          <h2><span>Mountain Tours</span></h2>
          <p>There are many variations of passages of lorem ipsum.</p>
          <div className="button-li"><a href="#">Read More</a></div>
        </div>
      </div>
      <div className="item">
        <div className="item-content"><img src={travel3} alt="travel-icon" /></div>
        <div className="item-content">
          <h2><span>Bus Tours</span></h2>
          <p>There are many variations of passages of lorem ipsum.</p>
          <div className="button-li"><a href="#">Read More</a></div>
        </div>
      </div>
      <div className="item">
        <div className="item-content"><img src={travel4} alt="travel-icon" /></div>
        <div className="item-content">
          <h2><span>Summer Rest</span></h2>
          <p>There are many variations of passages of lorem ipsum.</p>
          <div className="button-li"><a href="#">Read More</a></div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Offers;
