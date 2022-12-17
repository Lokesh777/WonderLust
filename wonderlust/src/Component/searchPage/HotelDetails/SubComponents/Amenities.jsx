// import React from 'react'
// import styles from './styles/amenities.module.css'
// import WifiIcon from '@mui/icons-material/Wifi';
// import LocalParkingIcon from '@mui/icons-material/LocalParking';
// import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
// import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
// import GroupIcon from '@mui/icons-material/Group';
// import RoomServiceIcon from '@mui/icons-material/RoomService';
// import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
// import AccessibleIcon from '@mui/icons-material/Accessible';
// import SpaIcon from '@mui/icons-material/Spa';
// import DoneIcon from '@mui/icons-material/Done';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
// import HotelIcon from '@mui/icons-material/Hotel';
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import {Modal,Box} from '@mui/material';




// const Amenities = () => {
//     return (
//         <>
//             <div className={styles.amenities_div}>
//                 <div className={styles.amenities}>
//                     <div className={styles.left}>
//                         <h3>Property amenities</h3>
//                     </div>
//                     <div className={styles.mid}>
//                         <Box className={styles.flex_1}>
//                             <WifiIcon />
//                             <h4>Internet</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>Available in all rooms: Free WiFi and wired Internet</p>
//                             <p>Available in some public areas: Free WiFi</p>
//                             <p>WiFi in public areas is free with a 4-device limit</p>
//                             <p>Free in-room WiFi has a 4-device limit</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <LocalParkingIcon />
//                             <h4>Parking and transportation</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>Free self parking on site</p>
//                             <p>Free valet parking on site</p>
//                             <p>Limited onsite parking</p>
//                             <p>Wheelchair-accessible parking and van parking available</p>
//                             <p>Height restrictions apply for onsite parking</p>
//                             <p>Free offsite parking</p>
//                             <p>Street parking available</p>
//                             <p>24-hour roundtrip airport shuttle (surcharge)</p>
//                             <p>Airport shuttle on request</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <RestaurantMenuIcon />
//                             <h4>Food and drink</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>Buffet breakfast available for a fee daily 6:30 AM–10:30 AM: INR 1200 for adults and INR 625 for children
//                             </p>
//                             <p>5 restaurants and 1 coffee shop/café</p>
//                             <p>1 bar</p>
//                             <p>24-hour room service</p>
//                             <p>Coffee/tea in common area(s)</p>
//                             <p>Hosted evening meal available daily for a fee of INR 10000</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <VideogameAssetIcon />
//                             <h4>Things to do</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>24-hour fitness center</p>
//                             <p>9 holes of golf</p>
//                             <p>Evening entertainment</p>
//                             <p>Full-service spa</p>
//                             <p>Mini golf</p>
//                             <p>Nightclub</p>
//                             <p>Outdoor pool</p>
//                             <p>Private picnics</p>
//                             <p>Shopping</p>
//                             <p>Spa tub</p>
//                             <p>Steam room</p>
//                             <p>Yoga classes</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <GroupIcon />
//                             <h4>Family friendly</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>Art supplies</p>
//                             <p>Babysitting/childcare (surcharge)</p>
//                             <p>Children's books</p>
//                             <p>Children's games</p>
//                             <p> Children's dinnerware</p>
//                             <p>Children's toys</p>
//                             <p>DVD player</p>
//                             <p>Free cribs/infant beds</p>
//                             <p>Highchair</p>
//                             <p>In-room child care (surcharge)</p>
//                             <p>Laundry facilities</p>
//                             <p>Mini golf</p>
//                             <p>Outdoor pool</p>
//                             <p>Rollaway/extra beds (surcharge)</p>
//                             <p>Snack bar/deli</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <ConfirmationNumberIcon />
//                             <h4>Conveniences</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>ATM/banking services</p>
//                             <p>Ballroom</p>
//                             <p>Banquet hall</p>
//                             <p>Elevator</p>
//                             <p>Free newspapers in lobby</p>
//                             <p>Front-desk safe</p>
//                             <p>Gift shop/newsstand</p>
//                             <p>Reception hall</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <RoomServiceIcon />
//                             <h4>Guest services</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>24-hour front desk</p>
//                             <p>Concierge services</p>
//                             <p>Daily housekeeping</p>
//                             <p>Dry cleaning service</p>
//                             <p>Hair salon</p>
//                             <p>Laundry facilities</p>
//                             <p>Luggage storage</p>
//                             <p>Multilingual staff</p>
//                             <p>Porter/bellhop</p>
//                             <p>Tour/ticket assistance</p>
//                             <p>Turndown service</p>
//                             <p>Wedding services</p>
//                         </div>
//                     </div>
//                     <div className={styles.right}>
//                         <Box className={styles.flex_1}>
//                             <DoneIcon />
//                             <h4>Languages spoken</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>English</p>
//                             <p>Hindi</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <BusinessCenterIcon />
//                             <h4>Business services</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>24-hour business center</p>
//                             <p>Computer station</p>
//                             <p>Conference center (50000 square feet of space)</p>
//                             <p>Coworking space</p>
//                             <p>Meeting rooms - 5</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <OutdoorGrillIcon />
//                             <h4>Outdoors</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>BBQ grill(s)</p>
//                             <p>Free pool cabanas</p>
//                             <p>Garden</p>
//                             <p>Outdoor furniture</p>
//                             <p>Picnic area</p>
//                             <p>Pool sun loungers</p>
//                             <p>Pool umbrellas</p>
//                             <p>Terrace</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <SpaIcon />
//                             <h4>Spa</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>4 treatment rooms</p>
//                             <p>Aromatherapy</p>
//                             <p>Body scrubs</p>
//                             <p>Body treatments</p>
//                             <p>Body wraps</p>
//                             <p>Couples treatment room(s)</p>
//                             <p>Detox wraps</p>
//                             <p>Facials</p>
//                             <p>Manicures and pedicures</p>
//                             <p>Massage - deep-tissue</p>
//                             <p>Massage/treatment rooms</p>
//                             <p>Spa open daily</p>
//                             <p>Spa tub</p>
//                             <p>Steam room</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <AccessibleIcon />
//                             <h4>Accessibility</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>If you have requests for specific accessibility needs, please contact the property using the information on the reservation confirmation received after booking.</p>
//                             <p>Accessible bathroom (select rooms)</p>
//                             <p>Bathroom emergency pull cord</p>
//                             <p>Braille signage</p>
//                             <p>Grab bar near toilet</p>
//                             <p>In-room accessibility</p>
//                             <p>Low-height counter and sink</p>
//                             <p>Raised toilet seat</p>
//                             <p>Roll-in shower (select rooms)</p>
//                             <p>Valet for wheelchair-equipped vehicle</p>
//                             <p>Wheelchair-accessible business center</p>
//                             <p>Wheelchair-accessible concierge desk</p>
//                             <p>Wheelchair-accessible fitness center</p>
//                             <p>Wheelchair-accessible lounge</p>
//                             <p>Wheelchair-accessible parking</p>
//                             <p>Wheelchair-accessible path of travel</p>
//                             <p>Wheelchair-accessible path to elevator</p>
//                             <p>Wheelchair-accessible pool</p>
//                             <p>Wheelchair-accessible public washroom</p>
//                             <p>Wheelchair-accessible registration desk</p>
//                             <p>Wheelchair-accessible restaurant</p>
//                             <p>Wheelchair-accessible spa</p>
//                             <p>Wheelchair-accessible van parking</p>
//                             <p>Wheelchairs available on site</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <DoneIcon />
//                             <h4>More</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>Couples dining</p>
//                             <p>Designated smoking areas (fines apply)</p>
//                             <p>Renovated entire property - September 2019</p>
//                             <p>Romance packages available</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.line}></div>

//                 {/* ! Room amenities */}

//                 <div className={styles.amenities}>
//                     <div className={styles.left}>
//                         <h3>Room amenities</h3>
//                     </div>
//                     <div className={styles.mid}>
//                         <Box className={styles.flex_1}>
//                             <HotelIcon />
//                             <h4>Bedroom</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>Air conditioning</p>
//                             <p>Bed sheets</p>
//                             <p>Blackout drapes/curtains</p>
//                             <p>Free cribs/infant beds</p>
//                             <p>Hypo-allergenic bedding</p>
//                             <p>Premium bedding</p>
//                             <p>Rollaway/extra beds (surcharge)</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <BathtubIcon />
//                             <h4>Bathroom</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>Bathrobes</p>
//                             <p>Designer toiletries</p>
//                             <p>Hair dryer</p>
//                             <p>Shampoo</p>
//                             <p>Shower/tub combination</p>
//                             <p>Soap</p>
//                             <p>Toilet paper</p>
//                             <p>Towels</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <DoneIcon />
//                             <h4>Entertainments</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>32-inch LED TV</p>
//                             <p>DVD player</p>
//                             <p>Pay movies</p>
//                             <p>Premium channels</p>
//                             <p>Satellite channels</p>
//                         </div>
//                         <Box className={styles.flex_1}>
//                             <RestaurantMenuIcon />
//                             <h4>Food and drink</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>Champagne service</p>
//                             <p>Electric kettle</p>
//                             <p>Free bottled water</p>
//                             <p>Free tea bags/instant coffee</p>
//                             <p>Minibar</p>
//                         </div>
//                     </div>
//                     <div className={styles.right}>
//                         <Box className={styles.flex_1}>
//                             <DoneIcon />
//                             <h4>More</h4>
//                         </Box>
//                         <div style={{ marginLeft: '33px' }}>
//                             <p>Composting</p>
//                             <p>Connecting rooms available</p>
//                             <p>Desk</p>
//                             <p>Eco-friendly cleaning products used</p>
//                             <p>Free newspapers</p>
//                             <p>Guidebooks/recommendations</p>
//                             <p>Individually decorated</p>
//                             <p>Individually furnished</p>
//                             <p>Iron/ironing board (on request)</p>
//                             <p>Laptop-friendly workspace</p>
//                             <p>LED light bulbs</p>
//                             <p>Local maps</p>
//                             <p>Phone</p>
//                             <p>Recycling</p>
//                             <p>Restaurant dining guide</p>
//                             <p>safe</p>
//                             <p>Slippers</p>
//                             <p>Turndown service</p>
//                             <p>Window screens</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }

// export default Amenities
