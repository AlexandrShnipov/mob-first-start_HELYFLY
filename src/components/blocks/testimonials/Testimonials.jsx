import { Link } from "react-router-dom";
import s from './Testimonials.module.scss';
import Testimonial from '../../common/testimonial/Testimonial';
import fotoAutor_1 from '../../../assets/img/testimonials/fotoAutor_1.png';
import fotoAutor_2 from '../../../assets/img/testimonials/fotoAutor_2.png';
import fotoAutor_3 from '../../../assets/img/testimonials/fotoAutor_3.png';
import LinkShowAll from "../../common/links/linkShowAll/LinkShowAll";


const Testimonials = () => {

  return (
    <section className={s.testimonials}>
      <div className={s.container}>
        <div className={s.inner}>
          <h2 className={s.testimonialsTitle}>Отзывы:     </h2>

          <Testimonial
            foto={fotoAutor_1}
            name='Мария Иванова'
            position='Арт-директор'
            slogan='Супер! Я бы заказала съемку снова!'
            testimonial='Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!'
            dateTime='2019.04.27'
            date='27 Апреля, 2019г.'
          />

          <Testimonial
            foto={fotoAutor_2}
            name='Виталий Петров'
            position='Фотограф'
            slogan='Супер! Я бы заказал съемку снова!'
            testimonial='Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление.
            Организация полёта отличная. 
            Спасибо!'
            dateTime='2019.04.19'
            date='19 Апреля, 2019г.'
          />

          <Testimonial
            foto={fotoAutor_3}
            name='Джим Керри'
            slogan='Супер! Я бы заказала съемку снова!'
            testimonial='Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы 
            с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!'
            dateTime='2019.04.11'
            date='11 Апреля, 2019г.'
          />

          <div className={s.testimonialsLinkWrap}>
            <LinkShowAll
              text='Показать Все'
              styleLink={{ width: '203px' }}
              number='(134)'
            />
          </div>

        </div>
      </div>
    </section>

  )
}

export default Testimonials;