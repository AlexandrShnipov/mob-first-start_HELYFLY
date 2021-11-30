import React from 'react';
import s from './RecordingTime.module.scss';
import ButtonSelect from '../button/buttonSelect/ButtonSelect';

const RecordingTime = (props) => {

  return (
    <div className={s.recordingTimeWrap}>
      <div className={s.recordingTimeSelect}>
        <span className={s.time}>{props.time}</span>
        <span className={s.value}>{props.value}</span>
        <p className={s.places}>Осталось — <span>{props.number} место</span></p>
      </div>
      <ButtonSelect />
    </div>
  )
}

export default RecordingTime;