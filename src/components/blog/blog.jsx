import React from 'react';
import blog1 from '../../assets/images/blog-image0.jpg';
import blog2 from '../../assets/images/blog-image.jpg';

function Blog() {
  return (
    <section className="blog">
    <div className="parent">
      <h1 className="heading">OUR BLOG</h1>
      <div className="para">
        <span className="child">Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
      </div>
      <div className="list-blog"> 
        <div className="item">
          <div className="item-content"><img src={blog1} alt="travel-icon" /></div>
          <div className="item-content">
            <div className="details">
              <div className="left"><p><span className="owner" id="light-blue">Post by: Nisha Sharma</span> </p></div>
              <div className="right"><p><span id="light-blue">05 <span className="likes">Likes</span></span> <span id="light-blue">06 <span className="likes"> Comments</span></span></p></div>
            </div>
            <h2><span>More Places To Explore</span></h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
        </div>
        <div className="item">
          <div className="item-content"><img src={blog2} alt="travel-icon" /></div>
          <div className="item-content">
            <div className="details">
              <div className="left"><p><span className="owner" id="light-blue">Post by: Nidhi Sharma</span> </p></div>
              <div className="right"><p><span id="light-blue">05 <span className="likes">Likes</span></span> <span id="light-blue">06 <span className="likes"> Comments</span></span></p></div>
            </div>
            <h2><span>More Places To Explore</span></h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Blog;
