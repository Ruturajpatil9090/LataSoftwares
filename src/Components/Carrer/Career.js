import React from 'react'
import "./Career.css"
import { useNavigate } from 'react-router-dom'

const whyUs = [
  // {
  //   className : "fa-solid fa-c",
  //   heading : "C & C++",
    
  // },
  // {
  //   className : "fa-brands fa-python",
  //   heading : "Python",
    
  // },
  
  {
    className : "fa-brands fa-square-js",
    heading : "JavaScript Developer",
    Experience:"0-2 years/Fresher's",
    description:"HTML, CSS, Javascript jQuery, Angular js/2 Bootstrap,PHP"
   
  },
  {
    className : "fa-brands fa-node",
    heading : "NodeJS Intern",
    Experience:"0.6 years/Fresher's",
    description : "Basic's of JavaScript,ExpressJs,NodeJs And MongoDB"
    
  },
  // {
  //   className : "fa-brands fa-angular",
  //   heading : "Angular",
    
  // },
  // {
  //   className : "fa-brands fa-github",
  //   heading : "Git",
  //   description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  // },
  {
    className : "fa-brands fa-react",
    heading : "Jr.ReactJs Developer",
    Experience:"0-2 years/Fresher's",
    description:"HTML, CSS, Javascript,Reactjs,Redux"
  },
  {
    className : "fa-brands fa-java",
    heading : "Java Developer",
    Experience:"0-2 years/Fresher's",
    description : "Core java and J2EE Technology Spring and Struts frameworks HTML,CSS,JSP and Servlet"
  },


]



function Career() {
const handleClick=(url)=>{
  navigate("/contact")
}

const navigate = useNavigate()
  return (
    <>

<div className="whyUs">
        <h1>Current Opening's</h1>
        
        <div className='whyUsContain'>

          {
            whyUs.map((data)=>{
              return (
                <div className="singleContain">
                  <div className='logoDiv'>
                    <i className={data.className}></i> 
                  </div>
                  <h3>{data.heading}</h3>
                  <h6>{data.Experience}</h6>
                 <p>{data.description}</p> 
                 <div  className='button'>
          <button onClick={handleClick} className='btn btn-danger'>Apply Now</button>
          </div>
                  
                </div>
                
              )
              
            })
            
          }
          <br></br>
          <br></br>
          {/* <div  className='button'>
          <button onClick={handleClick} className='btn btn-danger'>Apply Now</button>
          </div> */}
    
        </div>
      </div>
    
    </>
  )
}

export default Career;