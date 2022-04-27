var createTargetArray = function (nums, index) {
    let r = [];   

    for (let i in nums) {
        if (!r[index[i]]) {
            r[index[i]] = nums[i]
        } else{
            let rLen = r.length - 1;
            if (rLen >= index[i]) {
                r[index[rLen + i]] = nums[rLen]
                rLen--;
            }
            r[index[i]] = nums[i]
        }
    }
    // Using splice
    // for (let i in nums) {
    //     r.splice(index[i], 0, nums[i])
    // }
    return r
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]))
// [0,4,1,3,2]
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]))
// [0,1,2,3,4]
console.log(createTargetArray([1], [0]));
// [1]