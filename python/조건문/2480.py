a,b,c = map(int,input().split())
if a==b and b==c :
    print(10000+a*1000)
elif a==b or b==c or c==a:
    if a==b:
        print(1000+a*100)
    if b==c:
        print(1000+b*100)
    if c==a:
        print(1000+c*100)
else :
    max = max(a,b,c)
    print(max*100)