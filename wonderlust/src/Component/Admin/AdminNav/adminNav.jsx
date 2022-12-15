import styles from './AdminNav.module.css'
import {BsChatTextFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const AdminNav = () =>{
    return <div className={styles.nav}>
        {/* <div><a href="">Admin</a></div> */}
        <div><Link to="">Dashboard</Link></div>
        <div><Link to="bookings">Bookings</Link></div>
        <div><Link to="hotels">Hotels</Link></div>
        <div><Link to="flights">Flights</Link></div>
        <div><Link to="users">Users</Link></div>
        {/* <div><Link ><BsChatTextFill/></Link></div> */}
    </div>
}

export const RqStar = () => <span className={styles.reqStar}>{'  *'}</span>