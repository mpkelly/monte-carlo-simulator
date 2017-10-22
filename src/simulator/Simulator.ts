import {Parser} from "expr-eval";
import {Distribution} from "./Distributions";

export interface Simulator {
  run(variables: Distribution[], sampleExpression:string, iterations:number): number[];
}

export class BasicSimulator implements Simulator {

  run (variables: Distribution[], sampleExpression:string, iterations: number): number[] {
    const results:number[] = [];
    const expression = new Parser().parse(sampleExpression);
    let i = 0;
    while (i++ < iterations) {
      const samples:any = {};
      for (let variable of variables) {
        samples[variable.name] = variable.sample();
      }
      results.push(
        expression.evaluate(samples)
      );
    }
    return results;
  }
}