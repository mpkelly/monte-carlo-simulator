import * as React from "react";
import * as ReactDOM from "react-dom";
import {Line} from "react-chartjs-2";
import {BasicSimulator} from "./simulator/Simulator";
import {Choice, Choices, TriangularDistribution, UniformIntegerDistribution} from "./simulator/Distributions";

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

const choice = new Choices("X", [
  new Choice("A == 1", ()=>1),
  new Choice("A == 2", ()=>2),
], 3);

const samples = new BasicSimulator()
  .run([
      new UniformIntegerDistribution("A", 1,3),
      choice
    ],
    "X", 1000000);

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

console.log(samples);
console.log(average(samples));

// ReactDOM.render(
//   <Line
//     data={data}
//     width={100}
//     height={500}
//     options={{
//       maintainAspectRatio: false
//     }}
//   />,
//   document.getElementById("app")
// );
