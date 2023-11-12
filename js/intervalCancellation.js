function cancellable(fn, args, t) {
  fn(...args);
  function intervalFunction() {
    return fn(...args);
  }

  let x = setInterval(intervalFunction, t);

  function pause() {
    clearInterval(x);
  }
  return pause;
}
