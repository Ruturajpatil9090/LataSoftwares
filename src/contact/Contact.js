import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <>
      <div className='contactBanner'>
        <img src="/img/contactus.jpg" alt="" />
      </div>
      <div className='contactDiv'>
        <div className="inTouch">
          <h1>Get In Touch With Us</h1>
          <span className='spanDiv'></span>
        </div>
        <div className="formAndInfo">
          <div className='formDiv'>
            <form action="">
            <input required="" type="text" className="input" placeholder='Name'/>
            <input required="" type="email" className="input" placeholder='Email'/>
            <input required="" type="text" className="input" placeholder='Mobile'/>
            <select name="" className='selectCourse'>
              <option value="" selected disabled>select course</option>
              <option value="">Full Stack Java Developer</option>
              <option value="">Full Stack Python Developer</option>
              <option value="">Full Stack Web Developer</option>
              <option value="">Software Testing</option>
              <option value="">AI and Data Science</option>
              <option value="">Business Intelligence & Data Analyst</option>
              <option value="">Other</option>
            </select>
            <input required="" type="text" className="input" placeholder='Any Query'/>
            <button>SEND MESSAGE</button>
            </form>
          </div>
          <div className="infoDiv">
            <div className="singleInfo">
              <i className="fa-solid fa-phone-volume"></i>
              <h4>Call Us On</h4>
              <a href="tel:7058919412">9845997456</a>
            </div>
            <div className="singleInfo">
              <i className="fa-solid fa-envelope"></i>
              <h4>Email Us</h4>
              <a href="mailto: satheomkar143@gmail.com" target='_blank'>omkar@gmail.com</a>
            </div>
            <div className="singleInfo">
              <i className="fa-brands fa-whatsapp"></i>
              <h4>Whatsapp Us</h4>
              <a href="https://api.whatsapp.com/send?phone=7058919412&text=Hi There." target='_blank'>9845698521</a>
            </div>
            <div className="singleInfo">
              <i className="fa-solid fa-location-dot"></i>
              <h4>Our Location</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores odio .</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact