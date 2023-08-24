import React,{useState} from 'react'
import "./Contact.css"
import {submitFormData} from "../../Services/api"
function Contact() {

  const initialData = {
    name: '',
    email: '',
    mobile: '',
    position: '',
    query: ''
  }

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    //console.log(formData);
    try {
      const response = await submitFormData(formData);
      console.log('Data sent successfully:', response.data);
      setFormData(initialData)
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
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
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            className="input"
            placeholder='Name'
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete='off'
          />
          <input
            required
            type="email"
            className="input"
            placeholder='Email'
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete='off'
          />
          <input
            required
            type="text"
            className="input"
            placeholder='Mobile'
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            autoComplete='off'
          />
          <select
            name="position"
            className='selectCourse'
            value={formData.position}
            onChange={handleChange}
            autoComplete='off'
          >
            <option value="" disabled>Select Position</option>
            <option value="JavaScript Developer">JavaScript Developer</option>
            <option value="NodeJs Intern">NodeJs Intern</option>
            <option value="Jr Reactjs Developer">Jr Reactjs Developer</option>
            <option value="Java Developer">Java Developer</option>
            <option value="Other">Other</option>
          </select>
          <input
            required
            type="text"
            className="input"
            placeholder='Any Query'
            name="query"
            value={formData.query}
            onChange={handleChange}
            autoComplete='off'
          />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
          <div className="infoDiv">
            <div className="singleInfo">
              <i className="fa-solid fa-phone-volume"></i>
              <h4>Call Us On</h4>
              <a href="tel:7058919412">+91 8625044832</a>
            </div>
            <div className="singleInfo">
              <i className="fa-solid fa-envelope"></i>
              <h4>Email Us</h4>
              <a href="mailto: satheomkar143@gmail.com" target='_blank'>support@latasoftware.in</a>
            </div>
            <div className="singleInfo">
              <i className="fa-brands fa-whatsapp"></i>
              <h4>Whatsapp Us</h4>
              <a href="https://api.whatsapp.com/send?phone=8625044832&text=Hi There." target='_blank'>+91 8625044832</a>
            </div>
            <div className="singleInfo">
              <i className="fa-solid fa-location-dot"></i>
              <h4>Our Location</h4>
              <p>Minakshi Apartment, Rajarampuri 13th Lane, Kolhapur, 0231-2536688</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact