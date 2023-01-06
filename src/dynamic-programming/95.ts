// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

 

// Example 1:


// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
// Example 2:

// Input: n = 1
// Output: [[1]]
 

// Constraints:

// 1 <= n <= 8

/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function generateTrees(n: number): Array<TreeNode | null> {
    
    const helper = (nodes: number[]): TreeNode[] => {
        const len = nodes.length;
        if (len == 0) {
            return [null];
        }
        if (len == 1) {
            return [new TreeNode(nodes[0])];
        }
        const allTree: TreeNode[] = [];

        for (let i = 0; i < len; i++) {
            const allLeftTree = helper(nodes.slice(0, i));
            const allRightTree = helper(nodes.slice(i + 1));

            for (let x = 0; x < allLeftTree.length; x++) {
                for (let y = 0; y < allRightTree.length; y++) {
                    const root = new TreeNode(nodes[i]);
                    root.left = allLeftTree[x];
                    root.right = allRightTree[y];
                    allTree.push(root);
                }
            }
        }

        return allTree;
    }
    return helper(Array(n).fill(0).map((value, index) => index + 1));
};

generateTrees(4);