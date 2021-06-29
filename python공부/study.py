#test_list = ['one','two','three'] 
#for i in test_list: # 변수 i에 test_list 를 하나씩 대입하며 
  #print(i) # i를 출력한다

  	 # // 연산자 나누기 연산 후 소수점 이하의 수를 버리고, 정수 부분의 수만 구함

    
    # Python array[::] 용법
    # arr[A:B:C]의 의미는, index A 부터 index B 까지 C의 간격으로 배열을 만들어라는 말입니다.

    # 예시 >> arr = range(10) >> arr [0,1,2,3,4,5,6,7,8,9] >> arr[::2] # 처음부터 끝까지 두 칸 간격으로 [0,2,4,6,8] >> arr[1::2] # index 1 부터 끝까지 두 칸 간격으로 [1,3,5,7,9] >> arr[::-1] # 처음부터 끝까지 -1칸 간격으로 ( == 역순으로) [9,8,7,6,5,4,3,2,1,0] >> arr[::-2] # 처음부터 끝까지 -2칸 간격으로 ( == 역순, 두 칸 간격으로) [9,7,5,3,1] >> arr[3::-1] # index 3 부터 끝까지 -1칸 간격으로 ( == 역순으로) [3,2,1,0] >> arr[1:6:2] # index 1 부터 index 6 까지 두 칸 간격으로 [1,3,5]
#
#--def liner_search(element, some_list):
#for i in range(len(some_list)):
    #if some_list[i] == element:
      #return i
  #return None-


#print(liner_search(2, [2, 3, 5, 7 ,11]))

def binary_search(element, some_list):
    start_index = 0
    end_index = len(some_list) - 1
    if (start_index + end_index) // 2 == element:
      return some_list[(start_index + end_index) // 2]

print(binary_search(2, [2, 3, 5, 7, 11]))
    