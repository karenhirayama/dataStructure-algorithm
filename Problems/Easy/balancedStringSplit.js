var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    if (arr.length === 1) {
        return arr[0]
    }
    for (let i in arr) {
        sum = sum + arr[i]
    }
    if (arr.length % 2 != 0) {
        for (let i in arr) {
            sum = sum + arr[i]
        }
    }
    const x = []
    if (arr.length > 3) {
        for (let i in arr) {
            if (i < (arr.length /2)) {
                sum = sum + (arr[i] * i)
                x.push(i)
            }
            else {
                sum += arr[i] * (arr.length - (arr.length /2))
            }
        }
    }
    return sum
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))
// 58
console.log(sumOddLengthSubarrays([1, 2]))
// 3
console.log(sumOddLengthSubarrays([10, 11, 12]))
// 66