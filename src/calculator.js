const calculator = {
  checkArgs(...args) {
    args.forEach(arg => {
      if (!Number.isFinite(arg)) {
        throw Error("arguments must be finite numbers");
      }
    });
  },

  add(a, b) {
    this.checkArgs(a, b);

    return a + b;
  },

  subtract(a, b) {
    this.checkArgs(a, b);

    return a - b;
  },

  multiply(a, b) {
    this.checkArgs(a, b);

    return a * b;
  },

  divide(a, b) {
    this.checkArgs(a, b);

    if (b === 0) {
      throw Error("cannot divide by 0");
    }

    return a / b;
  },
};

export default calculator;
