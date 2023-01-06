// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
 

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
 

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

function minDistance(word1: string, word2: string): number {
    const m = word1.length, n = word2.length;
    if (!m) return n;
    if (!n) return m;
    const arr = [];
    for(let i = 0; i <= m; i++) {
        if (i == 0) {
            const tmp = [...Array(n + 1).keys()].map((_, index) => index);
            arr.push(tmp);
        } else {
            const tmp = Array(n + 1).fill(0);
            tmp[0] = i;
            arr.push(tmp);
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                console.log('i, j', i, j);
                
                arr[i][j] = arr[i-1][j-1];
            } else {
                arr[i][j] = Math.min(Math.min(arr[i-1][j], arr[i][j-1]), arr[i-1][j-1]) + 1;
            }
        }
    }

    console.log('arr');
    arr.forEach((item) => console.log(item))
    

    return arr[m][n];
};

console.log('minDistance', minDistance('horse', 'ros'));
