import React, {useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Navbar from "./Navbar";

function Signup() {

    const [input, setInput] = useState({
        fullName:"",
        email:"",
        comment: ""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value 
            }  
        })
    };

    function handleClick(event) {
        event.preventDefault();
        setSubmitted(true);

        const newEmail = {
            fullName: input.fullName, 
            email: input.email,
            comment: input.comment
        }

        axios.post("https://astro-deck.herokuapp.com/Signup", newEmail)
    };

    return(
        <div>
            <div className="row">
                <div className="col-md-8 signup-content">
                    <Navbar 
                    brandhref="/Signup"
                    brandName="Signup"
                    firstLink="/"
                    firstLinkName="Home"
                    secondLink="/Comments"
                    secondLinkName="Comments"
                    thirdLink="/DailyImage"
                    thirdLinkName="Daily Image"
                    />

                    <p className="signup-p">Do you want asteroids to head straight for your inbox?</p> 
                    <p className="signup-p">Sign up below for our monthly newsletter!</p>

                    <form>
                        <div className="name-email">
                            <label>Name</label>
                            <input type="text" name="fullName" value={input.fullName} onChange={handleChange} className="form-control signup-input" required></input>
                        </div>
                        <div className="name-email">
                            <label>Email</label>
                            <input type="email" name="email" value={input.email} onChange={handleChange} className="form-control signup-input" required></input>
                        </div>
                        <div className="name-email">
                            <label>Leave a comment (optional)</label>
                            <input type="text" name="comment" value={input.comment} onChange={handleChange} className="form-control signup-input"></input>
                        </div>

                        <p className="terms">By clicking submit, you agree to the terms of service and our privacy policy. </p>

                        <button onClick={handleClick} type="submit" className="btn btn-light signup-btn">Submit</button>
                        <a><Link className="links" to="/"><i id="back-btn" class="fas fa-arrow-circle-left"></i></Link></a>


                    </form>
                    
                </div>
                <div className="col-md-4 signup-content">
                    <h1>{!submitted ? <h1></h1> : <h1>Thank you, {input.fullName}!</h1>}</h1>
                    <div className="icon hvr-buzz"><i class="fas fa-meteor"></i></div>
                    <div>
                        {!submitted ? <p></p> : <p>You've successfully signed up for our asteroid newsletter.</p>}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Signup;