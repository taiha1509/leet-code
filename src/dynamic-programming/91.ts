// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The test cases are generated so that the answer fits in a 32-bit integer.



// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "06"
// Output: 0
// Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").

function numDecodings(s: string): number {
    const charaters = 'ABCDEFGHIJKLNMOPQRSUVTWXYZ';
    const map = new Map();

    charaters.split('').forEach((item, index) => {
        map.set(Number(index + 1).toString(), item);
    });

    const arr = s.split('');
    const rs: number[] = [];
    rs.push(arr[0] === '0' ? 0 : 1);

    let tmp = 0;
    if (map.has(arr[0] + arr[1])) {
        tmp++;
    }
    if (map.has(arr[0]) && map.has(arr[1])) {
        tmp++;
    }
    rs.push(tmp);
    if (arr.length === 1) {
        return rs[0]
    } else if (arr.length === 2) {
        return rs[1];
    }
    let noWay = false;
    for (let i = 2; i < arr.length; i++) {
        const key = arr[i - 1] + arr[i];
        if (arr[i] === '0') {
            if (!map.has(key)) {
                noWay = true;
                break;
            } else {
                rs[i] = rs[i - 2];
            }
        } else {
            rs[i] = rs[i - 1];
            if (map.has(key)) {
                rs[i] += rs[i - 2]
            }
        }
    }
    return noWay ? 0 : rs[arr.length - 1];
};


console.log('numDecodings', numDecodings('226120'));
