import React from "react";
import logo from "./imgs/cmt-logo-whiteRoundBG-01.png";
import "./App.css";

function ShowScore() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>การเลือกตั้งองค์การนักศึกษา ปีการศึกษา 2020</p>
    </div>
  );
}

export default ShowScore;
