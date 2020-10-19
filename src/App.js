import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import car from "./assets/head.png";
import Label from "./component/Label";
import Landing from "./component/Landing";

const App = () => {
  return (
    <>
      <div
        className="bg_img row no-gutters "
        style={{ backgroundImage: `url(${car})` }}
      >
        <Navbar />
        <Label />
      </div>
      <Landing />
    </>
  );
};

export default App;
