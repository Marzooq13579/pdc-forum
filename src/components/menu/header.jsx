import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import Login from "../login_signup/Login";
import { Link } from "react-router-dom";
import "./menu.css";
import SignUp from "../login_signup/signup";
import NoteContext from "../../context/Notes/NoteContext";


function Header(props) {
  const context = useContext(NoteContext);

  const { note } = props;

  const navigate = useNavigate();
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
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo failed to load" height={100} />
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>

            <li>
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
         
              {!localStorage.getItem("token") ? ("") : (
          <Link className="link" to="/blog">
<i className="fa fa-user"></i> {note && note.user.name}
        </Link>
        )}
            </li>
          </ul>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="search-btn">
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        {!localStorage.getItem("token") ? (
          <>
            <div className="login-btn">
              <button onClick={handleLoginClick}>Login</button>
            </div>
            <div className="signup-btn">
              <button onClick={handleSignUpClick}>Signup</button>
            </div>
          </>
        ) : (
          <div className="signup-btn">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      {showLogin && <Login onCancelClick={handleCancelClick} />}
      {showSignUp && <SignUp onCancelClick={handleCancelClick1} />}
    </>
  );
}

export default Header;
