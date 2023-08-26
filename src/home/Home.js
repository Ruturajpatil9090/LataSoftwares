import React from 'react'
import "./Home.css"
import HowToApply from './HowToApply'
import InternshipLetter from './InternshipLetter'
import logo from "../assests/commudity.jpg"
import Trading from "../assests/onlinetrading.jpg"
import {useNavigate} from "react-router-dom"


const whyUs = [
  {
    className : "fa-solid fa-hands-holding-child",
    heading : "Need Of ERP Software",
    description : 'Use Of Software for business accounting is a need of the hour.This saves lot of time of Enterpreneur. As also it works without human mistakes,errors and ommissions. Working without accounting software is now a days is old fashioned.'
  },
  {
    className : "fa-solid fa-stamp",
    heading : "Government Transactions",
    description : 'Custumized and latest ERP software provides facility of handling all government transactions like filing of GST retuns,creation of E-Way bill,TDS/TCS processing.It also provides facility of submission of all mandatory returns through software with accuracy.'
  },
  {
    className : "fa-solid fa-database",
    heading : "Data availability to all concerned",
    description : 'ERP software fulfills all data requirement needs for your CA,GST Consultant and other taxsation handling agencies.No separate efforts are required to be taken by office staff at the time of filing of annual tax returns.'
  },
  {
    className : "fa-solid fa-book",
    heading : "Vigorous MIS Reports",
    description : 'ERP software is having capability of providing various types of MIS reports to all concerned.It also provides tailer made reports as per requirement of management/other staff.This capability caters need of reports from top to bottom management.'
  }

]

function Home() {
const navigate = useNavigate()
const handleClick=(url)=>{
  navigate('/product')
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
         <h5><strong></strong>"We develop Web-based Accounting/ERP Software solutions as per the requirement of Customers for various sectors."</h5>
         <br></br>
         <br></br>
         <button onClick={handleClickGet}>Get Started</button> 
        </div>
        
        <div className='frameImg'>
          <img src="/img/homeGif.png" alt="" />
        </div>
      </div>
      
      <div className="whyUs">
        {/* <h1>Why Lata Software Consultancy?</h1> */}
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
      {/* <HowToApply></HowToApply> */}
      {/* <InternshipLetter/> */}
     
      <div className="advanceFeature">
        <div className="infoDiv">
          <div className="heading">
            <h5><span className='headSpan'></span> ADVANCE FEATURES</h5>
             <h1>Our Advance Feature</h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt ipsum hic pariatur libero, quia molestiae obcaecati placeat facilis sapiente est excepturi iste. Sapiente quas corporis voluptate. Reiciendis, esse architecto?</p> */}
          </div>
          <br></br>
          <div className="Points">
              <div className="subPoint">
                <div className="logo">
                  <img src={logo} alt=""/>
                </div>
                <br></br>
                <br></br>
                <h3>Online Business Trading Software</h3>
                <p>We provides online business trading software for all types of traders dealing in all commodities.We also provide online business software for manufacturers,service providers and others businesses.By using online trading software clients of our customers can book orders,view their bills,get statement of account etc. through their mobile phone/laptop.This avoids human intervention in getting services to the clients of our customers.
                   </p>
              <button className='btn btn-primary' onClick={handleClick}>Know More</button>
              </div>
  
          </div>
        </div>
        <div className="ImgDiv">
          <img src={Trading} alt="" />
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