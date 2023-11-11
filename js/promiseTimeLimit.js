function timeLimit(fn, t) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      let timeoutId = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => clearTimeout(timeoutId));
    });
  };
}
