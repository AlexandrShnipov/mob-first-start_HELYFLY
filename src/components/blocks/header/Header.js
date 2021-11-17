import s from './Header.module.scss';
import logo from './../../../assets/img/logo.svg';
import userIcon from './../../../assets/img/user.png';



function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.wrapper}>
                        <a href="/">
                            <img className={s.logo} src={logo} alt="HELYFLY" />
                        </a>
                        <a className={s.phoneCity} href="tel:+78001231212" >Москва</a>
                        <div className={s.phone}>
                            <span>Телефон:</span>
                            <a className={s.phoneLink} href="tel:+78001231212" >8(800)-123-12-12</a>
                        </div>
                    </div>
                    <a className={s.user} href="#">
                        <img className={s.userImg} src={userIcon} alt="" />
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Header;