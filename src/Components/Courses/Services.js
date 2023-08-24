import React from "react";
import "./Services.css";
//import "../../home/Home.css"
import Ashirwad from "../../assests/Ashirwad.jpg";
import gstc from "../../assests/gstc.jpg"
import Navkar from "../../assests/navkar.jpg"

const whyUs = [
  {
    className: "fa-brands fa-react",
    heading: "ReactJs",
    description:
      "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?",
  },
  {
    className: "fa-brands fa-square-js",
    heading: "JavaScript",
  },
  {
    className: "fa-brands fa-node",
    heading: "NodeJS",
  },
  {
    className: "fa-brands fa-java",
    heading: "Java",
    description:
      "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?",
  },
  {
    className: "fa-solid fa-c",
    heading: "C & C++",
  },
  {
    className: "fa-brands fa-python",
    heading: "Python",
  },

  
 
  {
    className: "fa-brands fa-angular",
    heading: "Angular",
  },
  {
    className: "fa-brands fa-github",
    heading: "Git",
    description:
      "Lorem ipsum dolor sit aeius quam similique ex totam! Tenetur nostrum praesentium fuga porro aut totam officia neque?",
  },
  
  
];

function Services() {
  const handleClick = (url) => {
    window.open("https://www.youtube.com/", "_blank");
  };

  return (
    <>
      <div className="whyUs">
        <h1>Our Service's</h1>
        <h3>
          We offer Customized Solutions for integrating your various processes
          under one platform. All needs of firms in respect of accounting, Human
          Resources, Taxation, MIS reports and any other specific requirements
          are fulfilled by our software in which duplicate data entry is
          avoided. You can also have maker / checker arrangement. In effect, you
          can grow your business without increasing your staff. In nutshell,
          this is customize ERP without unnecessary data entry and controls of
          standard ERP. Migration from your older platform to our platform is
          also very smooth as we use to aid customers in migrating data to our
          software. This eliminates the need of relaunching of old master data
          and consequential headache. Your various branches can be seamlessly
          integrated using our web application. You can also operate this
          software from anywhere in the world.
        </h3>

        <h1>Our Client's</h1>
<div className="clients" >
<div className="advanceFeature">
          <div className="infoDiv">
            <div className="heading">
              <h5>
                <span className="headSpan"></span>Aashirwad
              </h5>
            </div>
            <br></br>
            <br></br>
            <div className="Points">
              <div className="subPoint">
                <div className="image">
                  <img src={Ashirwad} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="advanceFeature">
          <div className="infoDiv">
            <div className="heading">
              <h5>
                <span className="headSpan"></span>Gautam Sugar Trading Company
              </h5>
            </div>
            <br></br>
            <br></br>
            <div className="Points">
              <div className="subPoint">
                <div className="image">
                  <img src={gstc} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="advanceFeature">
          <div className="infoDiv">
            <div className="heading">
              <h5>
                <span className="headSpan"></span>Navkar Traders
              </h5>
            </div>
            <br></br>
            <br></br>
            <div className="Points">
              <div className="subPoint">
                <div className="image">
                  <img src={Navkar} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
</div>


        <br></br>
        <br></br>
        <br></br>

        <h1>See Our Best Work</h1>

        <div className="whyUsContain">
          {whyUs.map((data) => {
            return (
              <div className="singleContain">
                <div className="logoDiv">
                  <i className={data.className}></i>
                </div>
                <h3>{data.heading}</h3>
                {/* <p>{data.description}</p> */}
              </div>
            );
          })}
          <br></br>
          <br></br>
          {/* <div  className='button'>
          <button onClick={handleClick} className='btn btn-danger'>Apply Now</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Services;
