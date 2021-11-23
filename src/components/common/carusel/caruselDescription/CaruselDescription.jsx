import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './CaruselDescription.scss';
import s from './CaruselDescription.module.scss';
import CaruselDescriptionItem from '../../../common/carusel/caruselDescription/caruselDescriptionItem/CaruselDescriptionItem';
import _1_imgSmall from '../../../../assets/img/description/sliderSmall.png';
import _1_img576 from '../../../../assets/img/description/slider576.png';
import _1_imgTablet from '../../../../assets/img/description/sliderTablet.png';
import _1_imgDesktop from '../../../../assets/img/description/sliderDesktop.png';

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
  return (
    <Slider {...settings} className={'caruselDescription'}>

      <CaruselDescriptionItem
        imgSmall={_1_imgSmall}
        img576={_1_img576}
        imgTablet={_1_imgTablet}
        imgDesktop={_1_imgDesktop}
        imgReserv={_1_imgDesktop}
      />

        <CaruselDescriptionItem
         imgSmall={_1_imgSmall}
         img576={_1_img576}
         imgTablet={_1_imgTablet}
         imgDesktop={_1_imgDesktop}
         imgReserv={_1_imgDesktop}
      />

      <CaruselDescriptionItem
         imgSmall={_1_imgSmall}
         img576={_1_img576}
         imgTablet={_1_imgTablet}
         imgDesktop={_1_imgDesktop}
         imgReserv={_1_imgDesktop} 
      />
    
    </Slider>
  );
}