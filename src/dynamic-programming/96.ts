// 96. Unique Binary Search Trees
// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.
// Example 1:


// Input: n = 3
// Output: 5
// Example 2:

// Input: n = 1
// Output: 1

// Constraints:

// 1 <= n <= 19

function numTrees(n: number): number {
    if (n == 1) {
        return 1;
    }
    const arr = [1, 2];
    const countNumsOfTree = (num: number) => {
        if (num == 0) return 1;
        if (!isNaN(arr[num - 1])) {
            return arr[num - 1];
        }
        let count = 0;
        for (let i = 0; i < num; i++) {
            const numLeftNode = i, numRightNode = num - i - 1;
            const numLeftTree = countNumsOfTree(numLeftNode);
            const numRightTree = countNumsOfTree(numRightNode);
            if (numLeftNode > 1) 
                arr[numLeftNode - 1] = numLeftTree;
            if (numRightNode > 1)
                arr[numRightNode - 1] = numRightTree;
            count += (numLeftTree * numRightTree);
        }

        arr[num - 1] = count;
        console.log(arr);
        
        return count;
    }

    console.log('arr', arr);
    
    
    return countNumsOfTree(n);
};

console.log('numTrees(3)', numTrees(19));