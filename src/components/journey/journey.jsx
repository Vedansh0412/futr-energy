import React from 'react';
import aeroplane from '../../assets/images/plane-img.png';

function Journey() {
  return (
    <section className="journey">
      <div className="parent">
      <h1 className="heading">OUR JOURNEY OF TRAVEL</h1>
    </div>
    <div className="para">
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </div>

    <div className="te-im">
      <div className="p">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
        </p>
      </div>
      <div className="i"><img src={aeroplane} /></div>      
    </div>
    <div className="button-te"><a href="#">Read More</a></div>
    </section>
  );
}

export default Journey;
