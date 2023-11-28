import React from "react";
import { Link } from "react-router-dom";

const CoverImage = ({ id, image, title }) => {
  return (
    <div class="cover_image">
      <Link to={`/blogpost/${id}`}>
        <img src={image} alt="" className="imagecover" />
      </Link>

      <h5 >{title}</h5>
    </div>
  );
};

export default CoverImage;
