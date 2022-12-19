import style from './styles.module.css'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { useState } from 'react';
import { CreateModal } from './CreateModal/CreateModal';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Get_Trips } from '../../Redux/Trips/actions';
import TripCard, { EmptyTripCard } from './TripCard/TripCard';
import { Get_Bookings } from '../../Redux/Bookings/actions'
import { BookingCard, EmptyBookingCard } from './BookingCard/BookingCard';
import axios  from 'axios'

const sampleData = [
    {
        "_id": "639f14580c0c75a86fed94c8",
        "user": "639efae74bb0b15f1e70c1bd",
        "type": "hotel",
        "hotel": {
            "_id": "639bf9faa8b6b3ab211afe7b",
            "name": "capella bangkok"
        },
        "totalPrice": 958,
        "roomsPrice": 862,
        "servicesCharge": 96,
        "roomsData": 2,
        "persons": 1,
        "createdAt": 1671369816165,
        "modifiedAt": 1671369816165,
        "__v": 0
    },
    {
        "_id": "639f14b90c0c75a86fed94d8",
        "user": "639efae74bb0b15f1e70c1bd",
        "type": "hotel",
        "hotel": {
            "_id": "639bf9faa8b6b3ab211afe7b",
            "name": "capella bangkok"
        },
        "totalPrice": 507,
        "roomsPrice": 411,
        "servicesCharge": 96,
        "roomsData": 3,
        "persons": 1,
        "createdAt": 1671369913188,
        "modifiedAt": 1671369913188,
        "__v": 0
    }
]



const Trip = () => {
    const [disCreateModal, setDisCreateModal] = useState(false);
    const token = useSelector((store) => store.auth.data.token);
    const tripData = useSelector((store) => store.trip.data);
    const [bookingsData, setbookingsData] = useState(sampleData)
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
    }, [])

    useEffect(()=>{
        let getData = async() =>{
            let res = await axios.get('http://localhost:8080/bookingHotel/user', {headers:{token}});
            setbookingsData(res.data);
        }
        getData();
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
                    {tripData.length !== 0 ? <div className={style.tripGrid}>
                        {tripData.map((i) => <TripCard key={i._id} data={i} />)}
                    </div> :
                        <EmptyTripCard  create={showModal}/>}
                </div>

            </div>
        </div>

        <div className={style.bookingsBoard}>
            <h2>{tripStatus ? tripStatus : "Hotel Bookings"}</h2>
            {bookingsData.length !== 0 ? <div className={style.tripGrid}>
                {bookingsData.map((i) => <BookingCard key={i._id} data={i} />)}
            </div> :
                <EmptyBookingCard />}
        </div>
    </div>
}
export default Trip;

