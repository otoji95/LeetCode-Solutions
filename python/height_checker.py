def height_checker(heights):
    proper = sorted(heights)
    i = 0
    count = 0
    while i < len(heights):
        if heights[i] != proper[i]:
            count += 1
        i += 1
    return count
