import {Modal,Box} from '@mui/material';

import React from 'react'
import styles from '../styles/aboutArea.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import FlightIcon from '@mui/icons-material/Flight';


const AboutArea = () => {
    return (
        <>
            <div className={styles.about_area}>
                <div className={styles.grid}>
                    <div className={styles.about}>
                        <h2>About this area</h2>
                        <h3 style={{ margin: '10px 0' }}>New Delhi</h3>
                        <p>Located in New Delhi, Taj Palace, New Delhi is connected to the convention center. Rashtrapati Bhavan and India Gate are notable landmarks, and travelers looking to shop may want to visit The Chanakya and Khan Market. Traveling with kids? Consider Worlds of Wonder, or check out an event or a game at Jawaharlal Nehru Stadium. Spend some time exploring the area's activities, including outlet shopping and golfing</p>
                    </div>
                    {/* <div className={styles.map}>Map is pending...</div> */}
                    <div className={styles.details}>
                        <div className={styles.nearby}>
                            <Box className={styles.flex_1}>
                                <LocationOnIcon />
                                <h3>What's nearby</h3>
                            </Box>
                            <div style={{ marginLeft: '32px' }}>
                                <p>Dhaula Kuan - 5 min walk</p>
                                <p>GK Market - 19 min walk</p>
                                <p>Pusa Hill Forest - 9 min drive</p>
                                <p>The Chanakya - 10 min drive</p>
                                <p>Sarojini Nagar Market - 12 min drive</p>
                            </div>
                        </div>
                        <div className={styles.around}>
                            <Box className={styles.flex_1}>
                                <DriveEtaIcon />
                                <h3>Getting around</h3>
                            </Box>
                            <div style={{ marginLeft: '30px' }}>
                                <Box className={styles.flex_2}>
                                    <DriveEtaIcon />
                                    <p>New Delhi Sardar Patel Station - 2 min walk</p>
                                </Box>
                                <Box className={styles.flex_2}>
                                    <DriveEtaIcon />
                                    <p>Dhaula Kuan Station - 2 min drive</p>
                                </Box>
                                <Box className={styles.flex_2}>
                                    <FlightIcon />
                                    <p>Indira Gandhi International Airport (DEL) - 22 min drive</p>
                                </Box>
                            </div>
                        </div>
                        <div className={styles.restaurant}>
                            <Box className={styles.flex_1}>
                                <RestaurantMenuIcon />
                                <h3>Restaurants</h3>
                            </Box>
                            <div style={{ marginLeft: '32px' }}>
                                <p>Orient Express – Fine-dining restaurant with a bar offering French cuisine. Serves dinner daily. Reservations required.</p>
                                <p>Masala Art – Family restaurant with a bar offering Indian cuisine. Serves lunch and dinner daily. Reservations required.</p>
                                <p>Spicy Duck – Pool-view family restaurant with a bar offering Chinese cuisine. Serves lunch and dinner daily. Reservations required.</p>
                                <p>Blue Bar – Pool-view bar offering Asian cuisine. Serves light fare daily. Reservations required.</p>
                                <p>Capital Kitchen – Poolside family restaurant with a bar offering international cuisine. Serves breakfast, brunch, lunch, dinner, and light fare daily. Open 24 hours, reservations required. Kids' menu available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ! about property page */}

            <div className={styles.about_area}>
                <div style={{ display: 'flex' }}>
                    <div className={styles.left}>
                        <h3>About this property</h3>
                    </div>
                    <div className={styles.right}>
                        <h4>Taj Palace, New Delhi</h4>
                        <p>Luxury hotel connected to the convention center in New Delhi with 5 restaurants</p>
                        <p>5 restaurants, a full-service spa, and a golf course are available at this hotel. Free WiFi in public areas and free valet parking are also provided. Additionally, an outdoor pool, a nightclub, and a health club are onsite. All 403 individually decorated rooms provide free WiFi, free wired Internet, and 24-hour room service. Guests will appreciate conveniences like electric kettles and free tea bags/instant coffee, while LED TVs with satellite channels and DVD players provide a bit of entertainment.</p>
                        <p>Taj Palace, New Delhi offers 403 air-conditioned accommodations with DVD players and minibars. Each accommodation is individually furnished and decorated. Beds feature premium bedding. 32-inch LED televisions come with premium satellite channels and pay movies. Bathrooms include shower/tub combinations, bathrobes, slippers, and designer toiletries.
                            This New Delhi hotel provides complimentary wired and wireless Internet access. Business-friendly amenities include desks, complimentary newspapers, and phones. Additionally, rooms include safes and complimentary bottled water. Hypo-allergenic bedding and irons/ironing boards can be requested. A nightly turndown service is provided and housekeeping is offered daily.</p>
                        <p>Guests can play rounds at the 9-hole golf course. An outdoor pool and a spa tub are on site. Other recreational amenities include a health club and a steam room.
                            The recreational activities listed below are available either on site or nearby; fees may apply.</p>
                        <h4 style={{ marginTop: '16px' }}>Awards and affiliations</h4>
                        <h5 style={{ marginBottom: '-6px' }}>Green / Sustainable Property</h5>
                        <p>This property participates in EarthCheck, a program that measures the property's impact on one or more of the following: environment, community, cultural-heritage, the local economy.</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div style={{ display: 'flex' }}>
                    <div className={styles.left}>
                        <h3>Cleaning and safety practices</h3>
                    </div>
                    <div className={styles.right}>
                        <h4>Enhanced cleanliness measures</h4>
                        <p>Disinfectant is used to clean the property</p>
                        <p>Property is disinfected with electrostatic spray</p>
                        <p>High-touch surfaces are cleaned and disinfected</p>
                        <p>Sheets and towels are washed at 60°C/140°F or hotter</p>
                        <p>Follows standard cleaning and disinfection practices of Tajness - A Commitment Restrengthened (Taj Hotels)</p>
                        <p>Follows industry cleaning and disinfection practices of Operational Recommendations for Hotels (FHRAI - India)</p>

                        <h4 style={{ marginTop: '31px' }}>Social distancing</h4>
                        <p>Contactless check-in and check-out</p>
                        <p>Cashless transactions are available for all charges at the property</p>
                        <p>Protective shields in place at main contact areas</p>
                        <p>Guest rooms kept vacant for 24 hours between stays</p>
                        <p>Social distancing measures in place</p>
                        <p>Contactless room service is available</p>

                        <h4 style={{ marginTop: '31px' }}>Safety measures</h4>
                        <p>Personal protective equipment worn by staff</p>
                        <p>Temperature checks given to staff</p>
                        <p>Temperature checks available for guests</p>
                        <p>Masks and gloves available</p>
                        <p>Masks are required at the property</p>
                        <p>Hand sanitizer provided</p>
                        <p>Enhanced food service safety measures are in place</p>
                        <p>Individually-wrapped food options available for breakfast, lunch, dinner, and through room service</p>
                        <p>Reservations are required for the use of certain onsite facilities</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutArea
