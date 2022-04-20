var numberOfSteps = function (num) {
    let contSteps = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num = num / 2
            contSteps++;
        } else {
            num = num - 1;
            contSteps++;
        }
    }
    return contSteps;
};

console.log(numberOfSteps(14))
console.log(numberOfSteps(8))
console.log(numberOfSteps(123))

