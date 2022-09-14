import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginDashboard from './Components/main_login_page/LoginDashboard';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import Signup from "./Components/Register_login_page/Signup";
import Login from "./Components/Register_login_page/Login";
import Dashboard from "./Components/Register_login_page/Dashboard";
// import PrivateRoute from "./Components/Register_login_page/PrivateRoute";
// import PublicRoute from "./Components/Register_login_page/PublicRoute";
import ChangePassword from "./Components/Register_login_page/ChangePassword";
import UserDetails from "./Components/Register_login_page/UserDetails";
import DeapartDashboard from './Components/DepartmentDashboard/DeapartDashboard';
// import { Navigate } from "react-router-dom";
ReactDOM.render(

  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/LoginDashboard" element={<LoginDashboard/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Dashboard/UserDetails" element={<UserDetails/>} />
     <Route path="/Dashboard" element={<Dashboard/>}/>
     <Route path="/Dashboard/ChangePassword" element={<ChangePassword/>} />
     <Route path="/UserDashboard" element={<UserDashboard/>} />
    
     <Route path="/DeapartDashboard" element={<DeapartDashboard/>} /> 
    </Routes>
  </Router>,

  document.getElementById("root")
);



