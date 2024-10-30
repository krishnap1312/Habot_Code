import React from "react";
import "./Navigation.css"


function Navigation() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo on the left */}
          <a className="navbar-brand ms-5" href="#home">
            <img className="logo" src=  { process.env.PUBLIC_URL +"/habot.jpg"} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Links on the right */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Find Suppliers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Find Service Tags</a>
                <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
              </li>
              
              <li className="nav-item">
                <button className="loginBtn">Login/Signup</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
