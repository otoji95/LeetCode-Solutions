def str_str(haystack: str, needle: str) -> int:
    end = len(needle)
    for index, char in enumerate(haystack):
        if char == needle[0]:
            if haystack[index : end + index] == needle:
                return index
    return -1
