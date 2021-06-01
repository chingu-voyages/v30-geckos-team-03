import React from "react";
import Photos from "./Photos";

function Navbar(){
    return(
    <div>  
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#"><i class="fas fa-meteor"></i>Asteroids</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav nav-features">
                    <a id="nav-links" className="nav-item nav-link active test" href="#">About <span class="sr-only">(current)</span></a>
                    <a id="nav-links" className="nav-item nav-link" href="#photos">Photos</a>
                    <a id="nav-links" className="nav-item nav-link" href="#">Feature 2</a>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;