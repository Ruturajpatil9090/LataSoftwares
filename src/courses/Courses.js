import React from 'react'
import "./Courses.css"
function Courses() {
  return (
    <>
      <div className="coursesBanner">
        <img src="/img/courses.jpg" alt="" />
      </div>
      <div className="courses">
        <div className="heading">
          <h5>What would you like to learn ?</h5>
          <h1>Special Courses</h1>
          <span className='spanDiv'></span>
        </div>
        <div className="coursesDiv">
          <div className="individualCourse">
            <img src="/img/javaCourse.png" alt="" />
            <h4>Full Stack Java Developer</h4>
            <p>Minimum 6 Months</p>
          </div>
          <div className="individualCourse">
            <img src="/img/pythonCourse.png" alt="" />
            <h4>Full Stack Python Developer</h4>
            <p>Minimum 6 Months</p>
          </div>
          <div className="individualCourse">
            <img src="/img/javaCourse.png" alt="" />
            <h4>Full Stack Web Developer</h4>
            <p>Minimum 6 Months</p>
          </div>
          <div className="individualCourse">
            <img src="/img/javaCourse.png" alt="" />
            <h4>Full Stack Java Developer</h4>
            <p>Minimum 6 Months</p>
          </div>
          <div className="individualCourse">
            <img src="/img/javaCourse.png" alt="" />
            <h4>Full Stack Java Developer</h4>
            <p>Minimum 6 Months</p>
          </div>
          <div className="individualCourse">
            <img src="/img/javaCourse.png" alt="" />
            <h4>Full Stack Java Developer</h4>
            <p>Minimum 6 Months</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses