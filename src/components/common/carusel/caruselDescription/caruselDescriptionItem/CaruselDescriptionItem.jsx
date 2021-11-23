import react from "react";
import s from './CaruselDescriptionItem.module.scss';

const CaruselDescriptionItem = (props) => {

  return (
    <div className={s.sliderItemBlock}>
      <picture>
        <source className={s.sliderItemBlockImg} media='(min-width: 1280px)' srcSet={props.imgDesktop} />
        <source className={s.sliderItemBlockImg} media='(min-width: 768px)' srcSet={props.imgTablet} />
        <source className={s.sliderItemBlockImg} media='(min-width: 576px)' srcSet={props.img576} />
        <source className={s.sliderItemBlockImg} media='(min-width: 220px)' srcSet={props.imgSmall} />
        <img className={s.sliderItemBlockImg} src={props.imgDesktop} alt="foto" />

      </picture>
    </div>

  )
}

export default CaruselDescriptionItem;