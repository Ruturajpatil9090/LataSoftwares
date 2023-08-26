import React from 'react'
import "./About.css"

function About() {
  return (
    <>
      <div className="aboutBanner">
        <img src="/img/About-Us.png" alt="" />
        {/* <p>Learning is the passport to the future, for tomorrow belongs to those who prepare for it today.</p> */}
      </div>
      <div className="aboutMoto">
        <div className='moto'>
          <h1><span></span>Our Profile</h1>
          <h1></h1>
          <h4 >We have been engaged in the software development field since 1996, founded by Mr. Pankaj Dixit and Mrs. Aparna Dixit. Lata Software Consultancy is renowned for delivering top-tier software solutions. Our vision revolves around providing unparalleled quality services to our customers, consistently introducing new features to enhance their experience. We take pride in our ability to keep customers satisfied, owing to our cutting-edge customized solutions and prompt support. Our team comprises 7 skilled software engineers.</h4>
        <br></br>
        <h4>Recently, we've ventured into offering 'Online trading software' - an advanced feature in the market. This allows our customers' clients to place orders and access necessary data through our customers' website, enabling seamless 24/7 transactions.</h4>
        </div>
        <div className="motoImg">
          <img src="/img/about-moto.png" alt="" />
        </div>
      </div>
      <div className='whoWeAre'>
        <div className='title'>
          {/* <h1>Who We Are ?</h1> */}
          <span className='spanDiv'></span>
        </div>
        <div className='info'>
        
        </div>
      </div>
    </>
  )
}

export default About