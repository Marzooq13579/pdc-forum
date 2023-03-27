import React from 'react';
import "./Footer.css";
import logof from "../../images/logo.png";


export default function Footer() {
  return (
    <>
    <div className="footer">
 <div className="logof">
    <img src={logof} alt="" />
    <p>PDC Forum is social questions and Answer Engine. Which will help you to solve your problem and connect with other people.</p>
 </div>
 {/* <div className='columnrow'> */}
 <div className="column">
    <h1> About Us </h1>
    <a href="">Meet the Team </a>
    <a href="">Blog </a>
    <a href="">About Us </a>
    <a href="">Contact Us </a>
 </div>
 <div className="column">
    <h1> Legal Stuff</h1>
    <a href="">Terms of Use</a>
    <a href="">Privacy Policy</a>
    <a href="">Cookie Policy</a>
 </div>
 <div className="column">
    <h1> Help</h1>
    <a href="">Knowledge Base</a>
    <a href="">Support </a>
 </div>
 {/* </div> */}
 <div className="column">
    <h1> Folow </h1>
    <div className="row">
    <a href=""><i className="fa fa-instagram"></i>
</a>
    <a href=""><i className="fa fa-instagram"></i>
</a>
    <a href=""><i className="fa fa-instagram"></i>
</a>
    </div>
 
 </div>
 
    </div>
    <div className="copyright">
        <p>&copy; PDC. All rights Reserved</p>
        <p>with love by PACE</p>
    </div>

    </>
  )
}
