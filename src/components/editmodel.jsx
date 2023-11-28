import React, { useState, useEffect } from "react";
import axios from "axios";

export const Editmodel = ({ closeEditModel, blogId }) => {
  const [postTitle, setTitle] = useState("");
  const [postContent, setDescription] = useState("");
  const [postImage, setImageFile] = useState(null);
  const [editedBlog, setEditedBlog] = useState(null);

  const token = localStorage.getItem("token");

  if (!token) {
    alert("You need to log in first");
    return;
  }

  useEffect(() => {
    axios
      .get(
        `https://sandrahermajesty.onrender.com/PostgreSQL/API/posts/single/post/${blogId}`
      )
      .then((response) => {
        const blogData = response.data.data;
        console.log("Fetched Blog Data:", blogData);
        setEditedBlog(blogData); // Store the existing blog data
        setTitle(blogData.postTitle);
        setDescription(blogData.postContent);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [blogId]);

  const handleSaveClick = (e) => {
    e.preventDefault();
  
    const updData = new FormData();
    updData.append("postTitle", postTitle);
    updData.append("postContent", postContent);
    if (postImage) {
      updData.append("postImage", postImage);
    }
    axios
      .put(
        `https://sandrahermajesty.onrender.com/PostgreSQL/API/posts/update/${blogId}`,
        updData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle successful update
        alert(response.data.message);
        console.log(response.data.message);
        closeEditModel();
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating blog: ", error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div className="edit_blog_background">
      <div className="edit_blog_content">
        <button className="cancel" onClick={() => closeEditModel(false)}>
          X
        </button>
        <h2>
        Sandra<span class="logo">-Her</span> Majesty
        </h2>
        <div className="content">
          <form className="form-edit-model">
            <input
              type="text"
              className="model-edit-text"
              placeholder="Title"
              value={postTitle}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="model-edit-area"
              value={postContent}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <input
              type="file"
              className=""
              accept="image/*"
              onChange={handleImageChange}
            />

            <button
              className="model-update"
              onClick={(e) => handleSaveClick(e)}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
