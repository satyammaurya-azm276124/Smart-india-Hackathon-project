import React from "react";
import "./Deapart_dashboard.css";
import { Link } from 'react-router-dom';

const User_dashboard = () => {
    return(
        <>
        <div class="wrapper">
       
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Department Panel</h3>
            </div>

            <ul class="list-unstyled components">
            <li>
                    <Link to="/">Add Schemes</Link>
                </li>
                <li>
                    <Link to="/">Edit details of live schemes</Link>
                </li>
                <li>
                    <Link to="/">Metric Data for future improvements of scheme</Link>
                </li>
                
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <Link to="/LoginDashboard">Logout</Link>
                </li>
            </ul>
        </nav>
        </div>
        
        

        <div className="container">
      <h1>Welcome to your Dashboard</h1>
    </div>
    

 </>
    );
};

export default User_dashboard;