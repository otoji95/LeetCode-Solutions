def kth_factor(n: int, k: int):
    factors = []
    for number in range(1, n + 1):
        if n % number == 0:
            factors.append(number)
        if k < len(factors):
            return factors[k - 1]
        else:
            return -1
