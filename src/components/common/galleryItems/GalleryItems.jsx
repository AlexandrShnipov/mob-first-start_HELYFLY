import React from "react";
import s from './GalleryItems.module.scss';
import img_1 from '../../../assets/img/gallery/img_1.png';
import img_2_7 from '../../../assets/img/gallery/img_2_7.png';
import img_3_5_8 from '../../../assets/img/gallery/img_3_5_8.png';
import img_4_6 from '../../../assets/img/gallery/img_4_6.png';

const GalleryItems = ( ) => {

  return (

    <div className={s.gallery}>

      <div className={s.galleryItem}>
        <img className={s.galleryImg} src={img_1} alt="foto" />
      </div>

      
      <div className={s.galleryItem}>
        <img className={s.galleryImg} src={img_2_7} alt="foto" />
      </div>

      
      <div className={s.galleryItem}>
        <img className={s.galleryImg} src={img_3_5_8} alt="foto" />
      </div>

      
      <div className={s.galleryItem}>
        <img className={s.galleryImg} src={img_4_6} alt="foto" />
      </div>

      
      <div className={s.galleryItem}>
        <img className={s.galleryImg} src={img_3_5_8} alt="foto" />
      </div>

      
      <div className={s.galleryItem}>
        <img className={s.galleryImg} src={img_4_6} alt="foto" />
      </div>

      
      <div className={s.galleryItem}>
        <img className={s.galleryImg} src={img_2_7} alt="foto" />
      </div>

      
      <div className={s.galleryItem}>
        <img className={s.galleryImg} src={img_3_5_8} alt="foto" />
      </div>
    </div>

  )
}

export default GalleryItems;