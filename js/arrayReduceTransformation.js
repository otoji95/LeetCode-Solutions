const reduce = function (nums, fn, init) {
  let total = fn(init, nums[0]);

  if (nums.length === 0) {
    return init;
  }
  for (let i = 1; i < nums.length; i++) {
    total = fn(total, nums[i]);
  }
  return total;
};
