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
              <p className={s.descriptionText}>Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются <br/> в маркетинге, операциях <br/> и услугах обслуживания клиентов, специализирующихся <br/> на совместном использовании <br/> и частных турах. </p>
              <p className={s.descriptionText}> Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету и планам клиента. <br/> Мы никогда не зависим <br/> от субпоставщиков <br/> и не свяжемся…</p>

              <p className={s.descriptionText576}>Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются в маркетинге, операциях и услугах обслуживания клиентов, специализирующихся на совместном использовании и частных турах. </p>
              <p className={s.descriptionText576}> Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету <br/> и планам клиента. Мы никогда не зависим от субпоставщиков <br/> и не свяжемся…</p>

              <div className={s.descriptionOrganizerLink}>
                <LinkMore />
              </div>
            </div>

            <div className={s.descriptionActiviti}>
              <h3 className={s.descriptionTitle}>Что я предоставлю:</h3>
              <p className={s.descriptionText}>Встречу вас на машине после длительного перелёта.
                Качественный подбор места <br /> и локации для вашей съемки. <br />При необходимости всегда возможно прерваться <br />
                на обед/ужин. <br /> Более 50 фотографий на выходе, <br /> с обработкой и замечательные впечатления о Дубае!</p>

                <p className={s.descriptionText576}>Встречу вас на машине после длительного перелёта.
                Качественный подбор места и локации для вашей съемки. При необходимости всегда возможно прерваться на <br/> обед/ужин. <br/> Более 50 фотографий на выходе, с обработкой и замечательные впечатления о Дубае!</p>

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