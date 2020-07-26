import React from "react";
import { Button, Radio } from "element-react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Election from "./Election";

function CheckId() {
  const [stdType, setStdType] = useState("");
  const [stdInput, setStdInput] = useState("");
  const [stdData, setStdData] = useState([]);

  const checkInputId = (e) => {
    setStdInput(e.target.value);
    console.log(stdInput);
  };
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios(
  //         `https://cmt-election.herokuapp.com/api/metro/`
  //       );

  //       setStdData(result.data);
  //     };

  //     fetchData();
  //   }, []);

  //   useEffect(() => {
  //     fetch(`https://cmt-election.herokuapp.com/api/std/6130001/C`)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((responseData) => {
  //         console.log(responseData.response);
  //         let data = [];
  //         for (const key in responseData) {
  //           data.push({
  //             name: responseData.response,
  //             class: responseData.class,
  //           });
  //         }
  //         setStdData(data);
  //       });
  //   }, []);

  const sendId = (id) => {
    axios(`https://cmt-election.herokuapp.com/api/std/${id}/${stdType}`)
      .then((res) => {
        console.log("res", res.data.response.name);
        let data = [];
        for (const key in res.data) {
          data.push({
            name: res.data.response.name,
            class: res.data.response.class,
          });
        }
        setStdData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(stdData);
  console.log(stdType);
  return (
    <div className="form-1">
      <div className="radio-group">
        <Radio
          className="radio-label"
          value="C"
          checked={stdType.value === "C"}
          onChange={() => setStdType("C")}
        >
          พาณิชย์
        </Radio>
        <Radio
          className="radio-label"
          value="M"
          checked={stdType.value === "M"}
          onChange={() => setStdType("M")}
        >
          ช่าง
        </Radio>
      </div>

      <input
        type="text"
        placeholder="กรุณากรอกรหัสนักศึกษา.."
        className="input-id"
        maxLength={7}
        value={stdInput}
        onChange={checkInputId}
        required
      />
      <Link
        to="/Election"
        type="primary"
        onClick={() => sendId(stdInput)}
        disabled={stdInput.length < 7}
      >
        ยืนยัน
      </Link>
      {/* <Election stdData={stdData} /> */}
    </div>
  );
}

export default CheckId;
