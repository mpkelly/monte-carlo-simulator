import * as React from "react";
import * as ReactDOM from "react-dom";
import {Line} from "react-chartjs-2";
import {BasicSimulator} from "./simulator/Simulator";
import {TriangularDistribution} from "./simulator/Distributions";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const samples = new BasicSimulator()
  .run([new TriangularDistribution("X", 1,5,10)], "X", 3);

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

console.log(samples);
console.log(average(samples));

ReactDOM.render(
  <Line
    data={data}
    width={100}
    height={500}
    options={{
      maintainAspectRatio: false
    }}
  />,
  document.getElementById("app")
);
