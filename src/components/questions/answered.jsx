import React from "react";
import MenuQuestion from "./menuquestions";
import './questions.css';



function Answered(){
  return(
 <>
  
      <div className="middle-nav">
       
        <div className="questions">
        <div className="que">
          <div className="name">Name</div>
          <div className="q">this  is the most anwered is the Question?</div>
          <div className="statement">the above question is not explained properly so here statemebt will be explainedthe above question is not explained properly so here statemebt will be explained</div>
          <div className="cont">
          <div className="answer"> 2 Answers</div>
            <div className="views">1k views</div>
            <div className="answer-btn">Answer</div>
          </div>
        </div>
      </div>
      </div>
    
  
</>
  );
}

export default Answered;


