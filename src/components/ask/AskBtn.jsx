import React from 'react';
import "./ask.css";
import { Link } from 'react-router-dom';


export default function AskBtn() {
  return (
    <>
     {!localStorage.getItem('token') ? "":<div className='askbtn'> <Link className="link" to="/ask">Ask a question</Link></div>}
    </>

  )
}
