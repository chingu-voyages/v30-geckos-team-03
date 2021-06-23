import React from "react";
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href={props.brandhref}><i className="fas fa-meteor hvr-buzz"></i>{props.brandName}</a>
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
            <h5 className="nav-item nav-link active test"><Link className="links" to={props.firstLink}>{props.firstLinkName}</Link></h5>
            <h5 className="nav-item nav-link"><Link className="links" to={props.secondLink}>{props.secondLinkName}</Link></h5>
            <h5 className="nav-item nav-link"><Link className="links" to={props.thirdLink}>{props.thirdLinkName}</Link></h5>
            <h5 className="nav-item nav-link"><Link className="links" to={props.fourthLink}>{props.fourthLinkName}</Link></h5>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
