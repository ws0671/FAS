num = input()
cnt = 0
first_num = num
while True:
    sum = int(num[0]) + int(num[1]) 
    if len(str(sum)) ==2:
        new_num = num[1] + str(sum)[1]
        cnt += 1
        num = new_num
        new_num =''
    else:
        new_num = num[1] + str(sum)[0]
        cnt += 1
        num = new_num
        new_num =''


    if first_num== num:
        print(cnt)
        break

# python visualizer(https://pythontutor.com/visualize.html#mode=display)
# 의 도움을 받았다.
# debug console을 이용해서 debug 할 수 있지 않을까?