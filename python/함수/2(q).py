# 4673

numbers = set(range(1,10001))

notSelfNumbers = set()

for i in range(1,10001):
    for j in str(i): #문자열로하여 각자리수 접근
        i += int(j) # 자기자신 + 첫째자리 + 둘째자리
    notSelfNumbers.add(i)

selfNum = numbers - notSelfNumbers

for i in sorted(selfNum):
    print(i)
   
# sorted함수는 iterable한 데이터를 새로운 정렬된 리스트로 만들어서 반환한다.
# 함수형태로 풀고싶다. 다른 사람에게 질문해야겠다.