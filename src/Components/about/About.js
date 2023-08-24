import React from 'react'
import "./About.css"

function About() {
  return (
    <>
      <div className="aboutBanner">
        <img src="/img/About-Us.png" alt="" />
        <p>Learning is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
      </div>
      <div className="aboutMoto">
        <div className='moto'>
          <h5><span></span> ABOUT US</h5>
          <h1>Learning with Love and Laughter</h1>
          <p>The Next Stage. Business environment which prioritizes flexibility, speed, and efficiency, a robust IT strategy is critical. We help you achieve these qualities in your IT strategy by providing you system integration, testing, application development and management services and solutions</p>
        </div>
        <div className="motoImg">
          <img src="/img/about-moto.png" alt="" />
        </div>
      </div>
      <div className='whoWeAre'>
        <div className='title'>
          <h1>Who We Are ?</h1>
          <span className='spanDiv'></span>
        </div>
        <div className='info'>
         When you chooose Lata Software And Consultancy as your IT services,Consulting and business solutions partner,you will discover what so many global enterprize have already discoved the power of certainity.Our Continued Rapid growth is a testament to the certainty our client experince every day.
         Whether it’s a consultancy, technology, or just a better experience fit for the digital era that you’re looking for, we’ve got you covered. We help visionary executives (like you) turn ideas into action and take what works, and amplify it to create the frictionless, digital-first experiences your customers demand.
        Using our blend of design, consulting, and cognitive science expertise, we’re able to deliver end-to-end business solutions to create impactful results with a design-thinking approach. Your solutions won’t just look great, but they’ll bring in the best outcomes, too.
        Don’t just make future plans. Create the future. We’re here to help
        </div>
      </div>
    </>
  )
}

export default About