import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onCancelClick }) {
  const [cred, setCred] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("clicked on submit");
    e.preventDefault();
    // api
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: cred.email, password: cred.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      console.log("Redirecting to home page...");
      navigate("/home");
      onCancelClick();
    } else {
      alert("invalid credentials");
    }
  };
  const onchange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleUsernameFocus() {
    setUsernameFocused(true);
  }

  function handleUsernameBlur() {
    setUsernameFocused(false);
  }

  function handlePasswordFocus() {
    setPasswordFocused(true);
  }

  function handlePasswordBlur() {
    setPasswordFocused(false);
  }

  return (
    <>
      <div id="container" className="login-container">
        <div className="loginBody">
          <div className="cancel" onClick={onCancelClick}>
            X
          </div>
          <div className="login-content">
            <form onSubmit={handleSubmit}>
              <h2 className="title">Login</h2>
              <div
                className={`input-div one ${usernameFocused ? "focus" : ""}`}
              >
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <h5>Email</h5>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    autoComplete="off"
                    value={cred.email}
                    onChange={onchange}
                    onFocus={handleUsernameFocus}
                    onBlur={handleUsernameBlur}
                  />
                </div>
              </div>
              <div
                className={`input-div pass ${passwordFocused ? "focus" : ""}`}
              >
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <h5>Password</h5>
                  <input
                    type="password"
                    className="input"
                    name="password"
                    value={cred.password}
                    onChange={onchange}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                  />
                </div>
              </div>
              <a className="a" href="#">
                Forgot Password?
              </a>
              <input type="submit" className="btn" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
