var minimumSum = function (num) {
    const sortNum = num.toString().split('').sort();
    const miniNum = sortNum.slice(2)

    const miniSum0 = Number([parseInt(sortNum[0]), parseInt(miniNum[0])].join(''))
    const miniSum1 = Number([parseInt(sortNum[1]), parseInt(miniNum[1])].join(''))

    return miniSum0 + miniSum1;
};

console.log(minimumSum(2932))
console.log(minimumSum(4009))