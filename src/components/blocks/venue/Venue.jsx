import { Link } from "react-router-dom";
import s from './Venue.module.scss';
import foto from '../../../assets/img/about/fotoPhotographer.png';
import CaruselVenue from '../../common/carusel/caruselVenue/CaruselVenue';


const Venue = () => {

  return (
    <div className={s.venue}>
      <div className={s.container}>
        <div className={s.inner}>
          <div className={s.venueCarusel}>
            <CaruselVenue />
          </div>

          <div className={s.photographerBlock}>
            <img className={s.photographerBlockFoto} src={foto} alt="photography photographer" />
            <div className={s.photographerBlockDescription}>
              <p className={s.name}>Мария Иванова</p>
              <p className={s.profession}>Фотограф</p>
              <Link className={s.linkMore} to={'#'}>Показать больше информации <br /> о фотографе</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Venue;