// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where s and t are divided into n and m 
// substrings
//  respectively, such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

// Example 1:


// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Explanation: One way to obtain s3 is:
// Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// Since s3 can be obtained by interleaving s1 and s2, we return true.
// Example 2:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.
// Example 3:

// Input: s1 = "", s2 = "", s3 = ""
// Output: true
 

// Constraints:

// 0 <= s1.length, s2.length <= 100
// 0 <= s3.length <= 200
// s1, s2, and s3 consist of lowercase English letters.
 
// recursive way
// function isInterleave(s1: string, s2: string, s3: string): boolean {
//     if (s1.length == 0 && s2.length == 0 && s3.length == 0) return true;
//     if (s1.length + s2.length !== s3.length) return false;
//     if (s3.length == 1) {
//         if (s3 == s2 || s3 == s1)
//             return true;
//         return false;
//     }
    
//     if (s1?.[0] == s3?.[0] && s2?.[0] == s3?.[0]) return isInterleave(s1.slice(1), s2, s3.slice(1)) || isInterleave(s1, s2.slice(1), s3.slice(1));
//     if (s1?.[0] == s3?.[0]) return isInterleave(s1.slice(1), s2, s3.slice(1));
//     if (s2?.[0] == s3?.[0]) return isInterleave(s1, s2.slice(1), s3.slice(1));
//     return false;
// };

// console.log('isInterleave', isInterleave('bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa', 
//     'babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab'
//     ,'babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab'));

// DP solution

function isInterleave(s1: string, s2: string, s3: string): boolean {
    const table = Array(s1.length + 1).fill([]);
    console.log(s1.length);
    
    const len1 = s1.length, len2 = s2.length, len3 = s3.length;
    if (len1 + len2 !== len3) return false;
    for (let i = 0; i < len1 + 1; i++) {
        for (let j = 0; j < len2 + 1; j++) {
            if (i == 0 && j == 0) {
                table[0][0] = true;
            } else if (i == 0) {
                table[i][j] = table[i][j-1] && (s2[j-1] === s3[i+j-1]);
            } else if (j == 0) {
                table[i][j] = table[i-1][j] && (s1[i-1] === s3[i+j-1]);
            } else {
                table[i][j] = (table[i][j-1] && s2[j-1] === s3[i+j-1]) || (table[i-1][j] && s1[i-1] === s3[i+j-1]);
            }
        }
    }
    return table[len1][len2];
};
console.log('isInterleave', isInterleave('bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa', 
    'babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab'
    ,'babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab'));
