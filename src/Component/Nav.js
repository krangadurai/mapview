import {React,useEffect} from "react";
import { BrowserRouter as Router, Switch, Route,Redirect,useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";



import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Dashboard from "./Dashboard";
import Logout from "./page/Logout";

import { Outlet, Link } from "react-router-dom";
const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const LoginCheck = useSelector((state) => state.app.LoginDetails.login);

  const User = useSelector((state) => state.app.LoginUser)
  useEffect(() => {
    console.log(User);
    console.log(LoginCheck)
    if(!LoginCheck){
      
    }
  }, [LoginCheck, User]);

  
   
  return (
    <Router>
      <nav
        className="navbar navbar-expand-lg navbar-landing fixed-top"
        id="navbar"
      >
        <div className="container">
          <button className="navbar-brand hide" href="index.html">
            <img
              src="assets/images/logo-dark.png"
              className="card-logo card-logo-dark"
              alt="logo dark"
              height="17"
            />
            <img
              src="assets/images/logo-light.png"
              className="card-logo card-logo-light"
              alt="logo light"
              height="17"
            />
          </button>
          <button
            className="navbar-toggler py-0 fs-20 text-body"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0" id="navbar-example">
              <li className="nav-item">
                <Link className="nav-link active" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Our Produccts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Contact Us
                </a>
              </li>
            </ul>
            {LoginCheck ? (
              <div className="dropdown ms-sm-3 header-item topbar-user">
                <button
                  type="button"
                  className="btn"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="d-flex align-items-center">
                    <img
                      className="rounded-circle header-profile-user"
                      src={User.picture}
                      alt="Header Avatar"
                    />
                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                        {User.name}
                      </span>
                      {/* <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span> */}
                    </span>
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <h6 className="dropdown-header">{User.name}</h6>
                  <Link className="dropdown-item" to="/Dashboard">
                    <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>{" "}
                    <span className="align-middle">Dashboard</span>
                  </Link>
                  <Logout />
                </div>
              </div>
            ) : (
              <div className="">
                <button className="btn btn-link fw-medium text-decoration-none text-dark">
                  <Link to="/Signup">Sign Up</Link>
                </button>
                <button className="btn btn-primary">
                  <Link to="/Login">Login</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Nav;
