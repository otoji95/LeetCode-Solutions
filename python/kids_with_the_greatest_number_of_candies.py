def kids_with_candies(candies, extraCandies):
    most_candies = max(candies)
    return [candy + extraCandies >= most_candies for candy in candies]
