def is_path_crossing(path):
    crossed = []
    current = [0, 0]
    crossed.append(list(current))
    for direction in path:
        if direction == "N":
            current[0] += 1
        elif direction == "S":
            current[0] -= 1
        elif direction == "W":
            current[1] += 1
        elif direction == "E":
            current[1] -= 1
        print(current)
        if current in crossed:
            return True
        crossed.append(list(current))
    return False


x = "NESW"
print(is_path_crossing(x))
