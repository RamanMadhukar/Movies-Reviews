import React from 'react'
import Chart from '../Chart/Chart'
import WidgetLg from '../WidgetLg/WidgetLg'
import WidgetSm from '../WidgetSm/WidgetSm'
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo'
import './AdminHome.css';
import { userData } from '../../dummyData';

const AdminHome = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart uData={userData}
                 title="User Analytics"
                grid dataKey="Active User"
             />

             <div className="homeWidgets">
                 <WidgetSm />
                 <WidgetLg />
                
             </div>
            
        </div>
    )
}

export default AdminHome
