import style from './Dashboard.module.css';
import { DashBoardCard } from './DashboardCard.jsx/DashBoardCard';
export const Dashboard = () => {
    return <div className={style.dashboard}>
        <div className={style.main}>
            <DashBoardCard key='hotel' type='hotels' links={{reg:'hotelsReg', view:"hotels"}} />
            <DashBoardCard key='flights' type='flights' links={{reg:'flightsReg', view:"flights"}}/>
            <DashBoardCard key='booking' type='bookings' links={{view:"flights"}}/>
            <DashBoardCard key='users' type='users' links={{view:"flights"}}/>
        </div>
    </div>
}