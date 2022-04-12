hour,minute = map(int,input().split())
cookTime = int(input())

endHour = (hour*60 + minute + cookTime)//60
endMinute = (hour*60 + minute + cookTime)%60
print(endHour-24 if endHour>=24 else endHour, endMinute)

# 주의: 삼항연산자는 else endHour에서 딱 끝난다 , 뒷부분은 다음에
# 무엇을 출력할 것인지 나타낸다.