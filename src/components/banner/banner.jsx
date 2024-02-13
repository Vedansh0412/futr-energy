import React from 'react';
import bannerimage from '../../assets/images/travel-banner.jpeg'
import SearchForm from '../form/searchform';

function Banner() {
  return (<section className="banner">
  <img src={bannerimage} alt="React Image" />
<div className="banner-content">
  <h1><span className="trv">TRAVEL</span><br />WITH US</h1>
  <div className="button"><a href="#">Read More</a></div>
  <div id="react-form-container">
  </div>
</div>

</section>
);
}

export default Banner;
