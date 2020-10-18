import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from './Modal';


const Group = () => {

    const [show, setShow] = useState(false);
    const handleModal = () => {
        setShow(!show)
    }

    return (
        <>
            <div className="col-sm-6">
                <span ><h3 className="word">Loripsum</h3></span><br />

                <Button variant="success" className="register" button onClick={handleModal} >Register</Button>{' '}
                <Button className="login"> Login </Button>{' '}

            </div>
            <div className="col-sm-6" >
                <Modal handleModal={handleModal} show={show} className="modal-1"/>

            </div>
        </>

    )
}

export default Group;