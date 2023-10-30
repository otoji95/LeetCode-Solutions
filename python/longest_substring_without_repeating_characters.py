def length_of_longest_substring(s):
    n = len(s)
    if n == 0:
        return 0
    seen = set()
    start, end = 0, 0

    max_len = 0

    while end < n:
        if s[end] not in seen:
            seen.add(s[end])
            max_len = max(max_len, end - start + 1)
            end += 1
        else:
            seen.remove(s[start])
            start += 1

    return max_len
