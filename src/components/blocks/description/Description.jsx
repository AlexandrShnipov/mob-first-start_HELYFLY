import react from "react";
import s from './Description.module.scss';
import item_1 from '../../../assets/img/description/item_1.svg';
import item_2 from '../../../assets/img/description/item_2.svg';
import item_3 from '../../../assets/img/description/item_3.svg';
import item_4 from '../../../assets/img/description/item_4.svg';
import cup from '../../../assets/img/description/cup.png';
import DescriptionItem from '../../common/descriptionItem/DescriptionItem';
import CaruselDescription from '../../common/carusel/caruselDescription/CaruselDescription';

const Description = () => {

  return (
    <div className={s.description}>
      <div className={s.container}>
        <div className={s.inner}>
          <h2 className={s.descriptionTitle}>Фотосессия <br />
            в вертолете</h2>



          <div className={s.descriptionContentWrap}>
            <CaruselDescription />

            <div className={s.descriptionContent}>
              <p className={s.descriptionContentText}>Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты!</p>

              <ul className={s.descriptionItems}>
                <DescriptionItem className={s.descriptionItem}
                  img={item_1}
                  alt="clock"
                  text="3 часа съемки" />

                <DescriptionItem className={s.descriptionItem}
                  img={item_2}
                  alt="camera"
                  text="Более 50 фотографий" />

                <DescriptionItem className={s.descriptionItem}
                  img={item_3}
                  alt="place"
                  text="Москва" />

                <DescriptionItem className={s.descriptionItem}
                  img={item_4}
                  alt="img dialog"
                  text="Готовы ответить на любые вопросы" />
              </ul>

              <div className={s.testimonialsBlock}>
                <img className={s.testimonialsBlockImg} src={cup} alt="cup" />
                <div className={s.testimonialsBlockContent}>
                  <p className={s.testimonialsBlockContentText}>Более <span>50</span> отзывов с оценкой </p>
                  <div className={s.testimonialsBlockContentRating}>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Description;

