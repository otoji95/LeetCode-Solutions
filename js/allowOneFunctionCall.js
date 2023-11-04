function once(fn) {
  let counter = 0;
  return function (...args) {
    while (counter < 1) {
      counter++;
      return fn(...args);
    }
  };
}

let func = (a, b, c) => a + b + c;
let x = once(func);
x(1, 2, 3);
x(2, 3, 6);
