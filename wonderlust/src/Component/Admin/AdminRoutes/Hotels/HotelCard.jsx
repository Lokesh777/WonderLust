import style from './Hotel.module.css';
import {AiFillStar} from 'react-icons/ai'
import {useState} from 'react'
import {IoLocationSharp} from 'react-icons/io5'

export const HotelCard = ({data}) => {
    const stars = data.starRating;
    const [imgC, setImgC] = useState(0);

    const {rooms} = data;

    let min=Infinity, max=-Infinity;
    rooms.forEach((i)=>{
        if(i.price<min){
            min=i.price
        }
        if(i.price>max){
            max=i.price
        }
    })

    // const discount = (data.price-data.realPrice)*100/data.price

    return <div className={style.hotelcard}>
        <div className={style.images}>
            <img src={data.images[imgC]} alt="" />
        </div>
        <div className={style.info}>
            <h3 className={style.infoTitle}>{data.name}</h3>
            <div className={style.infoStars}>{new Array(stars).fill(0).map((i)=><AiFillStar/>)}</div>
            <div className={style.infoCity}><IoLocationSharp/> <p>{data.contactInfo.city}</p></div>

            <h2 className={style.infoPrice}>
                {`$${min} - $${max}`}
            </h2>

            <div className={style.buttonBox}>
                <button>Details</button>
                <button>Edit</button>
            </div>
        </div>
    </div>
}