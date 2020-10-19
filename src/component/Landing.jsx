import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../assets/lori.png";
import Pic1 from "../assets/Path.svg";
import Pic2 from "../assets/Path2.svg";
import Pic3 from "../assets/Path3.svg";
import Rectangle from "./Rectangle";

const Body = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img className="icon1" src={Icon} />
            <br />
            Loripsum
          </Col>
          <Col>
            <img className="img1" src={Pic1} />
          </Col>
        </Row>

        <Row>
          <Col>
            <img className="img2" src={Pic2} />
          </Col>
          <Col>
            <img className="icon2" src={Icon} />
            <br />
            Loripsum
          </Col>
        </Row>

        <Row>
          <Col>
            <img className="icon3" src={Icon} />
            <br />
            Loripsum
          </Col>
          <Col>
            <img className="img3" src={Pic3} />
          </Col>
        </Row>
      </Container>
      <Rectangle />
    </>
  );
};
export default Body;
