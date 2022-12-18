import styles from "./footer.module.css";
import React from 'react';
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <div className={styles.container}>
            <hr className={styles.footerHr} />
            <div className={styles.footer}>
                <div className={styles.flex}>
                    <div >
                        <img className={styles.logoGif} src="travel.gif" alt="Logo" />
                    </div>
                    
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Company</h3>
                            <li><Link to="#"> About</Link></li>
                            <li><Link to="#"> Jobs</Link></li>
                            <li><Link to="#"> List your property</Link></li>
                            <li><Link to="#"> Partnerships</Link></li>
                            <li><Link to="#"> Newsroom</Link></li>
                            <li><Link to="#"> Investor Relations</Link></li>
                            <li><Link to="#"> Roaming Gnome Store</Link></li>
                            <li><Link to="#"> Advertising</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Explore</h3>
                            <li><Link to="#">Hotels in United States</Link></li>
                            <li><Link to="#">Vacation Rentals in United States</Link></li>
                            <li><Link to="#">Vacation Packages in United States</Link></li>
                            <li><Link to="#">Domestic Flights</Link></li>
                            <li><Link to="#">Car Rentals in United States</Link></li>
                            <li><Link to="#">Travelocity Reviews</Link></li>
                            <li><Link to="#">Travelocity Coupons</Link></li>
                            <li><Link to="#">Unique Places to Stay</Link></li>
                            <li><Link to="#">Travel Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Policies</h3>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms of Use</Link></li>
                            <li><Link to="#">Accessibility</Link></li>
                            <li><Link to="#">Do not sell my personal information</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Help</h3>
                            <li><Link to="#">Support</Link></li>
                            <li><Link to="#">Cancel your hotel or vacation rental booking</Link></li>
                            <li><Link to="#">Cancel your flight</Link></li>
                            <li><Link to="#">Refund timelines, policies & processes</Link></li>
                            <li><Link to="#">Use a Travelocity coupon</Link></li>
                            <li><Link to="#">Coronavirus Disease (COVID-19)</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className={styles.footerHr} />
                <div className={styles.license}>
                    <p>© 2021 Travelscape LLC, an Expedia Group Company. All rights reserved.</p>
                    <p>Travelocity, the Stars Design, and The Roaming Gnome Design are trademarks or registered trademarks of Travelscape LLC. CST# 2056372-50.</p>
                </div>
            </div>
        </div>
    );
}













