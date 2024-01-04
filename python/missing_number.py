def missing_number(nums):
    x = sum(range(max(nums) + 1)) - sum(nums)
    if x != 0:
        return x
    if x == 0 and 0 not in nums:
        return 0
    nums.sort()
    return nums[-1] + 1
