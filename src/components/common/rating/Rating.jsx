import React from "react";
import Rating from "react-rating"
import s from './Rating.module.scss';
import styles from './Rating.scss';
import star from '../../../assets/img/star.png';

const RatingStar = () => {
  return (
      <Rating
    emptySymbol={<img className='starRating' src={star}  alt="star"/>}
    // fullSymbol={<img className={s.icon} src={star}  alt="star"/>}
    // fractions={2}
  />
  )
}

export default RatingStar;


