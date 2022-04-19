# 8958

T = int(input())
for i in range(T):
    total = 0
    score = 0
    for j in input():
        if j == 'O':
            score += 1
            total += score
        else:
            score = 0
    print(total)

# 한 걸음 더 생각해봤으면 풀었을 것 같다.