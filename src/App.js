import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ShowScore from "./ShowScore";
import CheckId from "./CheckId";
import Election from "./Election";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShowScore />
        <Route exact path="/">
          <CheckId />
        </Route>
        <Route path="/CheckId">
          <CheckId />
        </Route>
        <Route path="/Election">
          <Election />
        </Route>
      </header>
    </div>
  );
}

export default App;
