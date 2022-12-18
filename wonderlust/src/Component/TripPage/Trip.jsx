 import style from './styles.module.css'
import {IoMdAddCircleOutline} from 'react-icons/io'
import { useState } from 'react';
import { CreateModal } from './CreateModal/CreateModal';

 const Trip = () => {
    const [disCreateModal, setDisCreateModal] = useState(false);
    const hideModal = () => {
        setDisCreateModal(false)
    }
    const showModal = () => {
        setDisCreateModal(true)
    }
    return <div className={style.page}>
        <div className={style.board}>
            <div className={style.createButton}>
                <button onClick={showModal}><IoMdAddCircleOutline/> <p>Create Trip</p></button>
                {disCreateModal?<CreateModal methods={{close:hideModal}} data={{type:'create'}}/>:""}
            </div>

            <div className={style.tripBoard}>

                <h2>Trips</h2>

            </div>
        </div>
    </div>
}
export default Trip;