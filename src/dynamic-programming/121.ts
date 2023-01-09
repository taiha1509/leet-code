// 121. Best Time to Buy and Sell Stock
// Easy
// 22.4K
// 705
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104
// Accepted
// 3M
// Submissions
// 5.4M
// Acceptance Rate
// 54.3%


function maxProfit(prices: number[]): number {
    if (prices.length == 1) return 0;
    let maxPrice = 0, rs = 0;
    let currentMinPrice = prices[0], currentMaxPrice = prices[0];
    prices.forEach((p, index) => {
        // ignore 0-th index
        if (index) {
            if (p < currentMinPrice) {
                currentMinPrice = p;
            } else {
                currentMaxPrice = p;
                maxPrice = currentMaxPrice - currentMinPrice;
                if (rs < maxPrice) rs = maxPrice;
            }
        }
    });
    return rs;
};

console.log('maxProfit', maxProfit([7,1,5,3,6,4]));
