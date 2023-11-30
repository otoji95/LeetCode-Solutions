def partition_string(s):
    sub_string = []
    sub_string_count = 0
    for letter in s:
        if letter not in sub_string:
            sub_string.append(letter)
        elif letter in sub_string:
            sub_string_count += 1
            sub_string = [letter]
    sub_string_count += 1
    return sub_string_count
