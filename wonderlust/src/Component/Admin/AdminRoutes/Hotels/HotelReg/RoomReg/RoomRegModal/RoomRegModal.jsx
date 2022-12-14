import { useRef, useState } from 'react'
import style from './RoomRegModal.module.css'
import {RqStar} from '../../../../../AdminNav/adminNav';
import {IoMdCloseCircleOutline} from 'react-icons/io'

const amenityIData = {
    "bedroom": [],
    "bathroom": [],
    "foodAndDrink": [],
    "other": [],
}

export const RoomRegModal = (props) => {
    const { close, add } = props
    const [amenityInp, setAmenityInp] = useState('');
    const [amenityType, setAmenityType] = useState('bedroom');
    const [amenityData, setAmenityData] = useState(amenityIData);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [offerPrice, setOfferPrice] = useState(0);
    const [count, setCount] = useState('');

    const [size, setSize] = useState(0);
    const [mxPer, setmxPer] = useState(0);
    const [bdcount, setBDCount] = useState(0);
    const [bdType, setBDType] = useState('standard');

    const [refundBool, setRefundBool] = useState(false);
    const [ptlater, setptlter] = useState(false);

    const handleAddAmenity = () => {

        setAmenityData((data) => {
            data[amenityType].push(amenityInp);
            let newData = {
                "bedroom": [...data["bedroom"]],
                "other": [...data["other"]],
                "foodAndDrink": [...data["foodAndDrink"]],
                "bathroom": [...data["bathroom"]],
            }
            return newData;
        })
    }

    const handleAddRoom = () => {
        let obj={
            name,
            price,
            realPrice:offerPrice,
            amenities:amenityData,
            refundable:refundBool,
            payLater:ptlater,
            maxPersons:mxPer,
            size,
            count,
            beds:{
                count:bdcount,
                type:bdType
            },
            booked:0,
            images:[
                "https://cdn.impala.travel/properties/cknecef9900a30uo51wn0d0oy.jpg",
                "https://cdn.impala.travel/properties/cknecyvqv00b60uo572756nph.jpg",
                "https://cdn.impala.travel/properties/cknecy2nl00b40uo5glxy2itq.jpg",
                "https://cdn.impala.travel/properties/cknecxh0c00b30uo53fnzbsb3.jpg",
                "https://cdn.impala.travel/properties/cknecw0t600b00uo56m4u7qye.jpg"
            ]
        }

        add(obj);
    }


    return <div className={style.modal}>
        <div className={style.body}>
        <div className={style.closeCross}><IoMdCloseCircleOutline className={style.close} onClick={close}/></div>
            <h2>Room Data</h2>
            <div className={style.form}>

                <div className={style.reg1}>
                    <h3>Primary</h3>
                    <label>
                        <p>Room Name<RqStar/></p>
                        <input type="text" placeholder='Enter The Room Name' value={name} onChange={(event)=>{setName(event.target.value)}} />
                    </label>

                    <div className={style.priceBox}>
                        <label>
                            <p>Price<RqStar/></p>
                            <input type="number" placeholder='Enter The Room Price' value={price.toString()} onChange={(event)=>{setPrice(+event.target.value)}}/>
                        </label>
                        <label>
                            <p>Offer Price<RqStar/></p>
                            <input type="number" placeholder='Enter The Room Offer Price' value={offerPrice.toString()} onChange={(event)=>{setOfferPrice(+event.target.value)}}/>
                        </label>
                        <label>
                            <p>Room Count<RqStar/></p>
                            <input type="number" placeholder='Enter The Room Counts' value={count.toString()} onChange={(event)=>{setCount(+event.target.value)}}/>
                        </label>
                    </div>
                    <div className={style.checkBox}>
                        <label>
                            <p>Refundable</p>
                            <input type="checkbox" checked={refundBool} onChange={(event)=>{setRefundBool(event.target.checked)}}/>
                        </label>
                        <label>
                            <p>Pay Later</p>
                            <input type="checkbox" checked={ptlater} onChange={(event)=>{setptlter(event.target.checked)}}/>
                        </label>
                    </div>
                    <div className={style.priceBox}>
                        <label>
                            <p>Size<RqStar/></p>
                            <input type="number" placeholder='Room Size' value={size.toString()} onChange={(event)=>{setSize(+event.target.value)}}/>
                        </label>
                        <label>
                            <p>Persons<RqStar/></p>
                            <input type="number" placeholder='Max Persons' value={mxPer.toString()} onChange={(event)=>{setmxPer(+event.target.value)}}/>
                        </label>
                    </div>
                    <div className={style.priceBox}>
                        <label>
                            <p>Bed Count<RqStar/></p>
                            <input type="number" placeholder='Room Size' value={bdcount.toString()} onChange={(event)=>{setBDCount(+event.target.value)}}/>
                        </label>
                        <label>
                            <p>Bed Type<RqStar/></p>
                            <select value={bdType} onChange={(event)=>{setBDType(event.target.value)}}>
                                <option value="standard">Standard</option>
                                <option value="twin">Twin</option>
                                <option value="single">Single</option>
                                <option value="queen">Queen</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className={style.reg1}>

                    <h3>Room Amenities</h3>
                    <p>Type Amenity tag and press enter</p>

                    <div className={style.amenityInput}>
                        <label>
                            <p>Amenity</p>
                            <input type="text" placeholder='Amenity' value={amenityInp} onChange={(event) => { setAmenityInp(event.target.value) }} />
                        </label>
                        <label>
                            <p>Amenity Type</p>
                            <select value={amenityType} onChange={(event) => { setAmenityType(event.target.value) }}>
                                <option value="bedroom">Bedroom</option>
                                <option value="bathroom">Bathroom</option>
                                <option value="foodAndDrink">Food & Drinks</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={handleAddAmenity} className={style.amenityButt}>Add</button>


                    <div className={style.amenity}>
                        <div>
                            <h4>Bedroom</h4>
                            <ul>
                                {amenityData['bedroom'].map((i, e) => <li key={`ams-bed${e}`}>{i}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4>Bathroom</h4>
                            <ul>
                                {amenityData['bathroom'].map((i, e) => <li key={`ams-bathr${e}`}>{i}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4>Food & Drinks</h4>
                            <ul>
                                {amenityData['foodAndDrink'].map((i, e) => <li key={`ams-fd${e}`}>{i}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4>Other</h4>
                            <ul>
                                {amenityData['other'].map((i, e) => <li key={`ams-oth${e}`}>{i}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className={style.butBox}>
                <button className={style.discard} onClick={close}>Discard</button>
                <button 
                    className={style.addRoom}
                    disabled={name==='' || price===0 || offerPrice===0 || bdcount===0 || size===0 || count===0 ||  mxPer===0}
                    onClick={handleAddRoom}
                >Add Room</button>
            </div>

        </div>
    </div>
}