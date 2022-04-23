var shuffle = function(nums, n) {
     const numsSplice = nums.splice(0,n);
     const result = []
     for (let i in nums) {
        result.push(numsSplice[i], nums[i])
     }
     return result
};

console.log(shuffle([2,5,1,3,4,7], 3));
console.log(shuffle([1,2,3,4,4,3,2,1], 4));
console.log(shuffle([1,1,2,2], 2));