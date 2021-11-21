import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './CaruselDescription.scss';
import s from './CaruselDescription.module.scss';
import img from '../../../../assets/img/description/sliderSmall.png';

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className={'caruselDescription'}>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
      
      </div>
      <div>
      
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}