import React, {useState} from "react";

function Signup() {

    const [values, setValues] = useState({
        name:"",
        email:""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    };

    return(
        <div>
            <div className="row container-border">
                <div className="col-md-8 signup-content">
                    <h1>Sign Up</h1>
                    <p className="signup-p">Do you want asteroids to head straight for your inbox?</p> 
                    <p className="signup-p">Sign up below for our monthly newsletter!</p>
                    <form>
                        <div className="name-email">
                            <label>Name</label>
                            <input type="text" name="name" value={values.name} onChange={handleChange} className="form-control signup-input"></input>
                        </div>
                        <div className="name-email">
                            <label>Email</label>
                            <input type="email" name="email" value={values.email} onChange={handleChange} className="form-control signup-input"></input>
                        </div>
                        <p className="terms">By clicking submit, you agree to the terms of service and our privacy policy. </p>
                        <button className="btn btn-light" onClick={handleSubmit}>Submit</button>
                    </form>
                    
                </div>
                <div className="col-md-4 signup-content">
                    <h1>{!submitted ? <h1></h1> : <h1>Thank you, {values.name}!</h1>}</h1>
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