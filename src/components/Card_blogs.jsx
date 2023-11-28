import React from "react";
import { Link } from "react-router-dom";
const Card_blogs = ({ id, title, Description, image, views,allLikes,allComents, PostedOn }) => {

  const formattedDate = new Date(PostedOn).toISOString().split('T')[0];

  return (
    <>
      <div className="card_blog">
        <div>
          <img src={image} alt="" className="card_photo" />
        </div>

        <h4>{title}</h4>

        <div className="desc">
          <p>{Description.substring(0, 150)}</p>
        </div>

        <div className="dash_view">
          <button className="views_display">
            &nbsp;{views} Views
          </button>
          <button className="views_display">
            &nbsp;{allLikes} Likes
          </button>
          <button className="views_display">
            &nbsp;{allComents} Comments
          </button>
          <button className="date_display">Posted on: {formattedDate}</button>
        </div>

        <Link to={`/blogpost/${id}`}>
          <button className="readmore">Read More</button>
        </Link>
      </div>
    </>
  );
};

export default Card_blogs;
