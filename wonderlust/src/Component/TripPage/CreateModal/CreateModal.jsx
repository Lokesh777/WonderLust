import style from './style.module.css';
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react';
import {RqStar} from '../../Admin/AdminNav/adminNav'
import {useSelector, useDispatch} from 'react-redux';
import { Create_Trip } from '../../../Redux/Trips/actions';


const iniFormData = {
    name: "",
    description: ""
}

export const CreateModal = ({ methods, data }) => {

    // variables and states
    const { close } = methods
    const [formData, setFormData] = useState(iniFormData);
    const dispatch = useDispatch();
    const token = useSelector(store=>store.auth.data.token);

    // actions and event handlers
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name] : value})
    }

    const handleSubmit = () => {
        dispatch(Create_Trip(formData,token, handleSuccess, handleError));
    }

    const handleSuccess = () => {
        alert('Trip Created Successfully');
        close();
    }

    const handleError = (message='could not create trip, try again') => {
        alert(message);
    }
    return <div className={style.modal}>
        <div className={style.modalBox}>
            <div className={style.closeBox}>
                <button onClick={close}><IoCloseSharp /></button>
            </div>
            <div className={style.form}>
                
                <h2>Create Trip</h2>

                <input type="text" name='name' placeholder='Enter Name For Trip' autoComplete='off' value={formData.name} onChange={handleChange} />
                <input type="text" name='description' placeholder='Enter Description' autoComplete='off' value={formData.description} onChange={handleChange} />
                
                <div className={style.buttonBox}>
                    <button className={style.discard} onClick={close}>Discard</button>
                    <button className={style.create} onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </div>

    </div>
}