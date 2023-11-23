class ArrayWrapper {
  constructor(arr) {
    this.arrays = arr;
  }
}

ArrayWrapper.prototype.valueOf = function () {
  let sum = 0;
  this.arrays.forEach((num) => {
    sum += num;
  });
  return sum;
};

ArrayWrapper.prototype.toString = function () {
  console.log(this.arrays);
  let x = `[${this.arrays}]`;

  return x;
};
