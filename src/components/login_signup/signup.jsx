import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import "./logsig.css";

function SignUp({ onCancelClick }) {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhoneNumber(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleNameFocus() {
    setNameFocused(true);
  }

  function handleNameBlur() {
    setNameFocused(false);
  }

  function handleEmailFocus() {
    setEmailFocused(true);
  }

  function handleEmailBlur() {
    setEmailFocused(false);
  }

  function handlePhoneFocus() {
    setPhoneFocused(true);
  }

  function handlePhoneBlur() {
    setPhoneFocused(false);
  }

  function handlePasswordFocus() {
    setPasswordFocused(true);
  }

  function handlePasswordBlur() {
    setPasswordFocused(false);
  }

  function handleConfirmPasswordFocus() {
    setConfirmPasswordFocused(true);
  }

  function handleConfirmPasswordBlur() {
    setConfirmPasswordFocused(false);
  }


  const [cred, setCred] = useState({name: "",  email : "" ,  phone : "",  password : "",  cpassword : ""})
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
      // api
   const   {name, email, phone, password } = cred;

const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, email, phone, password}),

  });
  const json = await response.json();
  console.log(json);
  if(json.success){
      localStorage.setItem('token', json.authtoken);
      onCancelClick();
      navigate("/home")
  }else{
      alert("invalid credentials")
  }
}

  const onchange = (e) =>{
    setCred({...cred, [e.target.name]:e.target.value})

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
              <h2 className="title">Sign Up</h2>
              <div className={"input-div one " + (nameFocused ? 'focus' : '')}>
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <h5>Name</h5>
                  <input
                    type="text"
                    className="input"
                    name='name'
                    value={cred.name}
                    onChange={onchange}
                    onFocus={handleNameFocus}
                    onBlur={handleNameBlur}
                    minLength={3}
                  />
                </div>
              </div>
              <div className={"input-div " + (emailFocused ? 'focus' : '')}>
                <div className="i">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="div">
                  <h5>Email</h5>
                  <input
                    type="email"
                    className="input"
                    name='email'
                    value={cred.email}
                    onChange={onchange}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}

                  />
                </div>
              </div>
              <div className={"input-div " + (phoneFocused ? 'focus' : '')}>
                <div className="i">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="div">
                  <h5>Phone Number</h5>
                  <input
                    type="tel"
                    className="input"
                    name='phone'
                    value={cred.phone}
                    onChange={onchange}
                    onFocus={handlePhoneFocus}
                    onBlur={handlePhoneBlur}
                    minLength={10}
                  />
                </div>
              </div>
              <div className={"input-div " + (passwordFocused ? 'focus' : '')}>
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <h5>Password</h5>
                  <input
                    type="password"
                    className="input"
                    name='password'
                    value={cred.password}
                    onChange={onchange}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    minLength={5}
                  />
                </div>
              </div>
              <div className={"input-div " + (confirmPasswordFocused ? 'focus' : '')}>
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <h5>Confirm Password</h5>
                  <input
                    type="password"
                    className="input"
                    name='cpassword'
                    value={cred.cpassword}
                    onChange={onchange}
                    onFocus={handleConfirmPasswordFocus}
                    onBlur={handleConfirmPasswordBlur}
                    minLength={5}
                  />
                </div>
              </div>
              <input type="submit" className="btn" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

