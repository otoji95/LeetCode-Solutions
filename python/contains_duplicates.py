def contains_duplicates(nums):
    i = 0
    j = len(nums) - 1

    while i != j:
        if nums.count(nums[i]) > 1 or nums.count(nums[j]) > 1:
            return True
        else:
            i += 1
            j += 1
    return True
