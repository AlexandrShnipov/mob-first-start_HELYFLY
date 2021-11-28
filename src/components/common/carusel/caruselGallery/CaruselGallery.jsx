import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './CaruselGallery.module.scss';
import styles from './CaruselGallery.scss';
import img_1 from '../../../../assets/img/gallery/img_1.png';
import img_2_7 from '../../../../assets/img/gallery/img_2_7.png';
import img_3_5_8 from '../../../../assets/img/gallery/img_3_5_8.png';
import img_4_6 from '../../../../assets/img/gallery/img_4_6.png';

export default class VariableWidth extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      dots: false,
      infinite: true,
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      // autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings} className={'caruselGallery'}>

          {/* 1 */}
          <div className={'caruselGalleryItem'}>
            <img className={s.caruselGalleryImg} src={img_4_6} alt="foto" />
          </div>

          {/* 2 */}
          <div className={'caruselGalleryItem'}>
            <img className={s.caruselGalleryImg} src={img_4_6} alt="foto" />
          </div>

          {/* 3 */}
          <div className={'caruselGalleryItem'}>
            <img className={s.caruselGalleryImg} src={img_2_7} alt="foto" />
          </div>

          {/* 4 */}
          <div className={'caruselGalleryItem'}>
            <img className={s.caruselGalleryImg} src={img_1} alt="foto" />
          </div>

          {/* 5 */}
          <div className={'caruselGalleryItem'}>
            <img className={s.caruselGalleryImg} src={img_3_5_8} alt="foto" />
          </div>

          {/* 6 */}
          <div className={'caruselGalleryItem'}>
            <img className={s.caruselGalleryImg} src={img_3_5_8} alt="foto" />
          </div>

          {/* 7 */}
          <div className={'caruselGalleryItem'}>
            <img className={s.caruselGalleryImg} src={img_2_7} alt="foto" />
          </div>

          {/* 8 */}
          <div className={'caruselGalleryItem'}>
            <img className={s.caruselGalleryImg} src={img_3_5_8} alt="foto" />
          </div>

        </Slider>
      </div>
    );
  }
}