import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
      <footer>
        <div className="footerContent">
          <div className="footerLogo">
            <img src="/img/companyLogo.png" alt="" />
            <h3>EdExcel.Ai</h3>
          </div>
          <div className="footerAddress">
            <p><i className="fa-solid fa-location-dot"></i> Office No. 454, Shanivar Peth, pune, 416256</p>
            <p><i className="fa-solid fa-phone"></i> 5646545465</p>
            <p><i className="fa-solid fa-envelope"></i> admin@EdExcel.com</p>
          </div>
          <div className="footerConnect">
            <p>Follow Us</p>
            <div>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <p className='copyWrite'>Copyright © 2023 All rights reserved | EdExcel.Ai</p>
      </footer>

      <div className='SocialLinks'>
        <ul>
          <li><a href="mailto: satheomkar143@gmail.com" target='_blank'><i className="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
          <li><a href="https://api.whatsapp.com/send?phone=7058919412&text=Hi There." target='_blank'><i className="fa-brands fa-whatsapp"></i></a></li>
          <li><a href="tel:7058919412"><i className="fa-solid fa-phone " target='_blank' ></i></a></li>
        </ul>
      </div>
    </>
  )
}

export default Footer