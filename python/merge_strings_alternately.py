def merge_alternately(word1, word2):
    x = []
    i = 0
    while i < len(word1) or i < len(word2):
        if i < len(word1):
            x.append(word1[i])
        if i < len(word2):
            x.append(word2[i])
        i += 1
    return "".join(x)
