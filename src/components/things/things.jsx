import React from 'react';
import london from '../../assets/images/London.jpg';

function ThingsToDo() {
  return (
    <section className="things">
      <div className="parent">
      <h1 className="heading">BEST THINGS TO DO, LONDON</h1>
    </div>
    <div className="para">
      <span className="child">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
    </div>
    <div className="img">
      <img src={london} />
    </div>
    </section>
  );
}

export default ThingsToDo;
