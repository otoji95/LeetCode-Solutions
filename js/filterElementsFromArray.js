const filter = (arr, fn) => {
  const x = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      x.push(arr[i]);
    }
  }
  return x;
};
