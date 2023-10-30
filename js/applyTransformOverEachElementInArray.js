function map(arr, fn) {
  x = [];
  for (let i = 0; i < arr.length; i++) {
    x.push(fn(arr[i], i));
  }
  return x;
}
