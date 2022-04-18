function twoSum(nums: number[], target: number): number[] {
    const hastable = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hastable.hasOwnProperty(complement)) {
            return [hastable[complement], i]
        }
        hastable[nums[i]] = i;
    };
    return null;
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));