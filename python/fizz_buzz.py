def fizz_buzz(n):
    x = []
    nums = range(1, n + 1)
    for num in nums:
        if num % 3 == 0 and num % 5 == 0:
            x.append("FizzBuzz")
        elif num % 3 == 0:
            x.append("Fizz")
        elif num % 5 == 0:
            x.append("Buzz")
        else:
            x.append(str(num))
    return x
