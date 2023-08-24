import React from 'react'
import "./Product.css"

const projects = [
  {
    ProjectName : "Web Accounting",
    img : "/img/projects/webAccounting.jpg",
    subHeading : "Web Accounting platform",
    description : "Web-based Accounting solution for general traders,Various Branches of your firm located at various centres can use our software simultaneously. We also provide software which supports your regional language.",
    technologies :["ASP.NET", "MSSQL"]
  },
  {
    ProjectName : "Sugar ERP Solutions",
    img : "/img/projects/sugar.jfif",
    subHeading : "Sugar ERP Solutions",
    description : "Accounting of Tender Stock, Delievery orders to sugar mill, Auto Sale and Purchase bills. Payment of various taxes and much more related to sugar brokers and traders,We also provide software which supports your regional language.",
    technologies :["ASP.NET", "MSSQL"]
  },
  {
    ProjectName : "Foundary ERP System",
    img : "/img/projects/foundary.jpg",
    subHeading : "Foundary ERP System",
    description : "Production planning, Customer and Supplier PO, HR Module, All type of Accounting along with customised MIS reports and much more,We also provide software which supports your regional language.",
    technologies :["ASP.NET", "MSSQL"]
  },
  {
    ProjectName : "Commudity Market",
    img : "/img/projects/commudity.jpg",
    subHeading : "Online Commudity Market",
    description : "Welcome to our online commodity market, a digital platform where buyers and sellers converge to trade a wide array of commodities. Explore seamless transactions, real-time pricing, and a global reach, revolutionizing the way commodities are bought and sold.",
    technologies :["ASP.NET", "MSSQL"]
  }

]


function Project() {
  return (
    <div className='projectDiv'>
      <h1>Our Product's</h1>
      <div className="projects row d-flex justify-content-around">

      {
        projects.map((project)=>{
          return(
            <div className='SingleProjectWrap col-sm-6 col-xl-4 col-12'>

            <div className=" singleProject  position-relative">
              {/* <div style={{  margin: '20px',  backgroundColor: 'rgb(242,251,247)'}}> */}
                <div className='projectHeading'>
                  {project.ProjectName}
                </div>
                <div className="imgDiv d-flex justify-content-center">
                  <img src={project.img} alt="" />
                </div>
                <h5>{project.subHeading}</h5>
                <p>{project.description}</p>
                {/* <div className="technologies row d-flex justify-content-around">
                  {
                    project.technologies.map((tech)=>{
                      return(
                        <p className='col-md-5'>{tech}</p> 
                        )
                      })
                    }
                </div> */}
              {/* </div> */}
            </div>
            </div>
          )
        })
      }



        
      </div>
    </div>
  )
}

export default Project