while True:
    try:
        a,b = map(int, input().split())
        print(a+b)
    except:
        break

# 예외처리를 이용한 풀이이다.
# except문에 들어가려면 오류가 나야하는데 
# 이 문제 어느부분에서 오류가 나는가? (질문)