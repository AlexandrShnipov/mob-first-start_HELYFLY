import React from "react";
import s from './Footer.module.scss';
import logo from '../../../assets/img/logo.svg';
import vk from '../../../assets/img/footer/vk.png';
import fb from '../../../assets/img/footer/facebook.png';
import instagram from '../../../assets/img/footer/instragram.png';
import mc from '../../../assets/img/footer/mc.png';
import visa from '../../../assets/img/footer/visa.png';

const Footer = () => {

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.inner}>

          <a className={s.footerTopLogoLink} href="/">
            <img className={s.footerTopLogoImg} src={logo} alt="HELYFLY" />
          </a>
          <div className={s.footerTopSocialLinks}>
            <a className={s.footerTopSocialLink} href="/">
              <img className={s.footerTopSocialImg} src={vk} alt="vkontakte" />
            </a>
            <a className={s.footerTopSocialLink} href="/">
              <img className={s.footerTopSocialImg} src={fb} alt="facebook" />
            </a>
            <a className={s.footerTopSocialLink} href="/">
              <img className={s.footerTopSocialImg} src={instagram} alt="instagram" />
            </a>
          </div>

          <div className={s.footerBottomImages}>
            <img className={s.footerBottomImage} src={mc} alt="logo MC" />
            <img className={s.footerBottomImage} src={visa} alt="logo visa" />
          </div>

         <div className={s.footerBottomSelectWrap}>
            <select className={s.footerBottomSelect} name="language">
              <option value="ru" selected>ru</option>
              <option value="eng">eng</option>
            </select>
         </div>

          <div className={s.footerBottomCopyrightBox}>
            <a className={s.footerBottomTel} href="tel:+88007000000">Тех. поддержка: 8(800)700-00-00</a>
            <span className={s.footerBottomCopyright}>© 2018 HELYFLY. All Rights Reserved.</span>
          </div>

        </div>
      </div>

    </footer>

  )
}

export default Footer;