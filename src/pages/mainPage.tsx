import Header from '../components/header/header';
import root from './mainPage.module.scss'
import mainPhoto from '../assets/main.jpg'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import ourProject2 from '../assets/ourProjects2.png'
import ourProject3 from '../assets/ourProjects3.png'
import ourProject4 from '../assets/ourProjects4.png'
import ourProject5 from '../assets/ourProjects5.png'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Form from '../components/form/form';
import Footer from '../components/footer/footer';


const MainPage = () => {

    return (
        <>

        <div className={root.main}>
            <Header/>
            {/* PROJECT TITLE WITH PROJECT PHOTO */}
            <div className={root.inner}>
                <div className={root.projectTitle}>
                    <div className={root.projectHome}>
                        <h1 >PROJECT</h1>
                        <h1 className={root.home}>HOME</h1>
                    </div>
                    <div className={root.buttons}>
                        <div className={root.btn}><BsArrowLeft size={20}/></div>
                        <div className={root.btn}><BsArrowRight size={20}/></div>
                    </div>
                    <div className={root.pages}>
                        <div>01</div>
                        <div className={root.slash} ></div>
                        <div>02</div>
                    </div>
                </div>

                <div className={root.projectPhoto}>
                    <img className={root.photo} src={mainPhoto} alt='project' />
                    <div className={root.look} >ВЗГЛЯНУТЬ <BsArrowRight size={18}/> </div>
                </div>
            </div>


            <div className={root.aboutCompany}>
                <div className={root.photos}>
                    <div className={root.first}>
                        <img src={about1} alt='about1' />
                        <img src={about3} alt='about2' />
                    </div>
                    <div className={root.seconds}>
                        <img src={about2} alt='about2' />
                    </div>
                </div>
                <div className={root.text}>
                    <h1 className={root.title}>О компании</h1>
                    <p className={root.description}>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essentially <br/> unchanged.
                    </p>
                </div>
            </div>

            <div className={root.mainTasks}>
                <h1 className='projectTitle'>Основные задачи</h1>

                <div className={root.inner}>
                    <div className={root.first}>
                        <h1 className={root.mainTasksTitle}>1</h1>
                        <p className={root.mainTasksDescription}>Создание комфортных условий и повышение качества обслуживания клиентов</p>
                    </div>
                    <div className={root.second}>
                        <h1 className={root.mainTasksTitle}>2</h1>
                        <p className={root.mainTasksDescription}>Постоянно совершенствовать качество 
                        предоставляемых услуг путем обучения персонала, закупки нового
                        оборудования и усиленной рекламы на рынке</p>
                    </div>
                </div>
            </div>

            <div className={root.ourProjects}>
                <h1 className='projectTitle'>Наши проекты</h1>
                <div className={root.topProjects}>
                    <div className={root.first}>
                        <h1 className={root.title}>ДОСУГОВЫЙ ЦЕНТР</h1>
                        <a href='#' className={root.more}>ПОДРОБНЕЕ <BsArrowRight /></a>
                    </div>
                    <div>
                        <img src={ourProject2} alt='about2' />
                    </div>
                </div>
                <div className={root.botProjects}>
                    <div><img src={ourProject3} alt='about3' /></div>
                    <div><img src={ourProject4} alt='about4' /></div>
                    <div><img src={ourProject5} alt='about5' /></div>
                </div>
                <button className={root.btnAll}>ВСЕ ПРОЕКТЫ <BsArrowRight size={18} /></button>
            </div>

            <Form />
        </div>
        <Footer/>
        </>
    )
}
 
export default MainPage;