function cancellable(fn, args, t) {
  function intervalFunction() {
    fn(...args);
  }

  let repeat = setInterval(intervalFunction, t);
}
