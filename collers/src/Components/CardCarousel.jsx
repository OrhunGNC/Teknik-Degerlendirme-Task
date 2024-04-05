import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const CardCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <h1 style={{fontWeight:'bold',marginLeft:'10%'}}>Because they love us</h1>
    <div className="yellow"></div>
   
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ marginTop: "10%" }}
      >
        
        <Carousel.Item style={{ marginLeft: "15%" }}>
          <div className="row" style={{ paddingBottom: "5%" }}>
            <div className="col-md-3 col-12">
              <Card style={{ width: "18rem",height:'20rem',borderRadius:'15px' }}>
                <Card.Body>
                  <Card.Title>Zoomerr</Card.Title>
                  <Card.Text>
                    Non risus viverra enim, quis. Eget vitae arcu vivamus sist tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
                  </Card.Text>
                  <Card.Subtitle style={{fontWeight:'bold'}}>Hellen Jummy</Card.Subtitle>
                  <Card.Subtitle style={{fontWeight:'bold'}}>Team Lead</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-12">
              <Card style={{ width: "18rem",height:'20rem',borderRadius:'15px' }}>
                <Card.Body>
                  <Card.Title>Shells</Card.Title>
                  <Card.Text>
                    Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.
                  </Card.Text>
                  <Card.Subtitle style={{fontWeight:'bold'}} >
                    Hellena John
                  </Card.Subtitle>
                  <Card.Subtitle style={{fontWeight:'bold'}}>
                    Co-Founder
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-12">
              <Card style={{ width: "18rem",height:'20rem',borderRadius:'15px' }}>
                <Card.Body>
                  <Card.Title>ArtVenue</Card.Title>
                  <Card.Text>
                    A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.
                  </Card.Text>
                  <Card.Subtitle style={{fontWeight:'bold'}}>
                    David Oshodi
                  </Card.Subtitle>
                  <Card.Subtitle style={{fontWeight:'bold'}}>
                    Manager
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ marginLeft: "15%" }}>
          <div className="row" style={{ paddingBottom: "5%" }}>
            <div className="col-md-3 col-12">
              <Card style={{ width: "18rem",height:'20rem',borderRadius:'15px' }}>
                <Card.Body>
                  <Card.Title>Zoomerr</Card.Title>
                  <Card.Text>
                    Non risus viverra enim, quis. Eget vitae arcu vivamus sist tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
                  </Card.Text>
                  <Card.Subtitle style={{fontWeight:'bold'}}>Hellen Jummy</Card.Subtitle>
                  <Card.Subtitle style={{fontWeight:'bold'}}>Team Lead</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-12">
              <Card style={{ width: "18rem",height:'20rem',borderRadius:'15px' }}>
                <Card.Body>
                  <Card.Title>Shells</Card.Title>
                  <Card.Text>
                    Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.
                  </Card.Text>
                  <Card.Subtitle style={{fontWeight:'bold'}} >
                    Hellena John
                  </Card.Subtitle>
                  <Card.Subtitle style={{fontWeight:'bold'}}>
                    Co-Founder
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-12">
              <Card style={{ width: "18rem",height:'20rem',borderRadius:'15px' }}>
                <Card.Body>
                  <Card.Title>ArtVenue</Card.Title>
                  <Card.Text>
                    A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.
                  </Card.Text>
                  <Card.Subtitle style={{fontWeight:'bold'}}>
                    David Oshodi
                  </Card.Subtitle>
                  <Card.Subtitle style={{fontWeight:'bold'}}>
                    Manager
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <style jsx>
        {`@media (max-width:768px){
        .row>.col-md-3.col-12:not(:first-child){
            display:none;

        }
      }`}</style>
    </>
  );
};

export default CardCarousel;
