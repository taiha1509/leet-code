// 119. Pascal's Triangle II
// Easy
// 3.4K
// 290
// Companies
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33
 

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

// Accepted
// 632.1K
// Submissions
// 1.1M
// Acceptance Rate
// 60.1%

function getRow(rowIndex: number): number[] {
    let a = [1], b = [1];

    if (rowIndex == 0) return a;
    const buildArr = (source: number[]) => {        
        if (source.length == 1) return [1, 1];
        const result = [1]
        source.forEach((item, index, origin) => {
            if (index == 0) {
                result.push(1 + origin[index + 1]);
            } else if (index < origin.length - 1) {
                result.push(item + origin[index + 1]);
            }
        });
        result.push(1);
        return result;
    }
    let index = 1, isA = true;
    while (index <= rowIndex) {
        if (isA) {
            isA = false;
            b = buildArr(a);
        } else {
            isA = true;
            a = buildArr(b);
        }
        console.log(a, b);
        
        index++;
    }

    if (isA) return a;
    return b;
};

const getRowVer2 = (rowIndex: number) => {
    const rs = Array(rowIndex + 1).fill(0);
    rs[0] = 1;
    for (let i = 0; i < rowIndex + 1; i++) {
        for (let j = i; j > 0; j--) {
            rs[j] += rs[j-1];
        }
        console.log(rs);
        
    }
    return rs;
}

console.log('getRowVer2', getRowVer2(3));
