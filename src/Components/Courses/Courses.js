import React from 'react'
import "./Courses.css"

const whyUs = [
  {
    className : "fa-solid fa-c",
    heading : "C & C++",
    
  },
  {
    className : "fa-brands fa-python",
    heading : "Python",
    
  },
  
  {
    className : "fa-brands fa-square-js",
    heading : "JavaScript",
   
  },
  {
    className : "fa-brands fa-node",
    heading : "NodeJS",
    
  },
  {
    className : "fa-brands fa-angular",
    heading : "Angular",
    
  },
  {
    className : "fa-brands fa-github",
    heading : "Git",
    description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  },
  {
    className : "fa-brands fa-java",
    heading : "Java",
    description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  },
  {
    className : "fa-brands fa-react",
    heading : "ReactJs",
    description : "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?"
  }

]



function Courses() {
const handleClick=(url)=>{
 window.open("https://www.youtube.com/",'_blank')
}

  return (
    <>

<div className="whyUs">
        <h1>All Courses</h1>
        
        <div className='whyUsContain'>

          {
            whyUs.map((data)=>{
              return (
                <div className="singleContain">
                  <div className='logoDiv'>
                    <i className={data.className}></i> 
                  </div>
                  <h3>{data.heading}</h3>
                  {/* <p>{data.description}</p> */}
                  
                </div>
                
              )
              
            })
            
          }
          <br></br>
          <br></br>
          <div  className='button'>
          <button onClick={handleClick} className='btn btn-danger'>Apply Now</button>
          </div>
    
        </div>
      </div>
    
    </>
  )
}

export default Courses