import React from 'react'
import "../../home/Home.css"
import logo from "../../assests/Courses/git.png"

const ProgramForWho = () => {
    const handleClick=()=>{}
    const handleClickNow=()=>{}
  return (
    <>
     <div className="advanceFeature">
        <div className="infoDiv">
          <div className="heading">
            <h5><span className='headSpan'></span> ADVANCE FEATURES</h5>
            <h1>Our Advance Educator Learning System</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt ipsum hic pariatur libero, quia molestiae obcaecati placeat facilis sapiente est excepturi iste. Sapiente quas corporis voluptate. Reiciendis, esse architecto?</p>
          </div>
          <div className="Points">
              <div className="subPoint">
                <div className="logo">
                  <img src={logo} alt=""/>
                </div>
                <h3>Full Stack Development</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos numquam suscipit aut minus veniam itaque.</p>
              <button className='btn btn-primary' onClick={handleClick}>Know More</button>
              </div>
              <div className="subPoint">
                <div className="logo">
                <img src={logo} alt=""/>
                  
                </div>
                <h3>AI And Data Science</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos numquam suscipit aut minus veniam itaque.</p>
                <button className='btn btn-primary' onClick={handleClickNow}>Know More</button>
              </div>
          </div>
        </div>
        <div className="ImgDiv">
          <img src="/img/OnlineEducation.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default ProgramForWho;