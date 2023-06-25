import React from 'react'

const projects = [
  {
    ProjectName : "OTT Platform",
    img : "/img/projects/netflix.jpeg",
    subHeading : "Build seamless video streaming OTT platform like Netflix, Amazon Prime.",
    description : "Make platform to search for movies, favorite TV shows. Enable user to search their favorite shows and add functionalities to perform crud operation.",
    technologies :["MongoDB", "Express JS", "React JS", "Node JS"]
  },
  {
    ProjectName : "OTT Platform",
    img : "/img/projects/netflix.jpeg",
    subHeading : "Build seamless video streaming OTT platform like Netflix, Amazon Prime.",
    description : "Make platform to search for movies, favorite TV shows. Enable user to search their favorite shows and add functionalities to perform crud operation.",
    technologies :["MongoDB", "Express JS", "React JS", "Node JS"]
  },
  {
    ProjectName : "OTT Platform",
    img : "/img/projects/netflix.jpeg",
    subHeading : "Build seamless video streaming OTT platform like Netflix, Amazon Prime.",
    description : "Make platform to search for movies, favorite TV shows. Enable user to search their favorite shows and add functionalities to perform crud operation.",
    technologies :["MongoDB", "Express JS", "React JS", "Node JS"]
  },
]


function Project() {
  return (
    <div className='projectDiv'>
      <h1>Projects</h1>
      <h5>What's is great training and internship program without hands-on project based learning?</h5>
      <p>When hiring tech professionals, companies looking for candidate having project experience and here at EdExcel.Ai, we actual work like experience by building real products, like professional engineers.</p>
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
                <div className="technologies row d-flex justify-content-around">
                  {
                    project.technologies.map((tech)=>{
                      return(
                        <p className='col-md-5'>{tech}</p> 
                        )
                      })
                    }
                </div>
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