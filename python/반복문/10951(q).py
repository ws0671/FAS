while True:
    try:
        a,b = map(int, input().split())
        print(a+b)
    except:
        break

# 예외처리를 이용한 풀이이다.
# except문에 들어가려면 오류가 나야하는데 
# 이 문제 어느부분에서 오류가 나는가? (질문)
# 무한 루프이긴 한데 이게 오류로는 안나온다.
# 입력이 없고 줄바꿈을 하면(즉,엔터를 두번하면) 에러로 받아들인다.