import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([
    {
      fullName: "",
      email: "",
      comment: "",
    },
  ]);

  useEffect(() => {
    fetch("/Comments")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setComments(jsonRes));
  }, []);

  return (
    <>
      <div>
        {comments.map((comment) => (
          <div>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
