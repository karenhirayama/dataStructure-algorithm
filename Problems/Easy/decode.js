var decode = function (encoded, first) {
    const ar = [first]
    for (let i in encoded) {
        ar.push(encoded[i] ^ ar[ar.length - 1])
    }
    return ar
};

console.log(decode([1, 2, 3], 1))
//[1,0,2,1]
console.log(decode([6, 2, 7, 3], 4))
// [4,2,0,7,4]
console.log(decode([6], 1))
// [1,7]
console.log(decode([0, 6], 5))
// [5,5,3]
console.log(decode([1, 23], 1))
// [1,0,23]
console.log(decode([2, 7], 4))
// [4,6,1]