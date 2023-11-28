import React from "react";
import Navbar from "./components/navbar";
import CoverImage from "./components/CoverImage";
import Footer from "./components/footer";

function About() {
  const Insertimage = [
    {
      image:
        "https://images.unsplash.com/photo-1668718031554-9c05b5d03750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    },
  ];

  return (
    <>
      <section id="navabar">
        <Navbar />
      </section>

      <section id="about_content">
        <div className="about_cover">
          {Insertimage.map((cover, index) => (
            <CoverImage key={index} image={cover.image} />
          ))}
        </div>
        <h2>Hello, We Are Sandra<span class="logo">-Her</span> Majesty.</h2>
        <p>
          Dear User, We are thrilled to have you join our vibrant community on
          Our blog <b>NP-SONS 250 blog platform</b>, and we extend our warmest
          welcome to you. Your presence is a valuable addition to our growing
          family of writers, readers, and enthusiasts who share a passion for
          engaging content and thoughtful discussions. Blogging is not just
          about words; it's about sharing your unique voice and perspective with
          the world. We believe that everyone has a story to tell, knowledge to
          share, and experiences to inspire others. Your contributions, whether
          they are articles, stories, reviews, or insights, will undoubtedly
          enrich our platform and offer fresh, exciting perspectives to our
          readers. Our community is diverse and supportive, and we encourage you
          to explore, engage, and connect with fellow bloggers who share your
          interests.
        </p>

        <div class="text_grid">
          <div class="about_card">
            <h3>Who we are</h3>
            <p>
              {" "}
              We believe that everyone has a story to tell, knowledge to share,
              and experiences to inspire others. Your contributions, whether
              they are articles, stories, reviews, or insights, will undoubtedly
              enrich our platform and offer fresh, exciting perspectives to our
              readers. Our community is diverse and supportive, and we encourage
              you to explore, engage, and connect with fellow bloggers who share
              your interests.
            </p>
          </div>

          <div class="about_card">
            <h3>Our Mission</h3>
            <p>
              {" "}
              We believe that everyone has a story to tell, knowledge to share,
              and experiences to inspire others. Your contributions, whether
              they are articles, stories, reviews, or insights, will undoubtedly
              enrich our platform and offer fresh, exciting perspectives to our
              readers. Our community is diverse and supportive, and we encourage
              you to explore, engage, and connect with fellow bloggers who share
              your interests.
            </p>
          </div>

          <div class="about_card">
            <h3>Our Vision</h3>
            <p>
              {" "}
              We believe that everyone has a story to tell, knowledge to share,
              and experiences to inspire others. Your contributions, whether
              they are articles, stories, reviews, or insights, will undoubtedly
              enrich our platform and offer fresh, exciting perspectives to our
              readers. Our community is diverse and supportive, and we encourage
              you to explore, engage, and connect with fellow bloggers who share
              your interests.
            </p>
          </div>
          <div class="about_card">
            <h3>Our Goals</h3>
            <p>
              {" "}
              We believe that everyone has a story to tell, knowledge to share,
              and experiences to inspire others. Your contributions, whether
              they are articles, stories, reviews, or insights, will undoubtedly
              enrich our platform and offer fresh, exciting perspectives to our
              readers. Our community is diverse and supportive, and we encourage
              you to explore, engage, and connect with fellow bloggers who share
              your interests.
            </p>
          </div>
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default About;
