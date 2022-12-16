import { useEffect, useState } from 'react';
import style from './Checkout.module.css';
import {AiFillStar} from 'react-icons/ai'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import { useRef } from 'react';
import RoomCard from './RoomCard/RoomCard';

const sampleHotelData = {
    "contactInfo": {
        "phone": [
            "9183919371"
        ],
        "emails": [
            "bangkok.capella@gmx.com"
        ],
        "websiteUrl": "bangkok.capella460.us",
        "address": "8, shivaji Nagar, sarang Road",
        "city": "rajkot"
    },
    "_id": "639bf9faa8b6b3ab211afe7b",
    "name": "capella bangkok",
    "starRating": 4,
    "rating": 2.1,
    "prices": [
        222,
        595,
        1104,
        526
    ],
    "realPrices": [
        185,
        488,
        862,
        411
    ],
    "discounts": [
        16.666666666666664,
        17.983193277310924,
        21.920289855072465,
        21.863117870722434
    ],
    "minDiscount": 16.666666666666664,
    "maxDiscount": 21.920289855072465,
    "minPrice": 222,
    "maxPrice": 1104,
    "createdAt": "2022-12-16T04:54:18.956Z",
    "modifiedAt": "2022-12-16T04:54:18.956Z",
    "reviews": [
        {
            "rating": 4,
            "comment": "Good",
            "_id": "639bf9faa8b6b3ab211afe7c"
        }
    ],
    "count": 200,
    "booked": 0,
    "description": "In a unique reconstructed and renovated building in an enviable location, Gran Hotel Sardinero is the perfect starting point for exploring Santander’s cultural, leisure and business activities.",
    "images": [
        "https://cdn.impala.travel/properties/ckna6389z006c0uo53gyeb9oq.jpg",
        "https://cdn.impala.travel/properties/ckna61sei006a0uo56txresa3.jpg",
        "https://cdn.impala.travel/properties/ckna62ckp006b0uo51jq4dou6.jpg",
        "https://cdn.impala.travel/properties/ckna64p8r006f0uo51csrhy1v.jpg",
        "https://cdn.impala.travel/properties/ckna66uyn006i0uo5b21wgdy5.jpg"
    ],
    "rooms": [
        {
            "beds": {
                "type": "queen",
                "count": 2
            },
            "amenities": {
                "bathroom": [
                    "massage",
                    "bathtub",
                    "spa"
                ],
                "bedroom": [
                    "tv",
                    "satellite television",
                    "air conditioning",
                    "bidet"
                ],
                "foodAndDrink": [
                    "bbq",
                    "breakfast",
                    "beer"
                ],
                "other": [
                    "business library",
                    "pool",
                    "currency exchange"
                ]
            },
            "size": 1886,
            "maxPersons": 3,
            "count": 21,
            "booked": 0,
            "images": [
                "https://cdn.impala.travel/properties/cknebx4ir00840uo50yixhw4z.jpg",
                "https://cdn.impala.travel/properties/cknebw6ae00820uo50gh72966.jpg",
                "https://cdn.impala.travel/properties/cknebwsnx00830uo55wfrhdqd.jpg",
                "https://cdn.impala.travel/properties/cknebydah00850uo5aowbf1vn.jpg",
                "https://cdn.impala.travel/properties/cknebyl1q00860uo5c09bayee.jpg"
            ],
            "refundable": false,
            "payLater": false,
            "price": 222,
            "realPrice": 185,
            "discount": 16.666666666666664,
            "name": "royal",
            "_id": "639bf9faa8b6b3ab211afe7d"
        },
        {
            "beds": {
                "type": "standard",
                "count": 4
            },
            "amenities": {
                "bathroom": [
                    "haircare",
                    "private bathroom",
                    "spa"
                ],
                "bedroom": [
                    "soundproofed room",
                    "slippers",
                    "minibar",
                    "air conditioning"
                ],
                "foodAndDrink": [
                    "campfire",
                    "dining",
                    "bbq",
                    "beer",
                    "breakfast"
                ],
                "other": [
                    "pool",
                    "wireless internet connection",
                    "balcony"
                ]
            },
            "size": 1096,
            "maxPersons": 8,
            "count": 49,
            "booked": 0,
            "images": [
                "https://cdn.impala.travel/properties/ckned0efs00bf0uo5gznv7vw4.jpg",
                "https://cdn.impala.travel/properties/ckned5t3z00ca0uo5fpok75ec.jpg",
                "https://cdn.impala.travel/properties/ckned6we200cc0uo5gi43164d.jpg",
                "https://cdn.impala.travel/properties/ckned7gef00cd0uo5d9ia8049.jpg",
                "https://cdn.impala.travel/properties/ckned3o0n00c60uo5af8f80r6.jpg"
            ],
            "refundable": false,
            "payLater": true,
            "price": 595,
            "realPrice": 488,
            "discount": 17.983193277310924,
            "name": "premium",
            "_id": "639bf9faa8b6b3ab211afe7e"
        },
        {
            "beds": {
                "type": "twin",
                "count": 1
            },
            "amenities": {
                "bathroom": [
                    "massage",
                    "haircare",
                    "bath or shower",
                    "bathroom amenities (free toiletries)",
                    "private bathroom"
                ],
                "bedroom": [
                    "satellite television",
                    "tv",
                    "minibar",
                    "slippers",
                    "soundproofed room",
                    "air conditioning"
                ],
                "foodAndDrink": [
                    "breakfast",
                    "campfire",
                    "bbq"
                ],
                "other": [
                    "pool",
                    "currency exchange",
                    "seating area with sofa/chair",
                    "balcony",
                    "business library",
                    "wireless internet connection"
                ]
            },
            "size": 1455,
            "maxPersons": 2,
            "count": 61,
            "booked": 0,
            "images": [
                "https://cdn.impala.travel/properties/ckna5ie83004y0uo58jlh0gzh.jpg",
                "https://cdn.impala.travel/properties/ckna5jjyg004z0uo5dmhxgznz.jpg",
                "https://cdn.impala.travel/properties/ckna5lidl00520uo54zzk9pp7.jpg",
                "https://cdn.impala.travel/properties/ckna5lsv000540uo526g305o3.jpg",
                "https://cdn.impala.travel/properties/ckna5o98o005c0uo5egqh76dx.jpg"
            ],
            "refundable": true,
            "payLater": true,
            "price": 1104,
            "realPrice": 862,
            "discount": 21.920289855072465,
            "name": "standard",
            "_id": "639bf9faa8b6b3ab211afe7f"
        },
        {
            "beds": {
                "type": "queen",
                "count": 3
            },
            "amenities": {
                "bathroom": [
                    "haircare",
                    "slippers",
                    "bathroom ameniti"
                ],
                "bedroom": [
                    "soundproofed room",
                    "air conditioning",
                    "wireless internet connection",
                    "bidet"
                ],
                "foodAndDrink": [
                    "dining",
                    "traditional meal",
                    "breakfast",
                    "colddrinks",
                    "beer"
                ],
                "other": [
                    "pool",
                    "business library",
                    "currency exchange",
                    "balcony",
                    "seating area with sofa/chair",
                    "wireless internet connection"
                ]
            },
            "size": 1638,
            "maxPersons": 5,
            "count": 69,
            "booked": 0,
            "images": [
                "https://cdn.impala.travel/properties/cknebx4ir00840uo50yixhw4z.jpg",
                "https://cdn.impala.travel/properties/cknebw6ae00820uo50gh72966.jpg",
                "https://cdn.impala.travel/properties/cknebwsnx00830uo55wfrhdqd.jpg",
                "https://cdn.impala.travel/properties/cknebydah00850uo5aowbf1vn.jpg",
                "https://cdn.impala.travel/properties/cknebyl1q00860uo5c09bayee.jpg"
            ],
            "refundable": false,
            "payLater": true,
            "price": 526,
            "realPrice": 411,
            "discount": 21.863117870722434,
            "name": "premium",
            "_id": "639bf9faa8b6b3ab211afe80"
        }
    ],
    "popularAmenities": [],
    "misc": [],
    "nearby": [],
    "__v": 0
}
const sampleUserData = {
    fname: 'Lokesh',
    lname: "kumar",
}
const CheckoutPage = () => {
    const [imageNo, setImageNo] = useState(0);
    const [imageNoX, setImageNoX] = useState(1);
    const [persons, setPersons] = useState(1);
    const imageNoCounter = useRef(null);
    
   const myFunction = (event) =>{
        event.preventDefault();
       
        var discount=form.discount.value
   
        discount=discount/100;
   
        var random=discount*price1;
        
        
      
    }

    return <div className={style.checkout}>
        <h1 className={style.pageHead}>Booking</h1>

        <div className={style.main}>

            {/* left side div */}
            <div className={style.info}>

                {/* first box */}
                <div className={style.hotelBox}>
                    <div>
                        <h2>Hotel</h2>
                        <div className={style.infoTag1}><p>Hotel Name:</p> <p>{sampleHotelData.name}</p></div>
                        <div className={style.infoTag1}><p>City:</p> <p>{sampleHotelData.contactInfo.city}</p></div>
                        <div className={style.infoStars}>{new Array(sampleHotelData.starRating).fill(0).map((i,e)=><AiFillStar key={'satr'+e}/>)}</div>
                        <div className={style.infoTag2}>
                            <p>Available</p>
                            <p style={{backgroundColor:'rgb(80, 22, 173)'}}>Upto 35% off</p>
                        </div>
                    </div>
                    <div>
                        {imageNo>0?<button onClick={()=>{
                            setImageNo((i)=>i-1);
                        }}><FaArrowCircleLeft/></button>:""}
                        <img src={sampleHotelData.images[imageNo]} alt="" />
                        {imageNo<4?<button onClick={()=>{
                            setImageNo((i)=>i+1);
                        }}><FaArrowCircleRight/></button>:""}
                    </div>
                </div>

                {/* rooms data */}
                <div className={style.roomBox}>
                    <h2>Select Room</h2>
                    <div className={style.roomBoxGrid}>
                        {sampleHotelData.rooms.map((i, e)=><RoomCard key={e+'selectRoom'} data={sampleHotelData.rooms[e]}/>)}
                    </div>

                    <div className={style.generalData}>
                        <div>
                        <p><b>Number of Persons : </b>{persons}</p>
                        </div>
                    </div>
                    
                </div>
            </div>



            <div className={style.pricing}>
                  <h3 className={style.calculationLK} >Order Summary</h3>
                  
                  <p className={style.calculationLK}  >cart value :<span  id="price">₹</span></p>
                  <p className={style.calculationLK} 
                //   className={style.disc}
                  >Discount : <span id="disoffer">₹</span></p>
                  <h4 className={style.calculationLK} >Amount to be Paid: <span  id="finalamt">₹</span></h4>
                  {/* <!-- form  for discount selection here --> */}
                  {/* <input type="text" id="discount" placeholder="Apply The Exciting Discount Here!">
                    <input  type="submit"> */}
                  <form onClick={myFunction}>
                       <input  type={"text"} className="discount" placeholder="Apply The Exciting Discount Here!" />
                       <input  type="submit"/>
                  </form>
                 
            </div>
        </div>
    </div>
}

export default CheckoutPage;