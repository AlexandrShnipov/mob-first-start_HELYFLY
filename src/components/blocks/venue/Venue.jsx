import { Link } from "react-router-dom";
import s from './Venue.module.scss';
import Map from '../../common/map/Map';
import foto from '../../../assets/img/about/fotoPhotographer.png';
import CaruselVenue from '../../common/carusel/caruselVenue/CaruselVenue';
import CaruselVenueItem from "../../common/carusel/caruselVenue/caruselVenueItem/CaruselVenueItem";



const Venue = () => {

  return (
    <div className={s.venue}>

      <Map />

      <div className={s.container}>
        <div className={s.inner}>
          <div className={s.venueCarusel}>
            <CaruselVenue />
          </div>

          <div className={s.venueItems}>
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

          </div>

          <div className={s.photographerBlock}>
            <img className={s.photographerBlockFoto} src={foto} alt="photography photographer" />
            <div className={s.photographerBlockDescription}>
              <p className={s.name}>Мария Иванова</p>
              <p className={s.profession}>Фотограф</p>
              <Link className={s.linkMore} to={'#'}>Показать больше информации <br /> <span>о фотографе</span> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Venue;