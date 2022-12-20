import { useEffect, useState } from "react"
import style from './Hotel.module.css';
import axios from "axios";
import { HotelCard } from "./HotelCard";
import {MdOutlineAddBusiness} from 'react-icons/md'

export const Hotels = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            let res = await axios.get('http://localhost:8080/hotel?priceSort=desc');
            setData(res.data);
        }
        getData();
    }, [])

    return <div className={style.hotel}>
        <h1 className={style.head}>Hotels Data</h1>
        <div className={style.page}>
            <div className={style.panelB}>
                <div className={style.panel}>

                    {/* Search */}
                    <div className={style.panelBox}>

                        <div className={style.registerButton}><p>Register Hotel</p><MdOutlineAddBusiness/></div>
                        
                        <h2>Search</h2>
                        <label>
                            <p>Search by Name</p>
                            <input type="text" placeholder="Enter Hotel Name" />
                        </label>
                    </div>

                    {/* Filter */}
                    <div className={style.panelBox}>
                        <h2>Filter</h2>
                        <label>
                            <p>City</p>
                            <input type="text" placeholder="Choose City name" />
                        </label>
                        <label>
                            <p>Prices</p>
                            <input type="range" />
                        </label>
                        <label>
                            <p>Stars</p>
                            <input type="range" />
                        </label>
                    </div>

                    {/* sort */}
                    <div className={style.panelBox}>
                        <h2>Sort</h2>
                        <label>
                            <p>Prices</p>
                            <div className={style.checkBoxes}>
                                <label>
                                    <p>High to Low</p>
                                    <input type="checkbox"/></label>
                                <label><p>Low To High</p><input type="checkbox"/></label>
                            </div>
                        </label>
                        <label>
                            <p>Discount</p>
                            <div className={style.checkBoxes}>
                                <label><p>High to Low</p><input type="checkbox"/></label>
                                <label><p>Low To High</p><input type="checkbox"/></label>
                            </div>
                        </label>
                        <label>
                            <p>Name</p>
                            <div className={style.checkBoxes}>
                                <label><p>Alphabetical(A-Z)</p><input type="checkbox"/></label>
                                <label><p>Reverse-alphabetical(Z-A)</p><input type="checkbox"/></label>
                            </div>
                        </label>
                    </div>

                </div>
            </div>
            <div>
                {/* <div>
                    <button>Prev</button>
                    <p>1</p>
                    <button>next</button>
                </div> */}
            <div className={style.container}>
                {data.map((item) => <HotelCard key={item._id + 'hotelview'} data={item}></HotelCard>)}
            </div>
            </div>

        </div>
    </div>
}