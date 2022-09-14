import React from "react";
import "./Signup.css";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";
import Navbar2 from '../Navbar/Navbar2';
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      password: "",
      mobileNo: ""
    };
  }
  // For Input filed
  InputChangeHandler = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  // For From Submission
  FormSubmitted = e => {
    e.preventDefault();
    const { fname, email, password, mobileNo } = this.state;
    // Creating  localStorage for users
    let users = localStorage.getItem("users");
    if (!users) users = [];
    else users = JSON.parse(users);
    const data = {
      fname,
      email,
      password,
      mobileNo
    };
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    swal(" Detail Submitted Successfully");
    this.setState({ fname: "", email: "", password: "", mobileNo: "" });
    this.props.history.push("/");
  };
  render() {
    return (
    <>
      <Navbar2/>
      <div className=" container-fluid signup">
        <form className="formSignup" onSubmit={this.FormSubmitted.bind(this)}>
          <h1>SignUp</h1>
          <label className="label">Full Name</label>
          <input
            type="text"
            name="fname"
            placeholder="Full name..."
            onChange={this.InputChangeHandler}
            value={this.state.fname}
            required
          ></input>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={this.InputChangeHandler}
            value={this.state.email}
            required
          ></input>
          <label className="label"> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            onChange={this.InputChangeHandler}
            value={this.state.password}
            minLength="4"
            maxLength="10"
            required
          ></input>
          <label className="label">Mobile No</label>
          <input
            type="tel"
            name="mobileNo"
            placeholder="Mobile no..."
            maxLength="10"
            onChange={this.InputChangeHandler}
            value={this.state.mobileNo}
            required
          ></input>
          <button className="submit-btn" type="submit">
            Sign up
          </button>
          <p>
            <span>Already have an account ? </span>&nbsp;&nbsp;&nbsp;
            <NavLink to="/Login" exact={true} activeClassName="is-active">
              <strong className="strong">LogIn</strong>
            </NavLink>
          </p>
        </form>
      </div>
      </>
    );
  }
}
export default Signup;
