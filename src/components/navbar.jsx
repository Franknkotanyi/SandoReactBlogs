import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GatewayModel } from "./GatewayModel";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [GatewayModelopen, setGatewayModelopen] = useState(false);

  const [loggedIn, setloggedIn] = useState(false);
  const [logout, setLogout] = useState(false);

  const handleSuccessLogin = () => {
    setloggedIn(true);
  };

  const handleLogout = () => {
    setloggedIn(false);
    setLogout(true);
    localStorage.removeItem("token");
  };

  return (
    <IconContext.Provider value={{ color: "white", size: "2em" }}>
      <>
        <div className="menus">
          <Link to="/">
            {" "}
            <h2>
              Sandra<span class="logo">-Her</span> Majesty
            </h2>
          </Link>
          <ul className={menuOpen ? "open" : ""}>
            <Link to="/" className="text">
              Home
            </Link>

            <Link to="/About" className="text">
              About
            </Link>

            <Link to="/contact" className="text">
              Contact
            </Link>
            <button
              className="dash_signin"
              onClick={() => {
                if (loggedIn) {
                  handleLogout();
                } else {
                  setGatewayModelopen(true);
                }
              }}
            >
              {logout ? "LOGIN" : loggedIn ? "Logout" : "LOGIN"}
            </button>
          </ul>

          <div
            className="MobileMenu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <FaBars />
          </div>
        </div>

        <div className="model">
          {GatewayModelopen && (
            <GatewayModel
              closeGatewayModel={setGatewayModelopen}
              onSuccessfulLogin={handleSuccessLogin}
            />
          )}
        </div>
      </>
    </IconContext.Provider>
  );
};

export default Navbar;
