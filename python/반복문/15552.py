from base64 import b16decode
import sys

T = int(sys.stdin.readline().rstrip())
for _ in range(T):
    a,b = map(int,sys.stdin.readline().rstrip().split())
    print(f'{a+b}')

# input() 대신에 sys.stdin.readline()을 사용하여 더 빠른계산을
# 할 수있다는 것을 알게됨.
# 대신에 이것을 쓸때는 개행문자까지 입력받기 때문에 .rstrip()을 사용하여
# 개행문자를 제거해준다.