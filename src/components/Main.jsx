import React from "react";
import {  Routes, Route } from "react-router-dom";
import Rquestions from "./questions/Rquestions";
import MenuQuestion from "./questions/menuquestions";
import Answered from "./questions/answered";
import Mquestions from "./questions/Mquestions"; 

function Main(){
  return(
<>
<MenuQuestion/>

        <Routes>
          <Route exact path="/" element={<Rquestions />} />
          <Route path="/mquestions" element={<Mquestions/>} />
          <Route path="/answered" element={<Answered/>} />
        </Routes>
    </>
  );
}

export default Main;
