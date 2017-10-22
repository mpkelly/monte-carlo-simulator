import * as jStat from "jstat";

export interface Distribution {
  name:string;
  sample():number;
}

export class ConstantDistriubtion implements Distribution {

  constructor(public readonly name: string, public readonly value:number){

  }

  sample():number {
    return this.value;
  }
}

export class TriangularDistribution implements Distribution {

  private distribution:any;

  constructor(public name: string, public readonly low:number, public readonly mid:number, public readonly high:number){
    this.distribution = jStat.triangular(low, mid, high);
  }

  sample():number {
    return this.distribution.sample();
  }
}

export class UniformDistribution implements Distribution {

  private distribution:any;

  constructor(public name: string, public readonly low:number, public readonly high:number){
    this.distribution = jStat.uniform(low, high);
  }

  sample():number {
    return this.distribution.sample();
  }
}

export class UniformIntegerDistribution implements Distribution {

  private distribution:any;

  constructor(public readonly name: string, public readonly low:number, public readonly high:number){
    this.distribution = jStat.uniform(low, high);
  }

  sample():number {
    return Math.round(this.distribution.sample());
  }
}

export class ExponentialDistribution implements Distribution {

  private distribution:any;

  constructor(public readonly name: string, public readonly rate:number){
    this.distribution = jStat.exponential(rate);
  }

  sample():number {
    return this.distribution.sample();
  }
}

export class NormalDistribution implements Distribution {

  private distribution:any;

  constructor(public readonly name: string, public readonly mean:number, public readonly sd:number){
    this.distribution = jStat.normal(mean, sd);
  }

  sample():number {
    return this.distribution.sample();
  }
}