import { useEffect } from 'react';
import { useState } from 'react';
import style from './TripCard.module.css';
import {IoIosArrowForward} from 'react-icons/io'
export default ({data})=>{
    const {name, description, createdAt, modifiedAt} = data;

    const [createdData, setCreatedData] = useState({number:0, words:""});

    let date = new Date(createdAt);
    let currentDate = new Date();



    return <div className={style.tripCard}>
        <h2 className={style.tripCardHead}>{name}</h2>
        <p className={style.tripCardDiscription}>{description}</p>

        {/* <div className={style.timeStamps}>
            <p>Created {createdData.number} {createdData.words} ago</p>
        </div> */}

        <div className={style.buttonBox}>
            <button>View <IoIosArrowForward/></button>
        </div>
    </div>
}