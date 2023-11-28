import React from "react";

const Comment = ({ profile, username, comment_desc, date }) => {
  return (
    <>
      <section id="comments">
        <img src={profile} className="profile_img" />
        <b>
          <span className="username">{username}</span>
        </b>
        <p>{comment_desc}</p>
        <span>{date}</span>
      </section>
    </>
  );
};

export default Comment;
