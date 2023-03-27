import React from 'react'
import Footer from '../footer/Footer'
import Header from '../menu/header'
import LeftNav from '../menu/leftnav'
import "./community.css"

export const Community = () => {
  return (
    <>
    <Header/>
    <LeftNav/>
    <div className="comnothing"></div>
    <div className="comrow">
        <div className="comcoloum">
        <div className="combox">     community1   <div className="comin"><i  class='fas'>&#xf500;</i>   followers</div></div>
        <div className="combox">  community2      <div className="comin">  <i  class='fas'>&#xf500;</i>   followers</div></div>
        <div className="combox">    community3    <div className="comin"><i  class='fas'>&#xf500;</i>   followers </div></div>
        <div className="combox">   community4     <div className="comin"><i  class='fas'>&#xf500;</i>   followers </div></div>


        </div>


        <div className="comcoloum">
        <div className="combox"> community1 <div className="comin"><i  class='fas'>&#xf500;</i>   followers</div> </div>
        <div className="combox">community2 <div className="comin"><i  class='fas'>&#xf500;</i>   followers</div> </div>
        <div className="combox">community3 <div className="comin"><i  class='fas'>&#xf500;</i>   followers</div> </div>
        <div className="combox">community4 <div className="comin"><i  class='fas'>&#xf500;</i>   followers</div> </div>




        </div>
    </div>

    

    

    <Footer/>
    </>
  )
}