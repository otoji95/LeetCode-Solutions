function chunk(arr, size) {
  const x = [];
  let start = 0;
  for (let i = arr.length / size; i > 0; i--) {
    let subArr = arr.slice(start, start + size);
    x.push(subArr);
    start += size;
  }
  return x;
}
