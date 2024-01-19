import React, { useState } from 'react';
import OnlineOfflineBtn from '../Components/OnlineOfflineBtn';
import SurplusFoodCard from '../Components/SurplusFoodCard';
import foodData from '../Data/SurplusFoodData'
import OrderTable from '../Components/OrderTable';
import orderTableData from '../Data/OrderTableData';
import '../Style/restaurantDashboard.css'


const RestaurantDashboard = () => {
    const [onlineStatus, setOnlineStatus] = useState(false);

    const handleStatusChange = (newStatus) => {
        setOnlineStatus(newStatus);
    };
    return (
        <>
            <div className='restaurantDashboardContainer'>
                <OnlineOfflineBtn onStatusChange={handleStatusChange} />
                <div className='restaurantDashboardSubContainer'>
                    {!onlineStatus ? <p className='offlineTxt'>You are currently Offline </p> :
                        <div>
                            <h3 className='surplusFoodHader'> SURPLUS FOOD</h3>
                            <div className='SurplusFoodCardContainer'>

                                <SurplusFoodCard foodDataArray={foodData} />
                            </div>
                            <h3 className='surplusFoodHader'> ORDER DETAILS</h3>
                            <OrderTable data = {orderTableData}/>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default RestaurantDashboard;
