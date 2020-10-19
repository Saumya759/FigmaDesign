import React from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";

const Group = () => {
  return (
    <>
      <div className="col-sm-6">
        <span>
          <h3 className="word">Loripsum</h3>
        </span>
        <br />
        <Button variant="success" className="register">
          Register
        </Button>{" "}
        <Button className="login"> Login </Button>{" "}
      </div>
      <div>
        <Form className="form">
          <span className="get">Get Started</span>

          <Container>
            <Row className="row1">
              <Col xs={12}>
                <Form.Group controlId="formGroupEmail" className="inp">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="row2">
              <Col xs={12}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="row3">
              <Col xs={12}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="row4">
              <Col xs={12}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Full Address</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={6} className="col1">
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Store Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col xs={6} className="col2">
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Store Type</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <div class="form-group mt-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkbox624"
                  />
                  <label for="checkbox624" class="white-text form-check-label">
                    I agree with terms and conditions
                  </label>
                </div>
              </Col>
            </Row>
          </Container>

          <div class="text-center mb-3 col-md-12" className="sub">
            <button
              type="button"
              class="btn btn-success btn-block btn-rounded z-depth-1"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Group;
