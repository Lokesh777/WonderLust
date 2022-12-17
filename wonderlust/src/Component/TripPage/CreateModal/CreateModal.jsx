import style from './style.module.css';
import {IoCloseSharp} from 'react-icons/io5'

export const CreateModal = ({methods, data}) => {
    const {close} = methods
    return  <div className={style.modal}>
        <div className={style.modalBox}>
            <div className={style.closeBox}>
                <button onClick={close}><IoCloseSharp/></button>
            </div>
        </div>

    </div>
}