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
