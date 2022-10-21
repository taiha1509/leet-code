/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
    const tmp = [];
    arr.forEach((item) => {
        if (item === 0) {
            tmp.push(0, 0);
        }
        else {
            tmp.push(item);
        }
    });
    for (let i = 0; i < arr.length; i++) {
        arr[i] = tmp[i];
    }
}
;
//# sourceMappingURL=duplicate-zeros.js.map