    function sortedSquares(nums: number[]): number[] {
        const n = nums.length;
        if(nums[n-1] <=0) {
            nums.reverse();
            return nums.map((item) => Math.pow(item, 2));
        }

        let index = 0;
        for(let i = 0; i < n; i ++) {
            if(nums[i] >= 0) {
                index = i;
                break;
            }
        }

        const negatives = nums.slice(0, index).reverse().map((item) => Math.pow(item, 2));
        const positives = nums.slice(index).map((item) => Math.pow(item, 2));
        const rs =[];
        let i = 0, j = 0;
        for(; ;) {
            if(i === negatives.length) {
                rs.push(...positives.slice(j));
                break;
            }
            if(j === positives.length) {
                rs.push(...negatives.slice(i));
                break;
            }
            if(negatives[i] < positives[j]) {
                rs.push(negatives[i]);
                i++;
            }else {
                rs.push(positives[j]);
                j++;
            }
        }

        return rs;
    };