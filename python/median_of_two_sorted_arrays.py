def find_median_of_two_arrays(nums1, nums2):
    nums1.extend(nums2)
    sorted_array = sorted(nums1)
    middle = int(len(sorted_array) / 2)
    if len(sorted_array) % 2 != 0:
        return sorted_array[middle : middle + 1][0]
    else:
        return sum(sorted_array[middle - 1 : middle + 1]) / 2
