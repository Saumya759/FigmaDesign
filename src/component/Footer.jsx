import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Play from "../assets/google.svg";
import App from "../assets/apple.svg";
import Face from "../assets/facebook.svg";

const Foot = () => {
  
  return (
    <>
      <Container className="footer">
        <Row>
            <Col>
            
          <Col xs={6} md={3}>
              <div>
            SITENAME
            </div>
           <div>
           <ul>
                <li>Title One</li>
                <li>Title Two</li>
                <li>Title Three</li>
                <li>Title Four</li>
                <li>Title Five</li></ul></div>
          </Col>

          <Col xs={6} md={3}>
            INFORMATION
            <ul>
            <li>Category One</li>
            <li>Category Two</li>
            <li>Category Three</li>
            <li>Category Four</li>
            <li>Category Five</li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            CATEGORY
            <ul>
            <li>Category One</li>
            <li>Category Two</li>
            <li>Category Three</li>
            <li>Category Four</li>
            <li>Category Five</li>
            </ul>
          </Col>
          <Col xs={6} md={3}></Col>
            <Row>
        
                CONTACT
                <span className="contact"> 
                <li>help@sitename.com</li>
                <li>Hotlinex ++0012346</li>
                </span>
             

              <Col xs={6} >
                <Row><img src={Play} className="facebook"/></Row>
                <br />
                <Row><img src={App} className="facebook"/></Row>
                <br />
                <Row><img src={Face} className="facebook"/> </Row>
                <br />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
      <p className="foot">@2020. ALL RIGHTS RESERVED</p>
      </Container>
      
    </>
  );
};

export default Foot;
