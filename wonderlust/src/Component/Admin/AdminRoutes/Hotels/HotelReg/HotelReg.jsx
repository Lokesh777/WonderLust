import style from './HotelReg.module.css';
import {useState} from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { EmptyRoomCard, RoomCard } from './RoomReg/RoomCard/RoomCard';
import { RoomRegModal } from './RoomReg/RoomRegModal/RoomRegModal';

export const HotelReg = () => {
    
    const [phone, setPhones] = useState([""]);
    const [emails, setEmails] = useState([""]);
    const [rooms, setRooms] = useState([]);
    const [modalRoomDis, setModalRoomDis] = useState(false);


    const addPhone = () => {
        if(phone.length<=2){
            setPhones((data)=>{
                data=[...data, '']
                // alert('phone added')
                return data;
            })
        }else{
            // alert('max 4 phone can be added')
        }
    }

    const removePhone = () => {
        if(phone.length>1){
            setPhones((data)=>{
                data=data.filter((i, e)=>e!==data.length-1)
                // alert('phone removed')
                return data;
            })
        }else{
            // alert('min 1 phone required')
        }
    }

    const addEmail = () => {
        if(emails.length<=2){
            setEmails((data)=>{
                data=[...data, '']
                // alert('phone added')
                return data;
            })
        }else{
            // alert('max 4 email can be added')
        }
    }

    const removeEmail = () => {
        if(emails.length>1){
            setEmails((data)=>{
                data=data.filter((i, e)=>e!==data.length-1)
                // alert('phone removed')
                return data;
            })
        }else{
            // alert('min 1 email required')
        }
    }

    const showRoomModal = ()=>{
        setModalRoomDis(true)
    }
    const hideRoomModal = ()=>{
        setModalRoomDis(false)
    }
    const addRoomModel = (room) => {
        setRooms((data)=>{
            const newData = [...data, room]
            return newData;
        });
    }

    const removeRoom = (index) => {
        setRooms((data)=>{
            const newData = data.filter((i, e)=>e!==index);
            return newData;
        })
    }

    return <div className={style.hotelReg}>
        <h1>Register New Hotel</h1>

        <div className={style.regForm}>

            <h2>Primary Details</h2>
            <div className={style.reg1}>

                <div className={style.primary}>
                    <label>
                        <p>Hotel Name</p>
                        <input type="text" placeholder='Enter The Hotel Name' />
                    </label>

                    <label>
                        <p>City</p>
                        <input type="text" placeholder='Enter City' />
                    </label>

                    <label>
                        <p>Address</p>
                        <input type="text" placeholder='Enter Address' />
                    </label>
                </div>


                <div className={style.description}>
                    <label>
                        <p>Description</p>
                        <textarea className={style.descriptionBox} type="text" placeholder='Enter Hotel Description' ></textarea>
                    </label>
                </div>
            </div>

            <h2>Contact Details</h2>
            <div className={style.contact}>
                <label>
                    <p>Phone</p>
                    {
                        phone.map((ph, e)=><div>
                            <p>{e+1}.</p>
                            <input type="number" value={ph} key={'phone'+e} onChange={(event)=>{
                                setPhones((data)=>{
                                    let newData = data.map((i, j)=>{
                                        if(j===e){
                                            i=event.target.value;
                                        }
                                        return i
                                    });
                                    return newData;
                                })
                            }}/>
                            <button onClick={removePhone} disabled={phone.length===1}><RiDeleteBin6Line/></button>
                        </div>)
                    }
                    {phone.length<=2?<button onClick={addPhone} className={style.add_Button}>+</button>:""}
                </label>

                <label>
                    <p>emails</p>
                    {
                        emails.map((em, e)=><div>
                            <p>{e+1}.</p>
                            <input type="email" value={em} key={'emails'+e} onChange={(event)=>{
                                setEmails((data)=>{
                                    let newData=data.map((i, j)=>{
                                        if(j===e){
                                            i=event.target.value;
                                        }
                                        return i
                                    });
                                    
                                    return newData
                                })
                            }}/>
                            <button onClick={removeEmail} disabled={emails.length===1}><RiDeleteBin6Line/></button>
                        </div>)
                    }
                    {emails.length<=2?<button className={style.add_Button} onClick={addEmail}>+</button>:""}
                </label>

                <label>
                    <p>WebSite</p>
                    <div>
                    <input type="url" placeholder='Enter Website URL' />
                    </div>
                </label>
            </div>

            
            {/* Room Details */}
            <h2>Rooms Details</h2>

            <div className={style.roomForm}>
                {rooms.map((room, e)=>{
                    return <RoomCard data={room} methods={{index:e, removeRoom}} key={e+'$%^'+'roomcardForm'}/>
                })}
                {rooms.length<=3?<EmptyRoomCard click={showRoomModal}/>:""}

                {modalRoomDis?<RoomRegModal close={hideRoomModal} add={addRoomModel}/>:""}
            </div>


            {/* Submit */}

            <div className={style.submitBox}>
                <div className={style.agreeCheck}>
                    <input type="checkbox" />
                    <p>I have read all the legal agreement and policies and agreed to them.</p>
                </div>
                <div>
                    <button className={style.submitButton}>Register</button>
                </div>
            </div>

        </div>


    </div>
}