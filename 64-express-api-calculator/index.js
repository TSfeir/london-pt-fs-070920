const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

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
    return this.memory;
  };
}

app.get("/double/:num", (req, res) => {
  const calc = new CalcFunction();
  const output = calc.add(parseInt(req.params.num)).multiply(2).total();
  const outputJson = JSON.parse(`{"result": ${output}}`);
  res.send(outputJson);
});

app.get("/square/:num", (req, res) => {
  const calc = new CalcFunction();
  const number = parseInt(req.params.num);
  const output = calc.add(number).multiply(number).total();
  const outputJson = JSON.parse(`{"result": ${output}}`);
  res.send(outputJson);
});

app.get("/:num1/:operation/:num2", (req, res) => {
  const calc = new CalcFunction();
  const numberOne = parseInt(req.params.num1);
  const numberTwo = parseInt(req.params.num2);
  const operationSelected = req.params.operation;

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    return res.status(400).send("ERROR");
  }

  if (operationSelected === "add") {
    const output = calc.add(numberOne).add(numberTwo).total();
    const outputJson = JSON.parse(`{"result": ${output}}`);
    res.send(outputJson);
  } else if (operationSelected === "subtract") {
    const output = calc.add(numberOne).subtract(numberTwo).total();
    const outputJson = JSON.parse(`{"result": ${output}}`);
    res.send(outputJson);
  } else if (operationSelected === "multiply") {
    const output = calc.add(numberOne).multiply(numberTwo).total();
    const outputJson = JSON.parse(`{"result": ${output}}`);
    res.send(outputJson);
  } else if (operationSelected === "divide") {
    const output = calc.add(numberOne).divide(numberTwo).total();
    const outputJson = JSON.parse(`{"result": ${output}}`);
    res.send(outputJson);
  } else {
    res.status(400).send("Bad request");
  }
});

// function errorHandler(err, req, res, next) {
//   if (res.headersSent) {
//     return next(err);
//   }
//   res.status(400);
//   res.render("error", { error: err });
// }

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
