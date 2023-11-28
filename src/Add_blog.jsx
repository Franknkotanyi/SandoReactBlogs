import React, { useRef, useState } from "react";
import Admin_navbar from "./components/Admin_navbar";
import Footer from "./components/footer";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Add_blog = ({ closeblog }) => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [postContent, setpostContent] = useState("");

  const [postTitle, setpostTitle] = useState("");
  const [postImage, setpostImage] = useState("");

  const token = localStorage.getItem("token");
  console.log("Token =", token);

  const configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleblog = async (e) => {
    e.preventDefault();

    const imageInput = document.getElementById("imageInput");
    // const postImage = imageInput.files[0];

    const BlogData = new FormData();
    BlogData.append("postTitle", postTitle);
    BlogData.append("postContent", postContent);
    BlogData.append("postImage", postImage);

    try {
      const make = await axios.post(
        "https://sandrahermajesty.onrender.com/PostgreSQL/API/posts/add",
        BlogData,
        configuration
      );

      console.log(make);
      if (make.status === 200 || make.status === 201) {
        toast.success("blog created successfuly");

        setTimeout(() => {
          navigate("/SandraHerMajesty");
          closeblog(false);
        }, 3500);
  
        
      
      }
    } catch (error) {
      console.log(error);
      alert("failed to post a blog");
    }
  };

  return (
    <>
      <section id="navbar">
        <Admin_navbar />
      </section>

      <section id="content_blog">
        <div className="wrapper_container">
          <button className="cancel" onClick={() => closeblog(false)}>
            X
          </button>
          <h2>
        Sandra<span class="logo">-Her</span> Majesty
        </h2>
          <form className="form-edit-model">
            <input
              type="text"
              className="model-edit-text"
              placeholder="Title"
              value={postTitle}
              onChange={(e) => setpostTitle(e.target.value)}
            />

            <textarea
              className="model-edit-area"
              value={postContent}
              onChange={(e) => setpostContent(e.target.value)}
            ></textarea>

            <input
              type="file"
              className=""
              accept="image/*"
              onChange={(e) => setpostImage(e.target.files[0])}
            />

            <button className="publish" onClick={handleblog}>
              Add Post
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Add_blog;
