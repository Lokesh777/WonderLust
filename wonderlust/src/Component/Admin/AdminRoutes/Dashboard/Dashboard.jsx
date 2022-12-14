import style from './Dashboard.module.css';
import { DashBoardCard } from './DashboardCard.jsx/DashBoardCard';
export const Dashboard = () => {
    return <div className={style.dashboard}>
        <div className={style.main}>
            <DashBoardCard key='hotel' type='hotels'/>
            <DashBoardCard key='flights' type='flights'/>
            <DashBoardCard key='booking' type='bookings'/>
            <DashBoardCard key='users' type='users'/>
        </div>
    </div>
}