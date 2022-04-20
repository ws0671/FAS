# 4344

C = int(input())
for _ in range(C):
    cnt =0
    T = list(map(int,input().split()))
    N = T.pop(0) #앞부분 pop해주는 방법
    m = sum(T)/N
    for j in T :
        if j > m:
            cnt += 1
    result = cnt/N*100
    print(f'{result:.3f}%')

# round() (반올림 내장함수)를 사용하면 소수점을 나타낼때 0이
# 한 개만 출력되어서 문제의 출력과 다르게 출력되어 오답처리된다.