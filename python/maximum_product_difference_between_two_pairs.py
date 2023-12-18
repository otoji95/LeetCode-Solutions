def max_product_difference(nums):
    x = sorted(nums)
    return (x[-2] * x[-1]) - (x[0] * x[1])


nums = [5, 6, 2, 7, 4]
print(max_product_difference(nums))
