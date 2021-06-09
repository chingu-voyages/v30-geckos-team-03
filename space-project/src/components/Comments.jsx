import React, {useEffect, useState} from "react";

function Comments() {

    const [comments, setComments] = useState([{
        fullName:"",
        email: ""
    }])

    useEffect(() => {
        fetch("/Comments").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setComments(jsonRes));
    })

    return(
        <div>
            <h4>Comments</h4>
            {comments.map(comment =>
            <div>
                <p>{comment.fullName}</p>
                <p>{comment.email}</p>
            </div> 
            )}
        </div>
        
    );
}

export default Comments;