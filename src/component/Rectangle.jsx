import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pic1 from "../assets/layer1.svg";
import Pic2 from "../assets/layer2.svg";
import Pic3 from "../assets/layer3.svg";
import Pic4 from "../assets/group.png";
import Footer from "./Footer";

const Land = () => {
  return (
    <>
      <Container className="rect">
        <Row className="above1">
          <Col xs={12}>
            <span> How it works</span>
          </Col>
        </Row>

        <Row className="circle">
          <Col xs={6} md={4}>
            <img className="w-40" src={Pic1} />
            <br />
            Loripsum
          </Col>
          <Col xs={6} md={4}>
            <img className="w-40" src={Pic2} />
            <br />
            Loripsum
          </Col>
          <Col xs={6} md={4}>
            <img className="w-40" src={Pic3} />
            <br />
            Loripsum
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="p-0">
            <div>
              <img className="w-100 bg8" src={Pic4} />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Land;
