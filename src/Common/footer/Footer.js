import React from 'react'
import "./Footer.css"
import logo from "../../assests/companylogo.jpg"

function Footer() {

  const handleFacebook=(url)=>{
    window.open("https://www.facebook.com/login/",'_blank')

  }
const handleInstagram=(url)=>{
  window.open("https://www.instagram.com/accounts/login/",'_blank')
}

const handleLinkedin=(url)=>{
  window.open("https://www.linkedin.com/login/",'_blank')
}

const handleTwitter=(url)=>{
  window.open("https://twitter.com/i/flow/login",'_blank')
}

  return (
    <>
      <footer>
        <div className="footerContent">
          <div className="footerLogo">
            <img src={logo} alt="" />
            <h3>Lata Software Consultancy</h3>
          </div>
          <div className="footerAddress">
          <i className="fa-solid fa-location-dot"></i>
            Minakshi Apartment, Rajarampuri 13th Lane, Kolhapur, 0231-2536688
            <br></br>
            <br></br>
            <i className="fa-solid fa-phone"></i>+91 8625044832
            <br></br>
            <br></br>
            <i className="fa-solid fa-envelope"></i> support@latasoftware.in
          </div>
          <div className="footerConnect">
            <p>Follow Us</p>
            <div>
              <i onClick={handleFacebook} className="fa-brands fa-facebook"></i>
              <i onClick={handleInstagram} className="fa-brands fa-instagram"></i>
              <i onClick={handleLinkedin} className="fa-brands fa-linkedin"></i>
              <i onClick={handleTwitter} className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <p className='copyWrite'>Copyright © 2023 All rights reserved | Lata Software Consultancy</p>
      </footer>

      <div className='SocialLinks'>
        <ul>
          <li><a href="mailto:support@latasoftware.in" target='_blank'><i className="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
          <li><a href="https://api.whatsapp.com/send?phone=8625044832&text=Hi There." target='_blank'><i className="fa-brands fa-whatsapp"></i></a></li>
          <li><a href="tel:8625044832"><i className="fa-solid fa-phone " target='_blank' ></i></a></li>
        </ul>
      </div>
    </>
  )
}

export default Footer