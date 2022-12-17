 import style from './styles.module.css'
import {IoMdAddCircleOutline} from 'react-icons/io'
import { useState } from 'react';
import { CreateModal } from './CreateModal/CreateModal';
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { Get_Trips } from '../../Redux/Trips/actions';

 const Trip = () => {
    const [disCreateModal, setDisCreateModal] = useState(false);
    const token = useSelector((store)=>store.auth.data.token);
    const tripData = useSelector((store)=>store.trip.data);
    const dispatch = useDispatch();

    const hideModal = () => {
        setDisCreateModal(false)
    }
    const showModal = () => {
        setDisCreateModal(true)
    }

    useEffect(()=>{
        dispatch(Get_Trips(token))
    }, [])
    return <div className={style.page}>
        <div className={style.board}>
            <div className={style.createButton}>
                <button onClick={showModal}><IoMdAddCircleOutline/> <p>Create Trip</p></button>
                {disCreateModal?<CreateModal methods={{close:hideModal}} data={{type:'create'}}/>:""}
            </div>

            <div className={style.tripBoard}>

                <h2>Trips</h2>

                {tripData.map((i)=><h2 key={i._id}>{i.name}</h2>)}

            </div>
        </div>
    </div>
}
export default Trip;