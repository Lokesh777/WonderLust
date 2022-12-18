import style from './RoomCard.module.css';

export default ({info, methods}) => {
    const {selectRoom} = methods;
    const {data, curRoom, index} = info
    const {name, price, realPrice, discount, maxPersons} = data;
    return <div className={curRoom===index?style.selectedRoomCard:style.roomCard} onClick={()=>selectRoom(index)} >
        <h3 className={style.name}>{name}</h3>
        <p className={style.realPrice}>$ {realPrice}</p>
        <p className={style.price}>$ {price}</p>
        <p className={style.discount}>{discount.toFixed(0)}% off</p>
        <p>Max. per room {maxPersons}</p>
    </div>
}