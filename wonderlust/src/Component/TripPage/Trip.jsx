import style from './styles.module.css'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { useState } from 'react';
import { CreateModal } from './CreateModal/CreateModal';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Get_Trips } from '../../Redux/Trips/actions';
import TripCard from './TripCard/TripCard';
import { Get_Bookings } from '../../Redux/Bookings/actions'
import { BookingCard, EmptyBookingCard } from './BookingCard/BookingCard';

const Trip = () => {
    const [disCreateModal, setDisCreateModal] = useState(false);
    const token = useSelector((store) => store.auth.data.token);
    const tripData = useSelector((store) => store.trip.data);
    const bookingsData = useSelector((store) => store.bookings.data);
    const dispatch = useDispatch();
    const [tripStatus, setTripStatus] = useState(null);

    const hideModal = () => {
        setDisCreateModal(false)
    }
    const showModal = () => {
        setDisCreateModal(true)
    }

    useEffect(() => {
        dispatch(Get_Trips(token));
        dispatch(Get_Bookings(token));
    }, [])
    return <div className={style.page}>
        <div className={style.board}>
            <div className={style.createButton}>
                <button onClick={showModal}><IoMdAddCircleOutline /> <p>Create Trip</p></button>
                {disCreateModal ? <CreateModal methods={{ close: hideModal }} data={{ type: 'create' }} /> : ""}
            </div>

            <div className={style.tripBoard}>

                <h2>Trips</h2>

                <div className={style.tripGrid}>
                    {tripData.map((i) => <TripCard key={i._id} data={i} />)}
                </div>

            </div>
        </div>

        <div className={style.bookingsBoard}>
            <h2>{tripStatus ? tripStatus : "Hotel Bookings"}</h2>
            {bookingsData.length!==0?<div className={style.tripGrid}>
                {bookingsData.map((i) => <BookingCard key={i._id} data={i} />)}
            </div>:
            <EmptyBookingCard />}
        </div>
    </div>
}
export default Trip;