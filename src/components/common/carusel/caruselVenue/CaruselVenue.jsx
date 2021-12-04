import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './CaruselVenue.module.scss';
import styles from './CaruselVenue.scss';
import CaruselVenueItem from './caruselVenueItem/CaruselVenueItem';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
  return (
    <Slider {...settings} className={'caruselVenue'}>

      <CaruselVenueItem
        number='1'
        title='Где встречаемся?'
        text='Москва'
      />

      <CaruselVenueItem
        number='2'
        title='Время съемки'
        text='3 часа'
      />

      <CaruselVenueItem
        number='3'
        title='Мест осталось'
        text='3 места '
      />

    </Slider>
  );
}