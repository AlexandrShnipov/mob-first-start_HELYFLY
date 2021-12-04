import React from "react";
import s from './CaruselVenueItem.module.scss';

const CaruselVenueItem = (props) => {

  return (
    <div className={s.item}>
      <div className={s.itemNumberWrap} >
        <span className={s.number}>{props.number}</span>
      </div>
      <div className={s.itemContent}>
        <h4 className={s.itemContentTitle}>{props.title}</h4>
        <p className={s.itemContentText}>{props.text}</p>
      </div>
    </div>

  )
}

export default CaruselVenueItem;