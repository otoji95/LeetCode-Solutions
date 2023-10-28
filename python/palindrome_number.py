def is_palindrome(x: int) -> bool:
    return str(x)[::-1] == str(x)


print(is_palindrome(131))
