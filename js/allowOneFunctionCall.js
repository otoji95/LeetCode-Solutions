function once(fn) {
  let counter = 0;
  return function (...args) {
    while (counter < 1) {
      counter++;
      return fn(...args);
    }
  };
}
