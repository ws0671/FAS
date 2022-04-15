n,x = map(int,input().split())
numbers = map(int,input().split())
result =''
for num in numbers:
    if num < x:
        result += str(num)+' '
print(result)