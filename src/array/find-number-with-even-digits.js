function findNumbers(nums) {
    let rs = 0;
    nums.forEach((value, index) => {
        if (Math.floor(Math.log10(value)) % 2 === 1) {
            rs++;
        }
    });
    return rs;
}
;
//# sourceMappingURL=find-number-with-even-digits.js.map