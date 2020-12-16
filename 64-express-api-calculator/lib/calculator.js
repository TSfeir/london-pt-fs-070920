class CalcFunction {
  constructor() {
    this.num1 = 0;
    this.memory = 0;
  }

  add = (num) => {
    this.memory = num + this.memory;
    return this;
  };

  subtract = (num) => {
    this.memory = this.memory - num;
    return this;
  };

  multiply = (num) => {
    this.memory = this.memory * num;
    return this;
  };

  divide = (num) => {
    this.memory = this.memory / num;
    return this;
  };

  total = () => {
    console.log(this.memory);
    return this;
  };
}

const calc = new CalcFunction();

calc.add(5).subtract(2).multiply(5).divide(3).total();
