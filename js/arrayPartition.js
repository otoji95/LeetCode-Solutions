function arrayPairSum(nums1) {
  let total = 0;
  sortedArray = nums1.sort((a, b) => a - b);
  for (let i = 0, j = 2; j <= nums1.length; i += 2, j += 2) {
    let x = sortedArray.slice(i, j);
    total += Math.min(...x);
  }
  return total;
}
