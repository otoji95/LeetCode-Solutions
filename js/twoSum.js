const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (target - nums[j] === nums[i]) {
        if (i === j) {
          null;
        } else {
          return [i, j];
        }
      }
    }
  }
};
