import React from "react";
import "./ChangePassword.css";
import swal from "sweetalert";
import { Navigate,NavLink } from "react-router-dom";
import Navbar2 from '../Navbar/Navbar2';
class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      items: [],
      changeIt: false
    };
  }
  passwordChangeHandler = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  ChangePasswordFormSubmitted = e => {
    e.preventDefault();
    swal("Password Changed  Successfully ");
    const { oldPassword, newPassword } = this.state;
    let items = JSON.parse(localStorage.getItem("users"));
    const index = items.findIndex(list => oldPassword === list.password);
    if (index > -1) {
      items[index].password = newPassword;
      localStorage.setItem("users", JSON.stringify(items));
      this.setState({ changeIt: true });
    } else {
      swal("Please Fill Correct Password");

    }
    this.setState({oldPassword:'',newPassword:''})
  };
  render() {
    if (this.state.changeIt) {
      return <Navigate to="/" />;
    }
 
    return (
      <div>
         <Navbar2/>
        <div className="container-fluid change change1">
          <div className="row">
            <div className="col-md-12 changepassword">
              <form onSubmit={this.ChangePasswordFormSubmitted}>
                <h2>Change Password</h2>
                <input
                  type="password"
                  placeholder="Enter Your Old Password"
                  name="oldPassword"
                  onChange={this.passwordChangeHandler}
                  required
                ></input>
                <br />
                <input
                  type="password"
                  placeholder="Enter Your New Password"
                  name="newPassword"
                  onChange={this.passwordChangeHandler}
                  required
                ></input>
                <br />
                <button type="submit" className="btn btn-success">
                  Change It
                </button>
                <p>
                  <span>Don't want to change ? </span>&nbsp;&nbsp;&nbsp;
                  <NavLink
                    to="/Dashboard"
                    exact={true}
                    activeClassName="is-active"
                  >
                    <strong ><center>Back To Dashboard</center></strong>
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ChangePassword;
