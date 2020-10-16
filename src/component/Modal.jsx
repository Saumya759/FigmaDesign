import React from "react";
import {  Modal} from 'react-bootstrap';


const Popup = ({ handleModal, show}) => {
    return (
        <>
            <Modal show={show} onHide={handleModal}>
                <Modal.Header>
                    <Modal.Title>Get Started</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
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