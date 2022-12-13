import style from './DashBoardCard.module.css';

export const DashBoardCard = (props) => {
    const {type} = props;


    return <div className={style.cateCard}>

        <h2 className={style.cateHead}>{type}</h2>


        <div className={style.infoGrid}>

            <div className={style.infoTag}>
                <h3>Count: </h3>
                <p>75</p>
            </div>

            <div className={style.infoTag}>
                <h3>Cities: </h3>
                <p>75</p>
            </div>

            <div className={style.infoTag}>
                <h3>Bookings: </h3>
                <p>75</p>
            </div>

            <div className={style.infoTag}>
                <h3>Misc: </h3>
                <p>000</p>
            </div>


        </div>

        <div className={style.buttonBox}>
            {type=='users' || type==='bookings'?"":<button>Register New</button>}
            <button>Manage Data</button>
        </div>

    </div>
}