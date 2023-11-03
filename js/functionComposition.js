const compose = function (funcs) {
  if (funcs.length === 0) {
    return (x) => x;
  }
  return functions.reduceRight(function (prevFn, nextFn) {
    return function (x) {
      return nextFn(prevFn(x));
    };
  });
};

(functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]), (x = 1);
const y = compose(functions);
console.log(y);
