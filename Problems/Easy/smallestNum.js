var smallerNumbersThanCurrent = function (nums) {
    // Fast anwser 
    // const testSort = nums.sort();
    // const check = nums.map((element) => testSort.indexOf(element))
    // return {testSort, check}

    const r = [];
    for (let i in nums) {
        let sumN = 0;
        for (let j in nums) {
            if (nums[i] > nums[j]) {
                sumN++
            }
        }
        r.push(sumN)

    }
    return r
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
// [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
// [2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
// [0,0,0,0]
console.log(smallerNumbersThanCurrent([7, 7, 7, 6]));
