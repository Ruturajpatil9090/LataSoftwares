import React from "react";
import "../Testimonials/Testimonials.css"
import Gautam from "../../assests/Gautam.jpg";
import Navkar from "../../assests/navkari.jpg"
import Jk from "../../assests/jk.jpg"
const Testimonials = () => {
  return (
    <>
      
      <div className="clients">
        <div className="advanceFeature">
          <div className="infoDiv">
            <div className="heading">
            
              <h5>
                <span className="headSpan"></span>JK Group Kolhapur
                
                
              </h5>
            </div>
            <br></br>
            <br></br>
            <div className="Points">
              <div className="subPoint">
                <div className="test">
                  <img src={Jk } alt="" />
                  
                </div>
                <br></br>
               <h5>Uppal Shah</h5> .
                <br></br>
                <p>Since 1994 we have been provided software development by Lata Software Consultancy, with their intact professionalism, prompt response, courteous service. The constant upgradations with new technologies has always brought our work at great ease. We are glad to have been collaborated with this dynamic team of Mr.Pankaj Dixit! Wishing you more and more success.</p>
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
              <div className="test">
                  <img src={Navkar} alt="" style={{"Width":"200px"}} />
                  
                </div>
                <br></br>
                <h5>Amit Jain</h5>
                <br></br>
                <p>The Sugar software provided to us by M/s Lata Software Consultancy is as per our requirements. They are also updating / making modifications in the software as per our suggestions. The post installation service provided by them excellent. We are very much happy with their service to us. We expect to continue relations with them in future also. </p>
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
                <div className="test">
                  <img src={Gautam} alt="" />
                  
                </div>
                <br></br>
                <h5>Vinit Shah</h5>
                <br></br>
                <p>We are using the ERP software of M/s Lata Software Consultancy since many years. The software is very much comprehensive; which has made our office paperless. We are using this software in our two offices (One at Kolhapur and other at Pune). Since their software is web based; it gives effect as if we are working at one place. We are extremely happy with their service.  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
