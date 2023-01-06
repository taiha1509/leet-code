# Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

# The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

# Return the quotient after dividing dividend by divisor.

# Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        min = -2**31
        max = 2**31 - 1
        negative_result = (dividend < 0 and divisor > 0) or (dividend > 0 and divisor < 0)
        dividend = abs(dividend)
        divisor = abs(divisor)
        if dividend == 0:
            return 0
        elif dividend < divisor:
            return 0
        elif dividend <= divisor:
            if (negative_result):
                return -1
            return 1
        
        index = 0
        arr = [divisor]
        rs = 0
        while(True):
            tmp = arr[-1] + arr[-1]
            if (tmp < dividend):
                arr.append(tmp)
            elif tmp == dividend:
                arr.append(tmp)
                rs = 2**(len(arr) - 1)
                break
            else:
                sum = arr[-1]
                rs = 2**(len(arr) - 1)
                while(index >= 0 and sum < dividend):
                    tmp1 = sum + arr[index]
                    if (tmp1 < dividend):
                        sum = tmp1
                        rs += 2**(index)
                    elif(tmp1 == dividend):
                        rs += 2**(index)
                        break
                    index -= 1
                break
            index += 1
        print(arr)
        if (negative_result):
            if (rs > -min):
                return min
            return -rs
        if (rs > max):
            return max
        return rs


solution = Solution()
print(solution.divide(-2147483648, -1))