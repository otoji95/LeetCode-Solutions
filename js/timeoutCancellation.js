const cancellable = function (fn, args, t) {
  function delayedFunction() {
    fn(...args);
  }

  let timeoutID = setTimeout(delayedFunction, t);

  function cancelFn() {
    clearTimeout(timeoutID);
  }

  return cancelFn;
};
