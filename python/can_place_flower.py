def can_place_flower(flowerbed, n):
    count = 0
    if len(flowerbed) == 1 and flowerbed[0] == 0:
        count += 1
    if len(flowerbed) > 1 and flowerbed[0] == 0 and flowerbed[1] == 0:
        count += 1
        flowerbed[0] = 1

    x = 0
    y = 1
    z = 2
    while z < len(flowerbed):
        if flowerbed[x] == 0 and flowerbed[y] == 0 and flowerbed[z] == 0:
            count += 1
            flowerbed[y] = 1
        x += 1
        y += 1
        z += 1
    if len(flowerbed) > 1 and flowerbed[-2] == 0 and flowerbed[-1] == 0:
        count += 1
        flowerbed[-2] = 1

    print(count)
    return count >= n


print(
    can_place_flower([0, 0], 1)
)  # Should return True as there is space for one flower


print(can_place_flower([0, 0], 1))
