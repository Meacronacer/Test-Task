import root from './form.module.scss'
import formPhoto from '../../assets/form.png'
import { BsArrowRight } from 'react-icons/bs';

const Form = () => {
    return (
        <div className={root.form}>
            <h1>Связаться с нами</h1>
            <div className={root.formInput}>
                <div className={root.inputs}>
                    <input className={root.input} placeholder='Имя' />
                    <input className={root.input} placeholder='Номер телефона*' />
                    <input className={root.input} placeholder='E-mail*' />
                    <input className={root.input} placeholder='Интересующий товар/услуга' />
                    <textarea className={root.inputArea}  placeholder='Сообщение*' />
                </div>
                <div>
                <img src={formPhoto} /> 
                </div>
            </div>
            <p className={root.agreeWithCompany}>
            Отправляя заявку Вы соглашаетесь
            с политикой <br />
            конфиденциальности
            </p>
            
            <button className={root.btnSend}>ОТПРАВИТЬ <BsArrowRight /></button>
        </div>
    )
}
 
export default Form;