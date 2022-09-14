import React from 'react'
import { Link } from 'react-router-dom';
import './Login2.css'
import admin from './admin.svg';
import user from './user.svg'
import department from './department.png'
import Navbar2 from '../Navbar/Navbar2';


const rafce = () => {
    return (
        <>
            <Navbar2 />
            <div className=" outerbox container">
                <div className="card-group">
                    <div className="card Dsh-card">
                        <div className="card-body Login-body">
                            <h5 className="card-title">Admin</h5>
                            <img src={admin} className="card-img-LoginDashboard" alt="..." />
                        </div>
                        <div className="card-login-btn">
                            <Link type="button" className="btn eligibility login-btn btn-link" to="/UserDashboard">Login</Link>

                        </div>
                    </div>
                    <div className="card dsh-card">
                        <div className="card-body Login-body">
                            <h5 className="card-title">User</h5>
                            <img src={user} className="card-img-LoginDashboard" alt="..." />
                        </div>
                        <div className="card-login-btn">
                        <Link type="button" className="btn eligibility login-btn btn-link" to="/Login">Login</Link>

                        </div>

                    </div>
                    <div className="card dsh-card">
                        <div className="card-body Login-body">
                            <h5 className="card-title">Department</h5>
                            <img src={department} className="card-img-LoginDashboard" alt="..." />
                        </div>
                        <div className="card-login-btn">
                        <Link type="button" className="btn eligibility login-btn btn-link" to="/DeapartDashboard">Login</Link>

                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default rafce