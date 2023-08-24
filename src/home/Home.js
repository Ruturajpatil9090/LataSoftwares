import React from 'react'
import "./Home.css"
import HowToApply from './HowToApply'
import InternshipLetter from './InternshipLetter'
import logo from "../assests/commudity.jpg"
import {useNavigate} from "react-router-dom"


const whyUs = [
  {
    className : "fa-solid fa-hands-holding-child",
    heading : "Better Future",
    description : '"Empowering Tomorrow Together. At Better Future Company, we are committed to pioneering positive change. Through innovation, sustainability, and collaboration, we are shaping a brighter future for all. Join us in creating a world of endless possibilities."'
  },
  {
    className : "fa-solid fa-medal",
    heading : "Qualified Trainers",
    description : '"Our team consists of highly qualified trainers with extensive expertise in their fields. With proven track records, industry recognition, and a passion for teaching, our trainers ensure an exceptional learning experience for all our participants."'
  },
  {
    className : "fa-solid fa-user-graduate",
    heading : "Internship & Job",
    description : '"Unlock your potential through our dynamic internships and job opportunities. Gain real-world experience, develop essential skills, and pave your way to a successful career with our diverse range of internships and job openings, tailored to your aspirations"'
  },
  {
    className : "fa-solid fa-handshake",
    heading : "24/7 Great Support",
    description : '"Experience unparalleled assistance with our 24/7 Great Support. Our dedicated support team is always ready to provide swift and effective solutions, ensuring your peace of mind and uninterrupted progress towards your goals."'
  }

]

function Home() {
const navigate = useNavigate()
const handleClick=(url)=>{
  window.open("https://www.moneycontrol.com/commodity/",'_blank')
}

const handleClickGet=()=>{
  navigate("/product")
}

  return (
    <>
      <div className='homeDiv'>
        <div className='frameContent'>
          <h2>Grow Your Business With</h2>
          <h1 style={{  "color":"(27,214,252)"}}>Lata Software Consultancy</h1>
         <h5><strong></strong>"We develop Web-based Accounting Software as per the requirement of Customers for various sectors."</h5>
         <br></br>
         <br></br>
         <button onClick={handleClickGet}>Get Started</button> 
        </div>
        
        <div className='frameImg'>
          <img src="/img/homeGif.png" alt="" />
        </div>
      </div>
      
      <div className="whyUs">
        <h1>Why Lata Software Consultancy?</h1>
        <br></br>
        {/* <h5>The most important part of Learn New Things is proper training.</h5> */}
        <div className='whyUsContain'>

          {
            whyUs.map((data)=>{
              return (
                <div className="singleContain">
                  <div className='logoDiv'>
                    <i className={data.className}></i> 
                  </div>
                  <h3>{data.heading}</h3>
                  <p>{data.description}</p>
                </div>
              )
            })
          }
    
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <HowToApply></HowToApply>
      <InternshipLetter/>
     
      <div className="advanceFeature">
        <div className="infoDiv">
          <div className="heading">
            <h5><span className='headSpan'></span> ADVANCE FEATURES</h5>
            <h1>Our Advance Feature</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt ipsum hic pariatur libero, quia molestiae obcaecati placeat facilis sapiente est excepturi iste. Sapiente quas corporis voluptate. Reiciendis, esse architecto?</p>
          </div>
          <br></br>
          <div className="Points">
              <div className="subPoint">
                <div className="logo">
                  <img src={logo} alt=""/>
                </div>
                <h3>Online</h3>
                <h3>Commudity Market</h3>
                <p>Welcome to our online commodity market, a digital platform where buyers and sellers converge to trade a wide array of commodities. Explore seamless transactions, real-time pricing, and a global reach, revolutionizing the way commodities are bought and sold.</p>
              <button className='btn btn-primary' onClick={handleClick}>Know More</button>
              </div>
  
          </div>
        </div>
        <div className="ImgDiv">
          <img src="/img/OnlineEducation.png" alt="" />
        </div>
      </div>
      <br></br>
      <br></br>
    
      {/* <div className='testimonial'>
        <div className="heading">
          <h5>TESTIMONIALS</h5>
          <h1>Happy Students </h1>
          <span className='spanDiv'></span>
        </div>
       
      </div> */}
    </>
  )
}

export default Home