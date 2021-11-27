import {Link} from 'react-router-dom';
import s from './Gallery.module.scss';
import CaruselGallery from '../../common/carusel/caruselGallery/CaruselGallery';
import GalleryItems from '../../common/galleryItems/GalleryItems';

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

          <Link className={s.linkShowOll} to={'#'}>
            <span className={s.linkShowOllArrowLeft}></span> Показать все фото <span className={s.linkShowOllArrowRight}></span>
          </Link>

        </div>
      </div>
    </section>

  )

}

export default Gallery;

