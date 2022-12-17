import style from './DashBoardCard.module.css';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

export const DashBoardCard = (props) => {
    const {type, links} = props;
    const {reg, view} = links;

    const [count, setCount] = useState(0);

    
    useEffect(()=>{
        if(type==='hotels'){
            const getCount = async()=>{
                let res = await axios.get('http://localhost:8080/hotel/count')
                let count = res.data.count

                setCount(count);
            }
            getCount();
        }
    }, [])


    return <div className={style.cateCard}>

        <h2 className={style.cateHead}>{type}</h2>


        <div className={style.infoGrid}>

            <div className={style.infoTag}>
                <h3>Count: </h3>
                <p>{count}</p>
            </div>

            <div className={style.infoTag}>
                <h3>Cities: </h3>
                <p>75</p>
            </div>

            <div className={style.infoTag}>
                <h3>Bookings: </h3>
                <p>75</p>
            </div>

            <div className={style.infoTag}>
                <h3>Misc: </h3>
                <p>000</p>
            </div>


        </div>

        <div className={style.buttonBox}>
            {type=='users' || type==='bookings'?"":<button>{reg?<Link to={reg}>Register New</Link>:"Register New"}</button>}
            <button>{view?<Link to={view}>Manage Data</Link>:"Manage Data"}</button>
        </div>

    </div>
}