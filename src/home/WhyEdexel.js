import React from 'react'
import "./Home.css"

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
    }
  
  ]


const WhyEdExcel = () => {
  return (
    <>
    <div className="whyUs">
        <h1>Lata Software Consultancy</h1>
        <h5>The most important part of Learn New Things is proper training.</h5>
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
    </>
  )
}

export default WhyEdExcel