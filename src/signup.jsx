import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

function Signup() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [profile, setProfile] = useState(null);

  const signupdata = { firstname, lastname, email, password, profile };

  const handlesignup = async (data) => {
    try {
      const response = await fetch(
        "https://sandrahermajesty.onrender.com/PostgreSQL/API/users/signUp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const datas = await response.JSON();
        console.log("response", datas);
        alert("USER registered succesfully");
      } else {
        console.log("Failed to register your INFO");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>

      <section id="create">
        <div className="signup_wrapper">
          <div className="wrapper_signup">
            <h2>NP-SONS 250</h2>
            <form className="form_create">
              <input
                type="text"
                className="signup_text"
                placeholder="Firstname"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
              <input
                type="text"
                className="signup_text"
                placeholder="Lastname"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
              <input
                type="text"
                className="signup_text"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />

              <input
                type="password"
                className="signup_text"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />

              <input
                type="file"
                className="file_img"
                onChange={(e) => setProfile(e.target.files[0])}
              />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlesignup(signupdata);
                }}
              >
                Register
              </button>
            </form>
          </div>
          <div className="wrapper_welcome">
            <h2>
              M<span className="logo">eight</span> Blogs
            </h2>
            <p>
              We are thrilled to have you join our vibrant community on our
              <b> NP-SONS 250 blog platform</b>, and we extend our warmest welcome to
              you. Your presence is a valuable addition to our growing family of
              writers, readers, and enthusiasts who share a passion for engaging
              content and thoughtful discussions. Our community is diverse and
              supportive, and we encourage you to explore, engage, and connect
              with fellow bloggers who share your interests.
            </p>
            <Link to="/signin">
              <button className="create">Login</button>
            </Link>
          </div>
        </div>
      </section>

      <section id="Footer">
        <Footer />
      </section>
    </>
  );
}

export default Signup;
