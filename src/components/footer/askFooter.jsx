import React from 'react';
import "./Footer.css";
import logof from "../../images/logo.png";


export default function AskFooter() {
  return (
    <>
    <div className="afooter">
 <div className="alogof">
    <img src={logof} alt="" />
    <p>PDC Forum is social questions and Answer Engine. Which will help you to solve your problem and connect with other people.</p>
 </div>
 <div className="acolumn">
    <h1> About Us </h1>
    <a href="">Meet the Team </a>
    <a href="">Blog </a>
    <a href="">About Us </a>
    <a href="">Contact Us </a>
 </div>
 <div className="acolumn">
    <h1> Legal Stuff</h1>
    <a href="">Terms of Use</a>
    <a href="">Privacy Policy</a>
    <a href="">Cookie Policy</a>
 </div>
 <div className="acolumn">
    <h1> Help</h1>
    <a href="">Knowledge Base</a>
    <a href="">Support </a>
 </div>
 <div className="acolumn">
    <h1> Folow </h1>
    <div className="arow">
    <a href=""><i className="fa fa-instagram"></i>
</a>
    <a href=""><i className="fa fa-instagram"></i>
</a>
    <a href=""><i className="fa fa-instagram"></i>
</a>
    </div>
 
 </div>
 
    </div>
    <div className="acopyright">
        <p>&copy; PDC. All rights Reserved</p>
        <p>with love by PACE</p>
    </div>

    </>
  )
}
