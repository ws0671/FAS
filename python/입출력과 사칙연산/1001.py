a,b = input().split()
print(int(a)-int(b))

# split() 이런식으로 괄호에 공백을 넣으면 공백이 얼마나길든 
# 그 공백을 기준으로 요소가 나뉘어서 리스트형태로 리턴된다.

# js split()과의 차이점 예시 :
# const str = 'The quick brown fox jumps over the lazy dog.';
# const strCopy = str.split();
# console.log(strCopy);
# // expected output: Array ["The quick brown fox jumps over the lazy dog."]

# js는 원래 값이 리스트로 변하여 반환된다.