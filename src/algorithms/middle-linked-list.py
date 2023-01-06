# Definition for singly-linked list.
import math
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def __init__(self) -> None:
        pass

    def middleNode(self, head: ListNode) -> ListNode:
        count = self.countNode()
        index = 1
        cursor = head
        isOdd = 0 if 3%2 == 0 else 1
        print(isOdd)
        while(cursor.next is not None and index < math.ceil(count / 2)):
            cursor = cursor.next
            index += 1
        return cursor


    def makeNodes(self, values = []):
        self.head = None
        cursor = self
        for value in values:
            if self.head is None:
                self.head = ListNode(value, None)
                cursor = self.head
            else:
                cursor.next = ListNode(value, None)
                cursor = cursor.next       

    def countNode(self):
        count = 0
        cursor = self.head
        while(cursor.next is not None):
            count += 1
            cursor = cursor.next
        return count + 1

    
isOdd = False
if (not isOdd)
        
        
        



solution = Solution()
solution.makeNodes([1,2,3,4, 5, 6, 7, 9])
count = solution.countNode()
middle = solution.middleNode(solution.head)
print(middle.val)