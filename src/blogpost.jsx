import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CoverImage from "./components/CoverImage";
import { Link } from "react-router-dom";
import Comment from "./components/Comment";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Blogpost() {
    // Function to format a date string using the user's locale
    const formatDate = (dateString) => {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
    // ===================================

  const { _id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [relatedblogs, setrelatedblogs] = useState([]);
  const [commentBody, setcommentBody] = useState("");
  const [comments, Setcomments] = useState([])
  console.log("commentBody", commentBody);

  const displayAll = async () => {
    const response = await fetch(
      `https://sandrahermajesty.onrender.com/PostgreSQL/API/posts/single/post/${_id}`
    );
    const res = await response.json();
    setBlogData(res.data);
    Setcomments(res.data.Comments)
    console.log(res.data);
  };
  useEffect(() => {
    displayAll();
  }, [_id]);
  console.log("POSTS", blogData);
  let comment_view = blogData.comment;

  console.log("comment_view: ", comment_view);

  useEffect(() => {
    const Relatedpost = async () => {
      await fetch(
        `https://sandrahermajesty.onrender.com/PostgreSQL/API/posts/get/all`
      )
        .then((response) => response.json())
        .then((res) => {
          setrelatedblogs(res.data);
        });
    };
    Relatedpost();
  }, []);

  {
    /*---------- comment api section start --------- */
  }


  const handleCommentPost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("commentBody", commentBody);

    const token = localStorage.getItem("token");

    if (!token) {
      toast.warn("First Login to post your comment", {
        position: "top-center",
      });
    }else{
    try {
      const response = await axios.post(
        `https://sandrahermajesty.onrender.com/PostgreSQL/API/comments/add/${_id}`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );


      if (response.status === 201) {
        toast.success("comment Posted",{
          position: "top-center",
          autoClose: 3000,
        });
        console.log(response.data);
        setcommentBody("");
        displayAll();
      } else {
        toast.error("comment post failed",{
          position: "top-center",
          autoClose: 3000,
        });
        console.log(response.status);
      }
    } catch (error) {
      console.log("error", error);
      toast.error("an error occured while posting",{
        position: "top-center",
        autoClose: 3000,
        });
    }
  };
}
  
    /*---------- comment api section end --------- */
    const isButtonDisabled = commentBody.trim() === "";
  
  return (
    <>
      <section id="blog_navbar">
        <Navbar />
      </section>

      <section id="blog_content">
        <div className="coverblog">
          <img src={blogData.postImage} className="cover-image-blog" alt="" />
        </div>
        <div className="blog_desc">
          <h3>{blogData.postTitle}</h3>
          <p>{blogData.postContent}</p>
        </div>

        <h3> Related Posts</h3>

        <div className="related_post">
          {relatedblogs.slice(6, 8).map((related, index) => (
            <Link to={`/blog/${related._id}`} key={index}>
              <CoverImage
                key={index}
                id={related._id}
                image={related.postImage}
                title={related.postTitle}
              />
            </Link>
          ))}
        </div>

        {/*---------- comment DOM section start --------- */}

        <div className="comment_heading">
          {comments && comments.length} <h4>Comments </h4>
        </div>
        <hr className="commenthr"/>
        <br />

        <div className="comments">
          {comments&&
            comments.map((comment_element, index) => (
              <section id="comments" key={index}>
                <div className="profile">
                <img src={comment_element.CommentedBy.profile} className="profile_img" />
                <b>
                  <span className="username">{comment_element.CommentedBy.firstName +" "+comment_element.CommentedBy.lastName}</span>
                </b>
                </div>
                <div className="commentside">
                <p>{comment_element.commentBody}</p>
                <h6>Dates: {formatDate(comment_element.createdAt)}</h6>
                <Link to="/">
            {" "}
            <span className="reply">{comment_element.Replies.length} Replies</span>
          </Link>
                </div>
              </section>
            ))}
        </div>

        <div className="reply_heading">
          <h3>Leave a Comment </h3>
        </div>

        <div className="reply_post">
          <form className="comment_form" onSubmit={handleCommentPost}>
            <textarea
              placeholder="Leave your Comment"
              name="comment"
              className="comment_text"
              value={commentBody}
              onChange={(e) => setcommentBody(e.target.value)}
            ></textarea>
            <button type="submit" className="post_comment" disabled={isButtonDisabled}>
              ADD COMMENT
            </button>
          </form>
        </div>
      </section>

      {/*---------- comment DOM section end --------- */}

      <section id="footer">
        <Footer />
      </section>
      <ToastContainer />
    </>
  );
}

export default Blogpost;
