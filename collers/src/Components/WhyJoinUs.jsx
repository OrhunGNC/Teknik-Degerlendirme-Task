import React from "react";
import { MdDone } from "react-icons/md";
import Button from "react-bootstrap/esm/Button";

const WhyJoinUs = () => {
  return (
    <div className="board">
      <div className="row" style={{justifyContent:'center'}}>
        <div className="col-lg-6 col-md-4 col-sm-12 col-12" style={{textAlign:'left'}}>
          <h1 style={{ color: "#0f172a", fontWeight: "bold",marginTop:'10%' ,marginLeft:'3%',marginBottom:'3%'}}>Why join us</h1>
          <p style={{fontWeight:'bold',marginLeft:'3%'}}>
            <MdDone /> Est et in pharetra magna adipiscing ornare aliquam.
          </p>
          <p style={{fontWeight:'bold',marginLeft:'3%'}}>
            <MdDone /> Tellus arcu sed consequat ac velit ut eu blandit.
          </p>
          <p style={{fontWeight:'bold',marginLeft:'3%'}}>
            <MdDone /> Ullamcorper ornare in et egestas dolor orci.
          </p>
          <p className='buttons' style={{fontWeight:'bold',marginLeft:'3%'}}> <Button variant="outline-success" style={{color:'brown',borderColor:'brown',fontWeight:'bold',marginTop:'3%'}}>Sign up now</Button></p>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12 col-12" style={{textAlign:'center'}}>
          <div className="video-container" style={{marginTop:'5%'}}>
            <video controls style={{marginTop:'10%'}}>
              <source src="/videos/sneakers.mp4" type="video/mp4"  />
              Your browser does not support the video tag.
            </video>
            <div className="square" ></div>
            <div className="circle" ></div>
            <div className="circlee"></div>
            <div className="squaree"></div>
            <div className="squaree2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
