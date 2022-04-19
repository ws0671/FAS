# 1546
T = int(input())
score = list(map(int,input().split()))
max_score = max(score)
n_score = [i*100/max_score for i in score]
print(sum(n_score)/T)
# list comprehension을 써봐야겠다.