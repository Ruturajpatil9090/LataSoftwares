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
              <option value="">html</option>
              <option value="">java</option>
              <option value="">python</option>
            </select>
            <input required="" type="text" className="input" placeholder='Any Query'/>
            <button>SEND MASSAGE</button>
            </form>
          </div>
          <div className="infoDiv">
            <div className="singleInfo">
              <i className="fa-solid fa-phone-volume"></i>
              <h4>Call Us On</h4>
              <p>9845997456</p>
            </div>
            <div className="singleInfo">
              <i className="fa-solid fa-envelope"></i>
              <h4>Email Us</h4>
              <p>omkar@gmail.com</p>
            </div>
            <div className="singleInfo">
              <i className="fa-brands fa-whatsapp"></i>
              <h4>Whatsapp Us</h4>
              <p>9845698521</p>
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