import React from "react";
import s from './Footer.module.scss';
import logo from '../../../assets/img/logo.svg';
import vk from '../../../assets/img/footer/vk.png';
import fb from '../../../assets/img/footer/facebook.png';
import instagram from '../../../assets/img/footer/instragram.png';
import mc from '../../../assets/img/footer/mc.svg';
import visa from '../../../assets/img/footer/visa.svg';

const Footer = () => {

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.inner}>

          <a className={s.footerLogoLink} href="/">
            <img className={s.footerTopLogoImg} src={logo} alt="HELYFLY" />
          </a>
          <div className={s.footerSocialLinks}>
            <a className={s.footerSocialLink} href="/">
              <img className={s.footerSocialImg} src={vk} alt="vkontakte" />
            </a>
            <a className={s.footerSocialLink} href="/">
              <img className={s.footerSocialImg} src={fb} alt="facebook" />
            </a>
            <a className={s.footerSocialLink} href="/">
              <img className={s.footerSocialImg} src={instagram} alt="instagram" />
            </a>
          </div>

          <div className={s.footerImages}>
            <img className={s.footerImage} src={mc} alt="logo MC" />
            <img className={s.footerImage} src={visa} alt="logo visa" />
          </div>

       <div className={s.footerSelectContainer}>
           <div className={s.footerSelectWrap}>
              <select className={s.footerSelect} name="language">
                <option value="ru" selected>ru</option>
                <option value="eng">eng</option>
              </select>
           </div>
       </div>

          <div className={s.footerCopyrightBox}>
            <a className={s.footerTel} href="tel:+88007000000">Тех. поддержка: 8(800)700-00-00</a>
            <span className={s.footerCopyright}>© 2018 HELYFLY. All Rights Reserved.</span>
          </div>

        </div>
      </div>

    </footer>

  )
}

export default Footer;