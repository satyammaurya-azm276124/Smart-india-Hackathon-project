import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import { login } from "../utils";
import Navbar2 from '../Navbar/Navbar2';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      items: [],
      isLoggedIn: false
    };
  }

  componentDidMount(){
    if(localStorage.getItem("users") === null)
      this.props.history.push('/Signup')
  }

  inputChangehandler = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  FormSubmitted = e => {
    e.preventDefault();
    const { email, password } = this.state;
    let items = JSON.parse(localStorage.getItem("users"));
    // Using JSON Server and Fetching API
    // fetch("http://localhost:3000/user")
    //   .then(res => res.json())
    //   .then(json => {
    //     items = json;
    //     this.setState({
    //       items
    //     });

    //   });
     //  Checking   the correct details
    let index=items.findIndex((list)=> email ===list.email && password=== list.password);
     console.log(index);
      if(index>-1){
          
        login();
        swal("Successfully LoggedIn");
        this.setState({
          isLoggedIn:true
        });
      }

      else{
        swal("Please Fill Correct Details");
      }
    this.setState({
      email: "",
      password: ""
    });
  };
   
  render() {
    if (this.state.isLoggedIn) {
      return <Navigate to="/Dashboard" />;
    }
    return (
    <div>
       <Navbar2/>
        <div className=" container-fluid login">
          <form onSubmit={this.FormSubmitted}>
            <h1>Log in</h1>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email..."
              onChange={this.inputChangehandler}
              required
            ></input>
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password..."
              onChange={this.inputChangehandler}
              required
            ></input>
            <button className="submit-btn1">Login</button>
            <p>
              <span>Don't have an account ? </span>&nbsp;&nbsp;&nbsp;
              <NavLink to="/Signup" exact={true} activeClassName="is-active">
                <strong className="strong">SignUp</strong>
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
