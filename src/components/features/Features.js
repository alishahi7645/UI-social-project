import React from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import './Features.css'

const Features = () => {
  return (
    <section id="features">
      <div className="container features">
        <div className="title">
          <BsFillBookmarkStarFill color="orangered" size={"25"} />
          <h2>ویزگی های اصلی</h2>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
        <div className="features-content"></div>
      </div>
    </section>
  );
};

export default Features;
