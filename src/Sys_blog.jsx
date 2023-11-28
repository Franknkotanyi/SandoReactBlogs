import React, { useState, useEffect } from "react";

import Admin_navbar from "./components/Admin_navbar";
import Footer from "./components/footer";
import { FiMoreVertical, FiSettings } from "react-icons/Fi";
import { AiOutlineBarChart } from "react-icons/ai";
import { MdAddToPhotos, MdNotificationAdd } from "react-icons/md";
import Admin_card_blog from "./components/admin_card_blog";
import Add_blog from "./Add_blog";
import Analytics from "./analytics";

function Sysblog() {
  const [addblog, setaddblog] = useState(false);

  const [posts, setPosts] = useState([]);

  const [mobilePop, setmobilePop] = useState(false);

  const [analyticsOpen, setanalyticsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        "https://sandrahermajesty.onrender.com/PostgreSQL/API/posts/get/all"
      )
        .then((response) => response.json())
        .then((res) => {
          setPosts(res.data);
        });
    };
    fetchData();
  });

  return (
    <>
      <section id="navbar">
        <Admin_navbar />
        {addblog && <Add_blog closeblog={setaddblog} />}
        {analyticsOpen && <Analytics closeMyAnalytics={setanalyticsOpen} />}
      </section>
      <section id="content">
        <div class="admin_hero">
          <div className="dashboard_title">
            {" "}
            <h2>
              <FiSettings />
              Dashboard
            </h2>
            <div className="add_post">
              <button onClick={() => setaddblog(true)}>
                <MdAddToPhotos />
                Add POST
              </button>
            </div>
          </div>
          <div className="mobile_pop_display">
            <span
              className="mobile_poptext_display"
              onClick={() => setmobilePop(!mobilePop)}
            >
              <h3>
                Others <MdNotificationAdd />
              </h3>
            </span>
          </div>

          <div className="dashboard_buttons" id={mobilePop ? "pop-open" : ""}>
            <div className="add_post">
              <button>
                All Blogs
                {posts && <span class="pop">{posts.length}</span>}
              </button>
            </div>

            <div className="add_post">
              <button onClick={() => setanalyticsOpen(true)}>
                Analytics
                <span class="pop_chart">
                  <AiOutlineBarChart />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="admin_dash_container">
          <div className="admin_blog_grid">
            {posts.length > 0 ? (
              posts.map((blogs, index) => (
                <Admin_card_blog
                  key={index}
                  id={blogs.id}
                  title={blogs.postTitle}
                  Description={blogs.postContent}
                  image={blogs.postImage}
                  views={blogs.views}
                  allComents={blogs.allComents}
                  allLikes={blogs.allLikes}
                  allUnlikes={blogs.allUnlikes}
                  PostedOn={blogs.createdAt}
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

export default Sysblog;
