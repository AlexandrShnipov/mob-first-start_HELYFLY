import React from "react";
import s from './Testimonial.module.scss';
import Rating from '../rating/Rating';

const Testimonial = (props) => {

  return (
    <article className={s.testimonial}>
      <div className={s.autorBlock}>
        <img className={s.autorBlockFoto} src={props.foto} alt="photo of the author " />
        <div className={s.autorBlockContentWrap}>
          <div className={s.autorBlockContent}>
            <h3 className={s.autorBlockContentName}>{props.name}</h3>
            <p className={s.autorBlockContentPosition}>{props.position}</p>
            <Rating />
          </div>
          <span className={s.autorBlockSlogan}>{props.slogan}</span>
        </div>
      </div>

      <div className={s.testimonialTextWrap}>
        <p className={s.testimonialText}>{props.testimonial}</p>
        <time className={s.testimonialDate} dateTime={props.dateTime}>{props.date}</time>
      </div>

    </article>

  )
}

export default Testimonial;