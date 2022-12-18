import style from './Style.module.css'
import { useNavigate } from 'react-router-dom';

export const BookingCard = ({ data, methods }) => {
    const { type, totalPrice, createdAt, hotel } = data;
    const { name, _id } = hotel;
    const navigate = useNavigate();

    const crDate = new Date(createdAt);
    const [year, month, date, hours, minutes] = [crDate.getFullYear(), crDate.getMonth()+1, crDate.getDate(), crDate.getHours(), crDate.getMinutes()]
    return <div className={style.BookingCard}>

        <div className={style.bookingHead}>
            <h3>Booking ID:</h3><h2>{data._id}</h2>
        </div>

        <div className={style.info}>

            <div className={style.QR_code}>
                <img src="https://img.icons8.com/ios7/12x/qr-code--v2.png" />
            </div>

            <div className={style.otherInfo}>
                <h2>Booking: {type}</h2>
                <h2>{name}</h2>
                <h2>Bill: ${totalPrice}</h2>
                <p>{`${hours} : ${minutes}, ${date}/${month}/${year}`}</p>
            </div>

        </div>
    </div>
}

export const EmptyBookingCard = () => {
    const navigate = useNavigate();
    return <div className={style.emptyCard}>
        <h2>You don't have any booking.</h2>
        <h3>Go and start exploring</h3>
        <button onClick={()=>{
            return navigate('/')
        }} className={style.explore}>Explore</button>
    </div>
}  