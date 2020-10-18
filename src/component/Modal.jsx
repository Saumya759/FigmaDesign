import React from "react";
import {  Modal,Container, Row, Col} from 'react-bootstrap';



const Popup = ({ handleModal, show}) => {
    return (
        <>
            <Modal show={show} onHide={handleModal}>
                <Modal.Header className="header">
                    <Modal.Title className="title">Get Started</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                    <Row className="row1">
                    <Col xs={1}>FullName</Col>
                    </Row>
                    <Row className="row2">
                    <Col xs={1}>Email</Col>
                    </Row>
                    <Row className="row3">
                    <Col xs={1}>PhoneNumber</Col>
                    </Row>
                    <Row className="row4">
                    <Col xs={1}>FullAddress</Col>
                    </Row>
                    </Container>
                    <Container>
                    <Row>
                    <Col xs={6} className="col1">StoreName</Col>
                    <Col xs={6} className="col2">StoreType</Col>
                    </Row>
                    </Container>
                
                <div class="modal-body mx-3">
                    <div class="md-form mb-5">
                        <div class="form-group mt-4">
                            <input class="form-check-input" type="checkbox" id="checkbox624"/>
                            <label for="checkbox624" class="white-text form-check-label">I agree with terms and conditions</label>
                         </div>
                         {/* </div> */}
                    </div>
                    <div class="text-center mb-3 col-md-12" className="submit">
              <button type="button" class="btn btn-success btn-block btn-rounded z-depth-1">Submit</button>
            </div>
                </div>
                </Modal.Body>
                        <div class="cursor-pointer">
                            {/* <Modal.Footer >
                                <div className="cancel">
                                     <button  onClick={handleModal}>
                                          Cancel</button></div>
                                <div className="done">
                                </div>
                            </Modal.Footer> */}
                        </div>
            </Modal>
        </>
    );
}
export default Popup;