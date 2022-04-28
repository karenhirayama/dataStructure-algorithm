var decompressRLElist = function (nums) {
    const res = [];
    
    for (let i = 0; i < nums.length/2; i++) {
        for (let j = 0; j < nums[2 * i]; j++) {
            const x = ((2 * i) + 1);
            res.push(nums[x])
        }
    }
    return res
};

console.log(decompressRLElist([1, 2, 3, 4]))
// [2,4,4,4]
console.log(decompressRLElist([1, 1, 2, 3]))
// [1,3,3]