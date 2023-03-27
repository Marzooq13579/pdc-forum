import React from 'react'
import Footer from '../footer/Footer'
import Header from '../menu/header'
import LeftNav from '../menu/leftnav'
import Motto from '../motto'
import "./about.css"
export default function About() {
  return (
    <>
    <Header/>
    <LeftNav/>
    <Motto/>
    {/* <div className="something">
<h1>About</h1>   
 </div> */}
    <div className="about_container">
      <h1 className='h1'>Mission</h1>
      <p>Our mission is to inspire and empower engineering students to become skilled and innovative problem solvers who can make a positive impact on society. We aim to achieve this by providing a platform for students to learn, collaborate and share their knowledge and experiences. </p>
      <h1>Vision</h1>
      <p>Our vision is to create a community of learners who are passionate about developing their skills and making a difference in the world.
</p>
<h1>Our Values</h1>
<div className="values">
  <h2> Continuously learn and adapt</h2>
  <p>We value experimentation, metrics-driven decisions, and speed of iteration. We push to production with every commit so we launch as soon as work is done and learn as quickly as possible.</p>
  <h2> Execute</h2>
  <p>We value people who have great ideas but who also can quickly drive them all the way to bring their ideas into life.</p>
    <h2> Be direct and respectful</h2>
    <p>We expect and welcome constant feedback. We trust each other to be open and straightforward, so if you have anything in mind don’t hesitate to contact us.</p>
</div>
    </div>
    <Footer/>
    </>
  )
}
