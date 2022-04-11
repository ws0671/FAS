input = list(map(int,input().split()))
h = input[0]
m = input[1]

if m >=45 :
    print(h,m-45)
if h==0 and m<45 :
    print(23,60+m-45)
elif m < 45:
    print(h-1,60+ m-45)

