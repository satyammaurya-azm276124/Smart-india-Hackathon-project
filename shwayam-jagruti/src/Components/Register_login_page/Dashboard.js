import React from "react";
import "./Dashboard.css";
import { Route, Routes } from "react-router-dom";
import swal from "sweetalert";
import { logout } from "../utils";
import Sidebar from "./Sidebar";

import Footer from "./Footer";
import Aboutus from "./Aboutus";
import UserDetails from "./UserDetails"; 
import ChangePassword from "./ChangePassword";

class Dashboard extends React.Component {
  logout = e => {
    logout();
    swal("Successfully Logout");
  };
  render() {
    return (
      <div>

        <div className="container-fluid dashboardBackground">
          <div className="row">
            <div className="col-md-3 profileDashboard">
              <Sidebar />
            </div>
            <div className="col-md-9 quotes">
              <Aboutus />
              <Routes>
                <Route path="UserDetails" component={UserDetails} />
                <Route path="ChangePassword" component={ChangePassword} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Dashboard;
