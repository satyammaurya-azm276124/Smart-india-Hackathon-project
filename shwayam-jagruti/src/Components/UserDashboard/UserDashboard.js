import React from "react";
import "./User_dashboard.css";
import { Link } from 'react-router-dom';

const User_dashboard = () => {
    return(
        <>
        <div class="wrapper">
       
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Admin Panel</h3>
            </div>

            <ul class="list-unstyled components">
                <li>
                    <Link to="/">Add Admin</Link>
                    <Link to="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Check Approval</Link>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <Link to="/">Admin</Link>
                        </li>
                        <li>
                            <Link to="/">Department</Link>
                        </li>
                        <li>
                            <Link to="/">User</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/">Check Metric Data</Link>
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