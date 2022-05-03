# 1065

N = int(input())

def hansu(num):
    cnt = 0
    for i in range(1,num+1):
        if i< 100 :
            cnt +=1
        elif i>= 100:
            one = i//100
            two = i%100
            three = i%10

