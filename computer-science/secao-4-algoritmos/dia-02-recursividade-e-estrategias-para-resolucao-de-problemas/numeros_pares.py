def even_seacher(n):
    count = 0
    for number in range(n + 1):
        if number % 2 == 0 and number != 0:
            count += 1
    return count

number = 16
print(even_seacher(number))


def even_seacher_recursive(n):
    count = 0
    if n == 0:
        return count
    if n % 2 == 0:
        count += 1
    return count + even_seacher_recursive(n - 1)

print(even_seacher_recursive(number))