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
