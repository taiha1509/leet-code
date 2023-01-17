// 131. Palindrome Partitioning
// Medium
// 9K
// 288
// Companies
// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.
// Accepted
// 555.1K
// Submissions
// 882.7K
// Acceptance Rate
// 62.9%

function isPalindrome(s: string): boolean {
    const len = s.length, mid = Math.floor(len/2);
    if (len <= 1) return true;
    let i = 0;
    while (i <= mid) {
        if (s[i] !== s[len-i-1]) return false;
        i++;
    }
    return true;
}

function partition(s: string): string[][] {
    const len = s.length;
    const make = (str: string, rs: string[][]): string[][] => {
        console.log(str);
        
        if (len <= 1) return [[str]];
        for(let i = 1; i < len; i++) {
            const allLeftStr = make(str.slice(0, i), rs);
            const allRightStr = make(str.slice(i), rs);

            allLeftStr.forEach((left) => {
                allRightStr.forEach((right) => {
                    rs.push([...left, ...right]);
                })
            })
        }

        return rs;
    }
    return make(s, []);
};
partition('abb')
// console.log('partition', partition('abba'));
    