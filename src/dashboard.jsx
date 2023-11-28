import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Card_blogs from "./components/Card_blogs";
import Footer from "./components/footer";

function Dashboard({}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://sandrahermajesty.onrender.com/PostgreSQL/API/posts/get/all"
      )
        .then((response) => response.json())
        .then((res) => {
          setPosts(res.data);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="content">
        <div className="dash_container">
          <div class="hero">
            <h2>Welcome to Sandra<span class="logo">-Her</span> Majesty</h2>
            <p>
              We are thrilled to have you join our vibrant community on our
              <b> Sandra<span class="logo">-Her</span> Majesty platform</b>, and we extend our warmest welcome to
              you. Your presence is a valuable addition to our growing family of
              writers, readers, and enthusiasts who share a passion for engaging
              content and thoughtful discussions. Our community is diverse and
              supportive, and we encourage you to explore, engage, and connect
              with fellow bloggers who share your interests.
            </p>
          </div>

          <div className="blog_grid">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <Card_blogs
                  key={index}
                  id={post.id}
                  title={post.postTitle}
                  Description={post.postContent}
                  image={post.postImage}
                  views={post.views}
                  allComents={post.allComents}
                  allLikes={post.allLikes}
                  allUnlikes={post.allUnlikes}
                  PostedOn={post.createdAt}
                />
              ))
            ) : (
              <p>
                <iframe
                  src="https://giphy.com/embed/3AMRa6DRUhMli"
                  width="380"
                  height="300"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <center>
                    <a href="https://giphy.com/gifs/bw-follow-back-3AMRa6DRUhMli">
                      Loading.......
                    </a>
                  </center>
                </p>
              </p>
            )}
          </div>
        </div>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default Dashboard;
