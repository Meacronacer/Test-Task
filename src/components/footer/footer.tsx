import root from './footer.module.scss'
import logo from '../../assets/footerLogo.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa6";

import { FaPinterestP } from "react-icons/fa6";




const Footer = () => {
    return (
        <div className={root.footer}>
            <div className={root.inner}>
                <div>
                    <img src={logo} alt='footerLogo' />
                </div>

                <div className={root.navigations}>
                    <ul className={root.information}>
                        <li className={root.mediaTitle}>Информация</li>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/">Галерея</a></li>
                        <li><a href="/">Проекты</a></li>
                        <li><a href="/">Сертификаты</a></li>
                        <li><a href="/">Контакты</a></li>
                    </ul>
                    <ul className={root.contacts}>
                        <li className={root.mediaTitle} >Контакты</li>
                        <li> <FaLocationDot /> 100000, Республика  Казахстан,  <br/>
                            г. Караганда, ул. Телевизионная 10</li>
                        <li> <FaPhone /> +38 (000) 000 00 00</li>
                        <li> <IoMail /> mail@gmail.com</li>
                    </ul>
                </div>

                <div className={root.socialMedia}>
                    <h3 className={root.mediaTitle}>Социальные сети</h3>
                    <div className={root.icons}>
                        <FaFacebookF size={20} color='#fff' />
                        <FaTwitter size={20} color='#fff'/>
                        <FaLinkedin size={20} color='#fff'/>
                        <FaPinterestP size={20} color='#fff'/>
                    </div>
                </div>
            </div>
            <hr/>

            <span className={root.allRightsSecured}>© 2019 Digital Project. Все права защищены.</span>
        </div>
    )
}
 
export default Footer
