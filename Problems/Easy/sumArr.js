var runningSum = function(nums) {
    const sumNums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const temp = sumNums[i -1] + nums[i]
        sumNums.push(temp)
    }
    return sumNums;
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]))