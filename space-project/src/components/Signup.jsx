import React, {useState} from "react";
import axios from "axios";

function Signup() {

    const [input, setInput] = useState({
        fullName:"",
        email:""
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
            email: input.email
        }

        axios.post("http://localhost:3001/Signup", newEmail)
    };

    return(
        <div>
            <div className="row container-fluid">
                <div className="col-md-8 signup-content">
                    <h1>Sign Up</h1>
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

                        <p className="terms">By clicking submit, you agree to the terms of service and our privacy policy. </p>

                        <button onClick={handleClick} type="submit" className="btn btn-light">Submit</button>
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