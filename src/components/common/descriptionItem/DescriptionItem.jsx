import React from "react";
import s from './DescriptionItem.module.scss';

const DescriptionItem = (props) => {

  return (
    <li className={s.descriptionItem}>
    <img className={s.img} src={props.img} alt={props.alt} />
   {props.text}</li>
  )
}

export default DescriptionItem;