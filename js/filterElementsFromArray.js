const filter = (arr, fn) => {
  const x = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      x.push(arr[i]);
    }
  }
  return x;
};

console.log(
  filter([1, 10, 20, 30], function greaterThan10(n, i) {
    return i === 0;
  })
);
