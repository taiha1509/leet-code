// 120. Triangle
// Medium
// 7.4K
// 455
// Companies
// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10
 

// Constraints:

// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104
 

// Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?


function minimumTotal(triangle: number[][]): number {
    const len = triangle.length;
    if (len == 1) return triangle[0][0];
    const calc = (from: number, index: number, sum: number) => {
        if (index == 0) {
            return Math.min(calc(0, 1, triangle[0][0]), calc(1, 1, triangle[0][0]))
        }
        if (index == len-1) {
            return sum + Math.min(triangle[len-1][from], !isNaN(triangle[len-1][from+1]) ? triangle[len-1][from+1] : Infinity);
        }
        return Math.min(calc(from, index+1, sum+triangle[index][from]), calc(from+1, index+1, sum+triangle[index][from]));
    }

    return calc(0, 0, 0);
};

console.log('minimumTotal', minimumTotal([[-1],[2,3],[1,-1,-3]]));
