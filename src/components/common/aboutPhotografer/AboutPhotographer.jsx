import {Link} from "react-router-dom";
import s from './AboutPhotographer.module.scss';
import heart from '../../../assets/img/about/heart.svg';


const AboutPhotographer = (props) => {

  return (
    <div className={s.aboutPhotographer}>
    <div className={s.aboutPhotographerBlockFoto}>
      <img className={s.aboutPhotographerFoto} src={props.foto} alt="foto" />
      <img className={s.aboutPhotographerHeart} src={heart} alt="img heart" />
    </div>
    <div className={s.aboutPhotographerInfo}>
      <h3 className={s.aboutPhotographerInfoName}>Марина Иванова</h3>
      <p className={s.aboutPhotographerInfoProfession}>Фотограф </p>
      <Link className={s.aboutPhotographerInfoLink} to={'#'}>Показать больше
        информации о фотографе</Link>
    </div>
  </div>

  )
}

export default AboutPhotographer;