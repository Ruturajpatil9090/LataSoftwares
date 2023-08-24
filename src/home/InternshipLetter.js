import React from 'react'

function InternshipLetter() {
  return (
    <div className='InternshipLetterDiv'>
      <h1>Internship Letter With Course Completion Certificate</h1>
      <div className="contentAndCertificate row">
        <div className="content col-md-6">
          <h5 className='text-center text-md-start'>Lata Software Consultany Industry Recognized Certificate & Internship Letter </h5>
          <p>We will provide certificate and internship letter after successfully completion of your training. </p>
          <h5 className='text-center text-md-start'>Sharable And Credible</h5>
          <p>You can add Lata Software Consultany certificate and letter to your linkedIn profile, portfolio website, resume and other social media platform. We will provide you verified credential.</p>
        </div>
        <div className="certificate col-md-6">
          <div className='row'>
            
          <div className="course col-md-6 col-6 d-flex justify-content-center">
            <img src="/img/certificate/course.png" alt="" />
          </div>
          <div className="internship col-md-6 col-6 d-flex justify-content-center">
            <img src="/img/certificate/internship.jpg" alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InternshipLetter