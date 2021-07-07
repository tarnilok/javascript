# def fibonacci(n) :
#     arr = []
#     x = 1
#     y = 1
#     for i in range(1,n+1) :
#         arr.append(y)
#         result = x + y
#         x = y
#         y = result
#     return arr[n-1]
# number = int(input("what number do you want in fibonacci sequence starting with 1").strip())
# print(fibonacci(number))


# def fibonacci2 (n) :
#     x = 0
#     y = 1
#     for i in range(1, n+1) :
#         result = x + y
#         x = y
#         y = result
#     return result

# number = int(input("what number do you want in fibonacci sequence starting with 1").strip())
# print(fibonacci2(number))


# def fibonacci3 (n) :
#     arr = []
#     for i in range(0,n) :
#         arr.append(i + 1) if i == 0 or i == 1 else arr.append(arr[i-1] + arr[i-2]) 
#     return arr[n-1]


# number = int(input("what number do you want in fibonacci sequence starting with 1").strip())
# print(fibonacci3(number))

