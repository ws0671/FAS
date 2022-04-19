# 3052
lst = []
for i in range(10):
    num = int(input())
    lst.append(num%42)

result_set = set(lst)
result_lst  = list(result_set)
print(len(result_lst))