import React from "react";
import Rating from "react-rating"
import s from './RatingDescription.module.scss';
import styles from './RatingDescription.scss';
import star from '../../../assets/img/star.png';

const RatingDescription = () => {
  return (
      <Rating
    emptySymbol={<img className='starRating' src={star}  alt="star"/>}
    // fullSymbol={<img className={s.icon} src={star}  alt="star"/>}
    // fractions={2}
  />
  )
}

export default RatingDescription;


