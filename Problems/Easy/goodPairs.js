var numIdenticalPairs = function (nums) {
    // Check if are repetition numbers
    const hash = {};

    for (let i in nums) {
        if (hash.hasOwnProperty(nums[i])) {
            hash[nums[i]] = ++hash[nums[i]];
        } else {
            hash[nums[i]] = 1;
        }
    }

    let sum = 0;
    let result = 0
    for (let i in hash) {
        if (hash[i] > 1) {
            sum = hash[i]
            const c = (sum * (sum - 1)) / 2
            result = result + c
        }
    }

    return result
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
console.log(numIdenticalPairs([1, 1, 1, 1]))
console.log(numIdenticalPairs([1, 2, 3]))

// for (let i in nums) {
//     if (hash.hasOwnProperty(nums[i])) {
//         if (hash[nums[i]] > i) {
//             checkIdentical = 0
//         } else {
//             checkIdentical++;
//             hash[nums[i]] = checkIdentical;
//         }
//     }
//      else {
//         checkIdentical = 1
//         hash[nums[i]] = checkIdentical;
//         checkIdentical = 1
//     }
// }