import React, { useState } from "react";
import "./menu.css";
import Login from "../login_signup/Login";
import { Link } from "react-router-dom";
import SignUp from "../login_signup/signup";

function LeftNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleCancelClick = () => {
    setShowLogin(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleCancelClick1 = () => {
    setShowSignUp(false);
  };

  return (
    <>
      <div className="menu-bars" onClick={handleClick}>
        <i className="fa fa-bars"></i>
      </div>
      <div className={`navside ${isOpen ? "open" : ""}`}>
        <div className="cancelbtn" onClick={handleClick}>
          X
        </div>

        <ul>
          <li>
            <Link className="sidelink" to="/">
            <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li>
          
            <Link className="sidelink" to="/allqstn">
            <i className="fa fa-book"></i> Questions
            </Link>
          </li>
          <li>
            <Link className="sidelink" to="/community">
            <i className="fa fa-users"></i>  Community
            </Link>
          </li>

          <li>
            <i className="fa fa-user"></i> Admins
          </li>
          <li>
            <i className="fa fa-tags"></i> Tags
          </li>
          <li>
            <i className="fa fa-file-code-o">..</i> Docs
          </li>
        </ul>
        <div className="login-btnnav">
          <button onClick={handleLoginClick}>Login</button>
        </div>
        <div className="signup-btnnav">
          <button onClick={handleSignUpClick}>Signup</button>
        </div>
        <div className="estra">
          <ul>
            <li>
              <Link className="linkli" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="linkli" to="/contact">
                Contact Us
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      {showLogin && <Login onCancelClick={handleCancelClick} />}
      {showSignUp && <SignUp onCancelClick={handleCancelClick1} />}
    </>
  );
}

export default LeftNav;
