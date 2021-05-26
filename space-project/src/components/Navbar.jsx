import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">
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
              href="#"
            >
              About <span className="sr-only">(current)</span>
            </a>
            <a id="nav-links" className="nav-item nav-link" href="#">
              Feature 1
            </a>
            <a id="nav-links" className="nav-item nav-link" href="#">
              Feature 2
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
