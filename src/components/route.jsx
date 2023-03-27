import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./contact/ContactUs";
import About from "./about/About";
import Home from "./home";
import Blog from "./blog/blog";
import Ask from "./ask/ask";
import AllQuestions from "./questions/AllQuestions";
import Answer from "./answer/Answer";
import { Community } from "./community/Community";

export default function RouteHome() {
  return (
    <>
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/allqstn" element={<AllQuestions />} />
        <Route path="/answer/:id" element={<Answer />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
}
