import style from './RoomCard.module.css'
import {AiFillPlusCircle} from 'react-icons/ai'

export const RoomCard = ({data, methods} )=> {
    const {name, price, realPrice, count, images, } = data;
    const {index, removeRoom} = methods;

    return <div className={style.roomCard}>
        <div style={{backgroundImage:`url(${images[0]})`}} className={style.img}>
        </div>
        <div className={style.info}>
            <h3 className={style.name}>{name}</h3>

            <div className={style.priceBox}>
                <h3 className={style.realPrice}>$ {realPrice}</h3>
                {realPrice==price?<h3 className={style.price}>$ {price}</h3>:""}
                <p>Available Rooms: {count}</p>
            </div>

            <div className={style.buttonBox}>
                <button onClick={()=>{removeRoom(index)}}>Remove</button>
                <button>View / Edit</button>
            </div>

        </div>
        
    </div>
}
export const EmptyRoomCard = (props) => {
    const {click} = props;
    return <div className={style.emptyCard} onClick={click}>
        <h2>Add Room</h2>
        <AiFillPlusCircle/>
    </div>
}