import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import test from "./test.js";

function Garage(props) {
  return (
    <div>
      <button onClick={props.btnclick}>test</button>
    </div>
  );
}

ReactDOM.render(
  <Garage
    btnclick={function() {
      alert(1);
    }}
  />,
  document.getElementById("root")
);
