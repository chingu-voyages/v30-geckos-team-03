import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
          <i className="fas fa-meteor"></i>Asteroids
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav nav-features">
            <a
              id="nav-links"
              className="nav-item nav-link active test"
              href="/Signup"
            >
              Sign Up <span className="sr-only">(current)</span>
            </a>
            {/* <Link to="/Signup">Sign up</Link> */}

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
