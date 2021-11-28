import { Link } from 'react-router-dom';
import s from './Gallery.module.scss';
import CaruselGallery from '../../common/carusel/caruselGallery/CaruselGallery';
import GalleryItems from '../../common/galleryItems/GalleryItems';
import LinkShowAll from '../../common/links/linkShowAll/LinkShowAll';

const Gallery = () => {

  return (
    <section className={s.gallery}>
      <div className={s.container}>
        <div className={s.inner}>
          <h2 className={s.galleryTitle}>
            Фотографии пакета <span>:</span>
          </h2>

          <div className={s.galleryCarusel}>
            <CaruselGallery />
          </div>

          <GalleryItems />

          <div className={s.galleryLinkWrap}>
            <LinkShowAll
              text='Показать все фото'
              styleLink={{width:'208px'}}
            />
          </div>

        </div>
      </div>
    </section>

  )

}

export default Gallery;

