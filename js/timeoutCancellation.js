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

function fn(x) {
  return x * 5;
}
const args = [2];
t = 20;
console.log(cancellable(fn, args, t));
