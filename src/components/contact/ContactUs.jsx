import React from "react";
import Footer from "../footer/Footer";
import Header from "../menu/header";
import LeftNav from "../menu/leftnav";
import "./contact.css"
function Contactus(){
    return(
        <>
    <Header/>
    <LeftNav/> 
    
    
    <div className="containerr" id="">
            <div className="text">
            <div className="icon"><i className="fa fa-paper-plane"></i> Contact Us
           
            </div>
            <div className="msg">
                We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. Feel free to contact us for any questions or if you need any help or services ! Please provide a detailed explanation of your problem.

                </div>

            </div>
                <div className="contact">
                <form action="">

                    <div className="row">
                  <input type="text" name="" id=""placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    </div>

                    <div className="row">
                    <input type="text" placeholder="Phone" />
                    <input type="text" placeholder="Subject"/></div>
                    <div className="row">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Briefly explain.."></textarea>
                    </div>
                    <div className="row">
                        <button>Submit</button>
                    </div>
                    </form>
                </div>
        </div>
            <Footer/>
 
    
           </>
    )
}
export default Contactus;