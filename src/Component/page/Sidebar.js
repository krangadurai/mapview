import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Sidebar = () => {
  return (
    <div className="app-menu navbar-menu">
      <div className="navbar-brand-box">
        <a href="index.html" className="logo logo-dark">
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span className="logo-lg">
            <img src="assets/images/logo-dark.png" alt="" height="17" />
          </span>
        </a>

        <a href="index.html" className="logo logo-light">
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span className="logo-lg">
            <img src="assets/images/logo-light.png" alt="" height="17" />
          </span>
        </a>
        <button
          type="button"
          className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
          id="vertical-hover"
        >
          <i className="ri-record-circle-line"></i>
        </button>
      </div>
      <div id="scrollbar">
        <div className="container-fluid">
          <div id="two-column-menu"></div>
          <ul className="navbar-nav" id="navbar-nav">
            <li className="menu-title">
              <span data-key="t-menu">menu</span>
            </li>
            <li class="nav-item">
                <Link  className="nav-link"to="/ListView">List View</Link>
            </li>
            <li class="nav-item">
                <Link  className="nav-link"to="/Mapview">Map View</Link>
            </li>
          </ul>
        </div>
      </div>
      
    </div>

  );
};
export default Sidebar;