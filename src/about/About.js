import React from 'react'
import "./About.css"

function About() {
  return (
    <>
      <div className="aboutBanner">
        <img src="/img/About-Us.png" alt="" />
        <p>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
      </div>
      <div className="aboutMoto">
        <div className='moto'>
          <h5><span></span> ABOUT US</h5>
          <h1>Learning with Love and Laughter</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nulla omnis, fugiat dolor deleniti aperiam iusto id delectus obcaecati explicabo, laudantium aut voluptate adipisci. Alias omnis iste deserunt voluptatibus consequatur!</p>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum beatae velit adipisci debitis et, inventore quibusdam corrupti amet alias sapiente, molestias pariatur. Error, deleniti ab. Aperiam tempore ducimus molestiae odio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident illo vel facilis veritatis, asperiores incidunt maxime pariatur culpa explicabo consectetur? Quis sed facilis delectus debitis vel dolorum sapiente perspiciatis quibusdam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque alias accusamus repudiandae nihil possimus illum, facere, hic ratione nostrum ipsam placeat, nesciunt tenetur ullam veniam incidunt optio minus corrupti commodi.
        </div>
      </div>
    </>
  )
}

export default About