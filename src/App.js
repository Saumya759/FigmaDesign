import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
// import Modal from './component/Modal';
import car from './assets/head.png';
import Label from './component/Label';

const App = () => {
  

  return (
    <>
     
      <div className="bg_img row no-gutters " style={{ backgroundImage:`url(${car})` }} >
        <Navbar/>
       <Label/>
       {/* <Modal handleModal={handleModal} show={show} /> */}

      </div>
      
    </>

  );
}

export default App;
