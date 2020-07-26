import React from "react";
import "./App.css";
import { Button } from "element-react";
import party01 from "./imgs/partys/Party01.jpg";
import party02 from "./imgs/partys/Party02.jpg";
import party03 from "./imgs/partys/Party03.jpg";
import party04 from "./imgs/partys/Party04.jpg";
import party05 from "./imgs/partys/Party05.jpg";
import party06 from "./imgs/partys/Party06.jpg";
import party07 from "./imgs/partys/Party07.jpg";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

const confirm = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.value) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};

function Election(props) {
  console.log(props.stdData);
  const imgSrc = [
    party01,
    party02,
    party03,
    party04,
    party05,
    party06,
    party07,
  ];
  return (
    <div className="el-page-wrap">
      <div className="student-info">
        <p>
          <span className="texth">ID: </span>a
          <span className="texth"> Name: </span>a
          <span className="texth"> Class: </span>IT-201
        </p>
      </div>
      <form action="">
        <h1 className="form-title">เลือก</h1>
        <div className="show-party">
          {imgSrc.map((value, index) => {
            return (
              <label key={index} className="list-party">
                <input
                  type="radio"
                  name="test"
                  value={index + 1}
                  alt={"partys image"}
                />
                <img src={value} />
              </label>
            );
          })}
        </div>
        <Button onClick={confirm}>เลือก</Button>
      </form>
    </div>
  );
}

export default Election;
