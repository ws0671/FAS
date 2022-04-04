a, b = input().split()
print(int(a)+int(b))

# list 값인데 unpacking이 되네? 괄호 안치고도
# [a,b] = ['3','5']

# 결론: js의 디스트럭처링 할당과 조금 다른데
# 일단 파이썬에선 괄호를 생략해줘도 튜플로 인식돼
# 튜플 언팩킹이 가능하고 iterable(list,dict등등)이면
# 서로 언팩킹이 가능하다라고 이해하면 될 것 같다.