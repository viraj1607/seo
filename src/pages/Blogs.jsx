import React from "react";
import "../css/blogs.css";
import { Helmet } from "react-helmet";

function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs - Bedjet</title>
      </Helmet>
      <div className="blogs-container">
        <h2>Blogs</h2>
        <div>
          <h4>Introduction to Memory Foam:</h4>
          <p>
            Memory foam has revolutionized the way we sleep, offering
            unparalleled comfort and support. Discover the magic of memory foam
            and how it can transform your sleep experience.
          </p>
        </div>
        <div>
          <h4>Benefits of Memory Foam Mattresses:</h4>
          <p>
            Memory foam mattresses are known for their ability to contour to
            your body, providing personalized support and relieving pressure
            points. Experience a restful night's sleep with the superior comfort
            and alignment offered by memory foam.
          </p>
        </div>
        <div>
          <h4>Choosing the Right Bed Mattress:</h4>
          <p>
            Selecting the perfect bed mattress is crucial for quality sleep.
            Explore the benefits of memory foam for mattresses and how this
            material can enhance your overall sleep quality by adapting to your
            body's shape and weight.
          </p>
        </div>
        <div>
          <h4>Enhancing Sleep Quality with Memory Foam:</h4>
          <p>
            Memory foam is designed to promote deep, uninterrupted sleep by
            reducing motion transfer and providing optimal spinal alignment.
            Upgrade to a memory foam mattress for a luxurious sleep experience
            that caters to your individual needs.
          </p>
        </div>
      </div>
    </>
  );
}

export default Blogs;
