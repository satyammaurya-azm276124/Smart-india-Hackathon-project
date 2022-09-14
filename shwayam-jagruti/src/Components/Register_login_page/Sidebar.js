import React from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { logout } from "../utils";

class Sidebar extends React.Component {
  logout = e => {
    logout();
    swal("Successfully Logout");
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 imageContainer">
            <img
              className="profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63h_yORZPB_ZNWqMIm5u-1CS9BYQ6FxSHqSrGTCa0jASRtAgRtQ&s"
              alt="Profile"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 imageContainer1">
            <h5 className="name"> Abhishek</h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 imageContainer1">
            <NavLink to="/Dashboard" exact={true} activeClassName="is-active">
              <button className=" btn btn-info commonButton">Dashboard
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 imageContainer1">
            <NavLink
              to="/Dashboard/UserDetails" //user deatils link
              exact={true}
              activeClassName="is-active"
            >
              <button className=" btn btn-info commonButton">
              Update User Details &nbsp;
              
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 imageContainer1 ">
            <NavLink
              to="/Dashboard/#" //linkApplly to schemes
              exact={true}
              activeClassName="is-active "
            >
              <button className=" btn btn-info commonButton">
                Apply to a scheme &nbsp;
                <img  className="changePasswordImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXyz3bElHP2woiHC93YA9UzMPn9THy5QILRA&usqp=CAU" alt="chnagepassword"></img>
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 imageContainer1 ">
            <NavLink
              to="/Dashboard/#" //link Applied schemes they applied for
              exact={true}
              activeClassName="is-active "
            >
              <button className=" btn btn-info commonButton">
                Applied in &nbsp;
                <img  className="changePasswordImage" src="https://image.shutterstock.com/image-vector/apply-form-vector-icon-style-260nw-339215231.jpg" alt="Applied in"></img>
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 imageContainer1 ">
            <NavLink
              to="/Dashboard/#" //link track page
              exact={true}
              activeClassName="is-active "
            >
              <button className=" btn btn-info commonButton">
                Track Stutus &nbsp;
                <img  className="changePasswordImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKMOeLK7RQsSsG5mcg_tkwC2DeDrfITbq-P05bPswZCRaf5mnoNNTGMrzG6OQrreHlUo&usqp=CAU" alt="Track Stutus"></img>
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 imageContainer1 ">
            <NavLink
              to="/Dashboard/ChangePassword"
              exact={true}
              activeClassName="is-active "
            >
              <button className=" btn btn-info commonButton">
                Change Password &nbsp;
                <img  className="changePasswordImage" src="http://cdn.onlinewebfonts.com/svg/img_395559.png" alt="chnagepassword"></img>
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 imageContainer1 ">
            <NavLink to="/" exact={true} activeClassName="is-active">
              <button
                className="btn btn-danger commonButton"
                onClick={this.logout}
              >
                Logout User&nbsp;
                <img
                  className="accountImage"
                  src="https://st.depositphotos.com/1637332/2711/v/950/depositphotos_27115761-stock-illustration-bouton-internet-connexion-icon-red.jpg"
                  alt="logout"
                ></img>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
