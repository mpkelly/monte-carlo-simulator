import * as React from "react";
import * as ReactDOM from "react-dom";
import {BasicSimulator} from "./simulator/Simulator";
import {NormalDistribution} from "./simulator/Distributions";

const samples = new BasicSimulator()
  .run([
      new NormalDistribution("A", 50, 1),
    ],
    "A", 10000);

ReactDOM.render(
  <div>{samples}</div>,
  document.getElementById("app")
);
