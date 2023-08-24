import React from "react";
import "../Testimonials/Testimonials.css"
import Ashirwad from "../../assests/Ashirwad.jpg";
import gstc from "../../assests/gstc.jpg"
import Navkar from "../../assests/navkar.jpg"
const Testimonials = () => {
  return (
    <>
      
      <div className="clients">
        <div className="advanceFeature">
          <div className="infoDiv">
            <div className="heading">
            
              <h5>
                <span className="headSpan"></span>Bhavani Iron Industries Pvt Ltd,Kolhapur
              </h5>
            </div>
            <br></br>
            <br></br>
            <div className="Points">
              <div className="subPoint">
                <div className="test">
                  <img src={Ashirwad} alt="" />
                </div>
                <p>Upon successful completion of your internship, we will provide you with an internship completion letter. This letter will acknowledge your achievements, highlight your contributions, and serve as a testament to the skills and experience you've gained during your time with us.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="advanceFeature">
          <div className="infoDiv">
            <div className="heading">
              <h5>
                <span className="headSpan"></span>Bhavani Iron Industries Pvt Ltd,Kolhapur
              </h5>
            </div>
            <br></br>
            <br></br>
            <div className="Points">
              <div className="subPoint">
                <div className="test">
                  <img src={gstc} alt="" />
                </div>
                <p>Upon successful completion of your internship, we will provide you with an internship completion letter. This letter will acknowledge your achievements, highlight your contributions, and serve as a testament to the skills and experience you've gained during your time with us.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="advanceFeature">
          <div className="infoDiv">
            <div className="heading">
              <h5>
                <span className="headSpan"></span>Bhavani Iron Industries Pvt Ltd,Kolhapur
              </h5>
            </div>
            <br></br>
            <br></br>
            <div className="Points">
              <div className="subPoint">
                <div className="test">
                  <img src={Navkar} alt="" />
                </div>
                <p>Upon successful completion of your internship, we will provide you with an internship completion letter. This letter will acknowledge your achievements, highlight your contributions, and serve as a testament to the skills and experience you've gained during your time with us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
