import { Link } from "react-router-dom";
import s from './About.module.scss';
import AboutPhotographer from '../../common/aboutPhotografer/AboutPhotographer';
import fotoPhotographer from '../../../assets/img/about/fotoPhotographer.png';
import LinkMore from '../../common/links/linkMore/LinkMore';



const About = () => {

  return (
    <div className={s.about}>
      <div className={s.container}>
        <div className={s.inner}>
          <AboutPhotographer
            foto={fotoPhotographer} />

          <div className={s.description}>

            <div className={s.descriptionOrganizer}>
              <h3 className={s.descriptionTitle}>Об организаторе:</h3>
              <p className={s.descriptionText}>Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются в маркетинге, операциях и услугах обслуживания клиентов, специализирующихся на совместном использовании и частных турах.</p>
              <p className={s.descriptionText}> Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету и планам клиента.
                Мы никогда не зависим от субпоставщиков и не свяжемся…</p>
              <div className={s.descriptionOrganizerLink}>
                <LinkMore />
              </div>
            </div>

            <div className={s.descriptionActiviti}>
              <h3 className={s.descriptionTitle}>Что я предоставлю:</h3>
              <p className={s.descriptionText}>Встречу вас на машине после длительного перелёта.
                Качественный подбор места и локации для вашей съемки.При необходимости всегда возможно прерваться
                на обед/ужин. <br /> Более 50 фотографий на выходе с обработкой и замечательные впечатления о Дубае!</p>
              <div className={s.descriptionOrganizerLink}>
                <LinkMore />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>)
}

export default About;