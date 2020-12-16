const calculator = {
  sum: 0,
  add: function (num) {
    this.sum = num + this.sum;
    return this;
  },

  subtract: function (num) {
    this.sum = this.sum - num;
    return this;
  },

  multiply: function (num) {
    this.sum = this.sum * num;
    return this;
  },

  divide: function (num) {
    this.sum = this.sum / num;
    return this;
  },

  total: function () {
    const returnValue = this.sum;
    this.sum = 0;
    return returnValue;
  },
};

module.exports = calculator;
