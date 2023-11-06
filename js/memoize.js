function memoize(fn) {
  const x = {};
  return function (...args) {
    const key = new Array(...args);
    if (x.hasOwnProperty(key)) {
      return x[key];
    } else {
      x[key] = fn(...args);
      return x[key];
    }
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3);
memoizedFn(2, 3);
console.log(callCount);
