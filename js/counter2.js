const createCounter = (init) => {
  let x = init;
  return {
    increment: () => ++init,
    decrement: () => --init,
    reset: () => (init = x),
  };
};
