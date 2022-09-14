import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {



  
 


  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" scheme col-sm-5">
            <h1 className="heading">Are you confuse ? </h1>

            <h1 className="heading">which Government </h1>

            <h1 className="heading"> Scheme is </h1>
            <h1 className="heading">benificial for you.</h1>
            <br />
            <br />
            <button
              type="button"
              className="btn eligibility btn-outline-primary"
            >
              Check Eligibility
            </button>
          </div>
          <div className=" img-section col-sm-6">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="true"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="img/img1.svg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="img/img2.svg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="img/img3.svg" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon  carousel-button"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next dark"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon carousel-button"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="scheme-box">
          <div className="scheme-box-heading">
            <h1>Scheme Suggestion Box</h1>
          </div>
          <div className=" scheme-box-row row">
            <div className="col-sm selection-box">
              <div className="row">
                <div className="dropdown row scheme-selection-item">
                  <button
                    className="Scheme-state btn btn-light dropdown-toggle "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Enter State
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link class="dropdown-item" to="/">
                        Andhra Pradesh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Arunachal Pradesh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Assam
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Bihar
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Chhattisgarh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Goa
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Gujarat
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Haryana
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Himachal Pradesh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Jharkhand
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Karnataka
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Kerala
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Madhya Pradesh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Maharashtra
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Manipur
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Meghalaya
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Mizoram
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Nagaland
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Odisha
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Punjab
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Rajasthan
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Sikkim
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Tamil Nadu
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Telangana
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Tripura
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Uttarakhand
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Uttar Pradesh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        West Bengal
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="row scheme-selection-item-2">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Gender"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="row scheme-selection-item-3">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Occuption"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className=" scheme-box-submit">
                  <button
                    type="button"
                    className="btn eligibility btn-outline-primary"
                    
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="scheme-box-img col-sm">
              <img src="img/notepad2.svg" alt="" />
            </div>
          </div>
        </div>

        {/*Categories Section*/}

        <div className="top-scheme" id="categories">
          <div className="top-scheme-heading">
            <h1>Categories</h1>
            <h4>Schemes divided into Different Categories</h4>
          </div>
          <div className=" top-scheme-row row">
            <div class="card top-scheme-cards col-3">
              <img
                src="img/Scheme-1.png"
                class="card-img-top ts-img"
                alt="scheme-1"
              />
              <div class="card-body ts-body">
                <Link to="">
                  <h6>Education & Learning</h6>
                </Link>
              </div>
            </div>
            <div class="card top-scheme-cards col-3">
              <img
                src="img/Scheme-2.png"
                class="card-img-top ts-img"
                alt="..."
              />
              <div class="card-body ts-body">
                <Link to="">
                  <h6>Agriculture & Rural</h6>
                </Link>
              </div>
            </div>
            <div class="card top-scheme-cards col-3">
              <img
                src="img/Scheme-3.png"
                class="card-img-top ts-img"
                alt="..."
              />
              <div class="card-body ts-body">
                <Link to="">
                  <h6>Housing & Shelter</h6>
                </Link>
              </div>
            </div>
            <div class="card top-scheme-cards col-3">
              <img
                src="img/Scheme-4.png"
                class="card-img-top ts-img"
                alt="..."
              />
              <div class="card-body ts-body">
                <Link to="">
                  <h6>Health & Wellness</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="how-to-use" id="howtouse">
          <h3>How to use </h3>
          <h6 classname="how-to-use-heading">
            Easy steps to apply Governments scheme
          </h6>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card how-to-use-card">
                <div class="card-body how-to-use-card-body">
                  <h5 class="card-title">Enter Details</h5>
                  <img src="img/details.svg" class="card-img-top" alt="..." />
                  <p class="card-text">Start by entering basic details</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card how-to-use-card">
                <div class="card-body how-to-use-card-body">
                  <h5 class="card-title">Search</h5>
                  <img src="img/search.svg" class="card-img-top" alt="..." />
                  <p class="card-text"> Find the relevant schemes!</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card how-to-use-card">
                <div class="card-body how-to-use-card-body">
                  <h5 class="card-title">Select & Apply</h5>
                  <img src="img/apply.svg" class="card-img-top" alt="..." />
                  <p class="card-text">Choose & apply for the scheme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about" id="about">
          <span className="about-heading">About</span>
          <div className="row about-area">

            <div className="col md-7 about-para">
              <p className="para-text"> Shwayam-jagruti is a National Platform that aims to offer one-stop search and discovery of the Government schemes.
                It provides an innovative, technology-based solution to discover scheme information based upon the eligibility of the citizen.
                In which you have to enter the basic details.
                The platform helps the citizen to find the right Government schemes for them. It also guides on how to apply for different Government schemes. Thus no need to visit multiple Government websites.</p>

              <div className="aboutbtn">
                <button type="button" class="btn btn-outline-primary aboutButton">Learn More</button>
              </div>
            </div>
            <div className="col md-5 about-img">
              <img className="aboutImage" src="img/aboutusimg.svg" alt="" />

            </div>

          </div>
        </div>

        {/*FAQ Section*/}

        <div class="accordion faq-section" id="accordionExample">
          <h1>Frequently Asked Questions [FAQ]</h1>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is Shwayam-jagruti?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Shwayam-jagruti is a National Platform that aims to offer one-stop search and discovery of the Government schemes.
                It provides an innovative, technology-based solution to discover scheme information based upon the eligibility of the citizen.
                In which you have to enter the basic details. The platform helps the citizen to find the right Government schemes for them.
                It also guides on how to apply for different Government schemes. Thus no need to visit multiple Government websites.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How to use it properly?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                The procedure is simple. You have to enter the basic details.
                The platform helps the citizen to find the right Government schemes for them.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What basic details are required?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                We need only the basic details like your name, age, income and where you live.
              </div>
            </div>
          </div>
        </div>

        <div className="Footer-pre">
          <span></span>
        </div>
        <div className="Footer-Section">
          <div className="Footer-item container text-center text-md-left">
            <div className="row">
              <div className="footer-link col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <Link to="/">
                    <b>Contact Us</b>
                  </Link>
                </p>
                <p>
                  <Link to="/">
                    <b>About Us</b>
                  </Link>
                </p>
                <p>
                  <Link to="/">
                    <b>Help</b>
                  </Link>
                </p>
              </div>

              <div className="footer-link col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <Link to="/">
                    <b>Center Schemes</b>
                  </Link>
                </p>
                <p>
                  <Link to="/">
                    <b>State Schemes</b>
                  </Link>
                </p>
                <p>
                  <Link to="/">
                    <b>Feedback</b>
                  </Link>
                </p>
              </div>

              <div className="footer-link col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <Link to="/">
                    <b>Sitemap</b>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <hr className="hr-line-footer"></hr>
          <div className="footer-link footer-copyright text-center py-3">
            <Link to="/">
              <b>© 2022 Copyright : Shwayam-Jagruti</b>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
