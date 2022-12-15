import style from './Dashboard.module.css';
import { DashBoardCard } from './DashboardCard.jsx/DashBoardCard';
export const Dashboard = () => {
    return <div className={style.dashboard}>
        <div className={style.main}>
            <DashBoardCard key='hotel' type='hotels' links={{reg:'admin/hotelsReg', view:"admin/hotels"}} />
            <DashBoardCard key='flights' type='flights' links={{reg:'admin/flightsReg', view:"admin/flights"}}/>
            <DashBoardCard key='booking' type='bookings' links={{view:"admin/flights"}}/>
            <DashBoardCard key='users' type='users' links={{view:"admin/flights"}}/>
        </div>
    </div>
}