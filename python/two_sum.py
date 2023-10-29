def two_sum(nums, target):
    for i, num_i in enumerate(nums):
        for j, num_j in enumerate(nums):
            if target - num_i == num_j and i != j:
                return [i, j]
