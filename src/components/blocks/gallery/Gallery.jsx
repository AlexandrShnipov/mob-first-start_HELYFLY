import React from "react";
import s from './Gallery.module.scss';
import CaruselGallery from '../../common/carusel/caruselGallery/CaruselGallery';

const Gallery = () => {

  return (
    <section className={s.gallery}>
      <div className={s.container}>
        <div className={s.inner}>
          <h2 className={s.galleryTitle}>
            Фотографии пакета
          </h2>

          <div className={s.galleryCarusel}>
            <CaruselGallery />
          </div>
        </div>
      </div>
    </section>

  )

}

export default Gallery;

