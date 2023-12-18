function maxProductDifference(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  const x = nums.slice(nums.length - 2);
  const y = nums.slice(0, 2);
  console.log(x);
  console.log(y);
  return x[0] * x[1] - y[0] * y[1];
}

const nums = [1, 6, 7, 5, 2, 4, 10, 6, 4];
console.log(maxProductDifference(nums));
