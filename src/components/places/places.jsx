import React from 'react';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';

function Places() {
  return (
    <section className="places">
      <div className="parent">
        <h1 className="heading">BEST PLACES AROUND</h1>
      </div>
      <div className="para">
        <span className="child">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>
      </div>
      <div className="list-places">
        <div className="item">
          <div className="item-content"><img src={img1} alt="travel-icon" /></div>
          <div className="item-content">
            <h2><span>Holiday Tour</span></h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>
        </div> 
        <div className="item">
          <div className="item-content"><img src={img2} alt="travel-icon" /></div>
          <div className="item-content">
            <h2><span>New York</span></h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>
        </div>
        <div className="item">
          <div className="item-content"><img src={img3} alt="travel-icon" /></div>
          <div className="item-content">
            <h2><span>London</span></h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Places;
