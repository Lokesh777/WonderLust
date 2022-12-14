import style from './RoomCard.module.css'
import {AiFillPlusCircle} from 'react-icons/ai'

export const RoomCard = ( )=> {
    return <div className={style.roomCard}>

    </div>
}
export const EmptyRoomCard = (props) => {
    const {click} = props;
    return <div className={style.emptyCard} onClick={click}>
        <h2>Add Room</h2>
        <AiFillPlusCircle/>
    </div>
}