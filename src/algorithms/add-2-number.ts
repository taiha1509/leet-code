/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function convertArrayToListNode(a: number[]): ListNode | null {
    if (!a.length) return null;

    const rs = new ListNode(a[0], null);
    let c = rs;
    a.forEach((item, index) => {
        if (index !== 0) {
            c.next = new ListNode(item, null);
            c = c.next;
        }
    })

    return rs;
}

function convertListNodeToArray(root: ListNode): number[] {
    let c = root;
    const rs = [];
    while(c) {
        rs.push(c.val);
        c = c.next;
    }

    return rs;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const reverseList = (l: ListNode | null): ListNode | null => {
        if (l) {
            const tmp = [];
            let cursor = l;
            while (cursor) {
                tmp.push(cursor.val);
                cursor = cursor.next;
            }
            tmp.reverse();
            
            let index = 1;
            const rs = new ListNode(tmp[0], null);
            cursor = rs;
            while (index < tmp.length) {
                cursor.next = new ListNode(tmp[index], null);
                cursor = cursor.next;
                index++;
            }
            return rs
        }
        return l;
    }

    const getLen = (l: ListNode | null): number => {
        if (l) {
            let count = 0, cursor = l;
            while (cursor) {
                cursor = cursor.next;
                count++;
            }

            return count;
        }
        return 0;
    }

    const normalSum = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
        if (!l1 && !l2) return null;
        else if (!l1) return l2;
        else if (!l2) return l1;
        const appendLeadingZero = (l: ListNode, numNode: number) => {
            const rs = new ListNode();
            let cursor = rs;
            while (numNode) {
                cursor.next = new ListNode();
                numNode--;
                if (numNode === 0) {
                    cursor.next = l;
                }
                cursor = cursor.next;
            }
            return rs;
        }
        const len1 = getLen(l1), len2 = getLen(l2);
        let tmpL1: ListNode = l1, tmpL2: ListNode = l2;
        if (len1 < len2) {
            tmpL1 = appendLeadingZero(l1, len2 - len1);
        } else if (len1 > len2) {
            tmpL2 = appendLeadingZero(l2, len1 - len2);
        }
        // calc normal sum
        let c1 = tmpL1, c2 = tmpL2, c;
        const rs = new ListNode(c1.val + c2.val);
        c1 = tmpL1.next; c2 = tmpL2.next; c = rs;
        while (c1 && c2) {
            const sum = c1.val + c2.val;
            c.next = new ListNode(sum, null);
            c1 = c1.next;
            c2 = c2.next;
            c = c.next;
        }
        return rs;
    }
    const rs = reverseList(normalSum(reverseList(l1), reverseList(l2)));
    console.log(convertListNodeToArray(rs));
    
    let c = rs, remainder = 0;
    while (1) {
        c.val += remainder;
        remainder = 0;
        if (c.val > 9) {
            remainder = 1;
            c.val = c.val % 10;
        }
        if (c.next) {
            c = c.next;
        } else {
            break;
        }
    }
    if (remainder) {
        c.next = new ListNode(remainder);
    }
    return rs;
};

console.log(addTwoNumbers(convertArrayToListNode([2,4,9]), convertArrayToListNode([5,6,4,9])));


// console.log(convertArrayToListNode([9,9,9,9,9,9,9]));
