import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/"><i className="fas fa-meteor"></i>Asteroids</a>
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
            <h5 className="nav-item nav-link active test"><Link className="links" to="/Signup">Sign Up</Link></h5>
            <h5 className="nav-item nav-link"><Link className="links" to="/Comments">Comments</Link></h5>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
