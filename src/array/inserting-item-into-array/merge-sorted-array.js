/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    const tmp = [];
    if (m == 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    }
    else {
        for (let i = 0, j = 0;;) {
            if (nums1[i] > nums2[j]) {
                tmp.push(nums2[j]);
                j++;
            }
            else {
                tmp.push(nums1[i]);
                i++;
            }
            if (i == m) {
                tmp.push(...nums2.slice(j));
                break;
            }
            if (j == n) {
                tmp.push(...nums1.slice(i));
                break;
            }
        }
        for (let k = 0; k < m + n; k++) {
            nums1[k] = tmp[k];
        }
    }
}
;
//# sourceMappingURL=merge-sorted-array.js.map