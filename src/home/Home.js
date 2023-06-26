import React from 'react'
import "./Home.css"
import HowToApply from './HowToApply'
import InternshipLetter from './InternshipLetter'
import Project from './Project'

const whyUs = [
  {
    className : "fa-solid fa-hands-holding-child",
    heading : "Better Future",
    description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  },
  {
    className : "fa-solid fa-medal",
    heading : "Qualified Trainers",
    description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  },
  {
    className : "fa-solid fa-user-graduate",
    heading : "Internship & Job",
    description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  },
  {
    className : "fa-solid fa-handshake",
    heading : "24/7 Great Support",
    description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  },
  {
    className : "fa-solid fa-hands-holding-child",
    heading : "Better Future",
    description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  },
  {
    className : "fa-solid fa-medal",
    heading : "Qualified Trainers",
    description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  },
  {
    className : "fa-solid fa-user-graduate",
    heading : "Internship & Job",
    description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  },
  {
    className : "fa-solid fa-handshake",
    heading : "24/7 Great Support",
    description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  }

]

function Home() {
  return (
    <>
      <div className='homeDiv'>
        <div className='frameContent'>
          <h5>Make it work, make it right, make it fast</h5>
          <h1>Make Your World Better</h1>
          <h5>Are you going to sit and type in front of that thing all day, or are you going out with us?</h5>
        </div>
        <div className='frameImg'>
          <img src="/img/homeGif.png" alt="" />
        </div>
      </div>
      <HowToApply></HowToApply>
      <InternshipLetter/>
      <div className="whyUs">
        <h1>Why EdExcel.Ai ?</h1>
        <h5>The most important part of education is proper training.</h5>
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
                  <i className="fa-solid fa-earth-asia"></i>
                </div>
                <h3>Learn Anywhere</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos numquam suscipit aut minus veniam itaque.</p>
              </div>
              <div className="subPoint">
                <div className="logo">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <h3>Expert Teacher</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos numquam suscipit aut minus veniam itaque.</p>
              </div>
          </div>
        </div>
        <div className="ImgDiv">
          <img src="/img/OnlineEducation.png" alt="" />
        </div>
      </div>
      <Project/>
      <div className='testimonial'>
        <div className="heading">
          <h5>TESTIMONIALS</h5>
          <h1>Happy Students </h1>
          <span className='spanDiv'></span>
        </div>
        <div className="students">
          <div className='individualStudent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a consequuntur sapiente, dolorem veniam architecto vero, eius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?</p>
            <div className='nameAndPosition'>
              <div>
                <h5>Omkar Sathe</h5>
                <p>Full Stack Java Developer</p>
              </div>
              <div>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star "></i>
              </div>
            </div>
          </div>
          <div className='individualStudent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a consequuntur sapiente, dolorem veniam architecto vero, eius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?</p>
            <div className='nameAndPosition'>
              <div>
                <h5>Omkar Sathe</h5>
                <p>Full Stack Java Developer</p>
              </div>
              <div>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star "></i>
              </div>
            </div>
          </div>
          <div className='individualStudent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a consequuntur sapiente, dolorem veniam architecto vero, eius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?</p>
            <div className='nameAndPosition'>
              <div>
                <h5>Omkar Sathe</h5>
                <p>Full Stack Java Developer</p>
              </div>
              <div>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star "></i>
              </div>
            </div>
          </div>
          <div className='individualStudent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a consequuntur sapiente, dolorem veniam architecto vero, eius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?</p>
            <div className='nameAndPosition'>
              <div>
                <h5>Omkar Sathe</h5>
                <p>Full Stack Java Developer</p>
              </div>
              <div>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star "></i>
              </div>
            </div>
          </div>
          <div className='individualStudent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a consequuntur sapiente, dolorem veniam architecto vero, eius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?</p>
            <div className='nameAndPosition'>
              <div>
                <h5>Omkar Sathe</h5>
                <p>Full Stack Java Developer</p>
              </div>
              <div>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star "></i>
              </div>
            </div>
          </div>
          <div className='individualStudent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a consequuntur sapiente, dolorem veniam architecto vero, eius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?</p>
            <div className='nameAndPosition'>
              <div>
                <h5>Omkar Sathe</h5>
                <p>Full Stack Java Developer</p>
              </div>
              <div>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star like"></i>
                <i className="fa-solid fa-star "></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home