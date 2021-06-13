import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";

function Comments() {

    const [comments, setComments] = useState([{
        fullName:"",
        email: "",
        comment: ""
    }]) 

    useEffect(() => {
        fetch("/Comments").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setComments(jsonRes));
    },[setComments]);

    return(
        <div>
            <Navbar 
                    brandhref="/Comments"
                    brandName="Comments"
                    firstLink="/"
                    firstLinkName="Home"
                    secondLink="/Signup"
                    secondLinkName="Sign Up"
                    thirdLink="/DailyImage"
                    thirdLinkName="Daily Image"
                  
                    />
            {comments.map(comment =>
            <div>
                <p>{comment.comment}</p>
            </div> 
            )}
        </div>
        
    );
}

export default Comments;