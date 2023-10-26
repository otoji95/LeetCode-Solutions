def plus_one(list_of_nums):
    x = [str(num) for num in list_of_nums]
    y = int("".join(x))
    y += 1
    z = list(str(y))
    a = [int(num) for num in z]
    return a
