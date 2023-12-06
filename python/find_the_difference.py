def find_the_difference(s, t):
    for letter in t:
        t_count = t.count(letter)
        s_count = s.count(letter)
        if t_count != s_count:
            return letter
