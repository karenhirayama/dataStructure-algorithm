var removeDuplicates = function (nums) {
    const uniqueNums = Array.from(new Set(nums)).sort();
    const k = nums.length - uniqueNums.length;
    return uniqueNums;
};

console.log(removeDuplicates([1, 1, 3, 4, 1, 2]));
console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));