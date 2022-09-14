import React from 'react';
// import { Router, Route, Routes } from "react-router";
//import { createBrowserHistory } from "history";
import './App.css';
// import { createBrowserHistory } from "history"; 
import Navbar from './Components/Navbar/Navbar.js';
import Landing from './Components/Landing/Landing.js'
// import Signup from "./Components/Register_login_page/Signup";
// import Login from "./Components/Register_login_page/Login";
// import Dashboard from "./Components/Register_login_page/Dashboard";
// import ChangePassword from "./Components/Register_login_page/ChangePassword";
// import UserDetails from "./Components/Register_login_page/UserDetails";

function App() {

  return (
    <>
    <Navbar/>
    <Landing/>
     </>
  );
}

export default App;
