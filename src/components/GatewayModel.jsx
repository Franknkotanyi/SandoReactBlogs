import React, { useState } from "react";
import { FaFacebook,FaInstagram,FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const GatewayModel = ({ closeGatewayModel, onSuccessfulLogin }) => {
  const navigate = useNavigate();
  const [NewaccountActive, setNewaccountActive] = useState(false);
  const [loginFormActive, setloginFormActive] = useState(true);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [profile, setprofile] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const logininfo = { email, password };

  {
    /*--------------  Signup -------------------------*/
  }

  const handlesignup = async (e) => {
    e.preventDefault();

    const signupinfo = new FormData();
    signupinfo.append("firstName", firstName);
    signupinfo.append("lastName", lastName);
    signupinfo.append("email", email);
    signupinfo.append("password", password);

    const imageInput = document.getElementById("imageInput");
    const profile = imageInput.files[0];
    signupinfo.append("profile", profile);

    try {
      const response = await fetch(
        "https://sandrahermajesty.onrender.com/PostgreSQL/API/users/signUp",

        {
          method: "POST",
          body: signupinfo,
        }
      );
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        const responseData = await response.json();
        console.log("response", responseData);
        toast.success("User registered succesfully", {
          position: "top-center",
          autoClose: 3000,
        });
        setfirstName("");
        setlastName("");
        setemail("");
        setpassword("");
        setprofile("");
      } else if (response.status === 400) {
        console.log("Email already exists");
        toast.warning("Email Already exists", {
          position: "top-center",
          autoClose: 3000,
        });
        setfirstName("");
        setlastName("");
        setemail("");
        setpassword("");
        setprofile("");
      } else {
        console.log("User registeration failed");
        toast.error("User registeration failed", {
          position: "top-center",
        });
        // setfirstName("");
        // setlastName("");
        // setemail("");
        // setpassword("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  {
    /*--------------LOGIN -------------------------*/
  }

  const handlelogin = async (logindata) => {
    try {
      const responses = await fetch(
        "https://sandrahermajesty.onrender.com/PostgreSQL/API/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(logindata),
        }
      );

      if (responses.ok) {
        const responseData = await responses.json();

        localStorage.setItem("token", responseData.token);
        sessionStorage.setItem("email", responseData.users.email);
        console.log("response", responseData);

        console.log(responseData?.users?.role);

        if (responseData?.users?.role === "admin") {
          toast.success("Admin Verfication Success");
          navigate("/SandraHerMajesty");
          
        } else {
          toast.success("Welcome back Dear User");
          navigate("/");
        }
        setemail("");
        setpassword("");
        onSuccessfulLogin();
        closeGatewayModel(false);
      } else {
        toast.error("Ooops, failed to login", {
          position: "top-center",
          autoClose: 3000,
        });

        setemail("");
        setpassword("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="Modelbackground">
        <div className="ModelContainer">
          <button className="cancel" onClick={() => closeGatewayModel(false)}>
            X
          </button>
          <h2>
          Sandra<span class="logo">-Her</span> Majesty
          </h2>

          {loginFormActive && (
            <form className="form-login-model">
              <input
                type="text"
                placeholder="Email"
                className="model-input-text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="model-input-text"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <button
                className="login"
                onClick={(e) => {
                  e.preventDefault();
                  handlelogin(logininfo);
                }}
              >
                LOGIN
              </button>

              <h3>----------- connect with us -------------</h3>
              <div className="socialnetworks">
                <FaFacebook className="facebook" />
                <FaInstagram className="instagram" />
                <FaTwitter className="instagram" />
                <FaGithub className="github" />
                <FaLinkedin className="linkedin" />
              </div>

              <div className="create">
                <h3
                  onClick={() => {
                    setloginFormActive(false);
                    setNewaccountActive(true);
                  }}
                >
                  New to Sandra<span class="logo">-Her</span> Majesty{" "}
                  <span className="join">Register</span>
                </h3>
              </div>
            </form>
          )}

          {/* ----------------  Create Account----------------------------- */}

          {NewaccountActive && (
            <form className="form-login-model">
              <input
                type="text"
                placeholder="Firstname"
                className="model-input-text"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Lastname"
                className="model-input-text"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />{" "}
              <input
                type="text"
                placeholder="Email"
                className="model-input-text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="model-input-text"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="file_img"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setprofile(file);
                }}
              />
              <button className="login" onClick={handlesignup}>
                Register
              </button>
              <div className="create">
                <h3
                  onClick={() => {
                    setNewaccountActive(false);
                    setloginFormActive(true);
                  }}
                >
                  Already have an account <span className="join">Login</span>
                </h3>
              </div>
            </form>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
