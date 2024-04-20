import root from './header.module.scss'
import logo from '../../assets/header-logo.svg'
import { MdOutlineMenu } from "react-icons/md";
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'


const navLinks = ['ГЛАВНАЯ','ГАЛЕРЕЯ', 'ПРОЕКТЫ', 'СЕРТИФИКАТЫ', 'КОНТАКТЫ']

const Header: React.FC = () => {
    const [current, setCurrent] = useState<number>(0)
    const [menuToggle, setMenuToggle] = useState<Boolean>(false)

    const isMobileDevice = useMediaQuery({
        query: '(max-width: 620px)'
    })

    const links = navLinks.map((item, index) => {

        return (
            <li>
                <a className={current === index ? root.current: ''}
                   href="#"
                   onClick={() => setCurrent(index)}
                >
                {item}</a>
            </li>
        )
    })

    return (
        <div className={root.header}>
            <img className={root.logo} onClick={() => setCurrent(0)} src={logo} alt='header-logo' />

            {
                isMobileDevice ?
                <MdOutlineMenu onClick={() => setMenuToggle(prev => !prev)} size={40} />
                :
                <nav>
                    <ul className={root.navbar}>
                        {links}
                    </ul>
                </nav>
            }

            {
                menuToggle && isMobileDevice && (
                    <nav>
                        <ul className={root.navbar}>
                            {links}
                        </ul>
                    </nav>
                )
            }
            

        </div>
    )
}
 
export default Header;