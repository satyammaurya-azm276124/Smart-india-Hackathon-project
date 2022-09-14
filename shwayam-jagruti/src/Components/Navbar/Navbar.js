import React from 'react'
import './Navbar.css';
  import {BsMask} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid"> 
          <Link className="navbar-brand-logo" to="/"><img src="img/satyamev.png" alt="" /></Link>
          <Link className="navbar-brand" to="/">SWAYAM JAGRUTI</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={() => window.location.replace("/#categories")}>
                <Link className="nav-link active" aria-current="page" to="">Schemes</Link>
              </li>
              <li className="nav-item" onClick={() => window.location.replace("/#howtouse")}>
                <Link className="nav-link active" aria-current="page" to="">How To Use</Link>
                
              </li>
              <li className="nav-item" onClick={() => window.location.replace("/#about")}>
                <Link className="nav-link active" aria-current="page" to="">About</Link>
              </li>
              <li className="nav-item" onClick={() => window.location.replace("/#accordionExample")}>
                <Link className="nav-link active" aria-current="page" to="">FAQ</Link>
              </li>
            <button className='darkmode '><BsMask/></button>
              <li className="nav-item dropdown">
                <Link className="nav-link language dropdown-toggle" id="google_translate_element" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  English
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Hindi</Link></li>
                  <li><Link className="dropdown-item" to="/">Punjabi</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
                     
              <li>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-outline-none">A-</button>
                  <button type="button" class="btn btn-outline-none">A</button>
                  <button type="button" class="btn btn-outline-none">A+</button>
                </div>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/LoginDashboard">Login</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navbar