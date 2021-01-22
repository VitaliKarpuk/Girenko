import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";

import './style.scss';

const Slider = () => {
  return (
    <Carousel autoplay>
      <div>
        <span className="slide__one"></span>
      </div>
      <div>
        <span className="slide__two"></span>
      </div>
      <div>
        <span className="slide__three"></span>
      </div>
    </Carousel>
  );
};

export default Slider;
