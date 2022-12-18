import style from './RoomCard.module.css';

export default ({data,handleClick}) => {
    const {name, price, realPrice, discount, maxPersons} = data;
    return <div className={style.roomCard} onClick={handleClick} >
        <h3 className={style.name}>{name}</h3>
        <p className={style.realPrice}>$ {realPrice}</p>
        <p className={style.price}>$ {price}</p>
        <p className={style.discount}>{discount.toFixed(0)}% off</p>
        <p>Max. per room {maxPersons}</p>
    </div>
}