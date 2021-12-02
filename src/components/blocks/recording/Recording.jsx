import React from 'react';
import RecordingTime from '../../common/recordingTime/RecordingTime';
import s from './Recording.module.scss';
import RatingStar from '../../common/rating/Rating';
import cup from '../../../assets/img/description/cup.png';

const Recording = () => {

  return (
    <section className={s.recording}>
      <div className={s.container}>
        <div className={s.inner}>
          <h2 className={s.recordingTitle}>
            Доступная съемка <br/> в ближайщее время :
          </h2>

          <div className={s.timeBlock}>
            <div className={s.timeBlockDateWrap}>
              <span className={s.timeBlockDate}>Пятница, 14 сентября</span>

              <input className={s.timeBlockInput} type="date" name='date' />

            </div>
            <RecordingTime
              time='15:00 - 18:00'
              value='1500₽'
              number='1' />
            <RecordingTime
              time='19:00 - 22:00'
              value='1500₽'
              number='1' />
          </div>

          <div className={s.testimonialsBlock}>
            <img className={s.testimonialsBlockImg} src={cup} alt="cup" />
            <div className={s.testimonialsBlockContent}>
              <p className={s.testimonialsBlockContentText}>Более <span>50</span> отзывов с оценкой </p>

              <RatingStar />

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Recording;