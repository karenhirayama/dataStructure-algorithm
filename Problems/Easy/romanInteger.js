var romanToInt = function (s) {
    const romanAndNumber = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    const romanArr = s.split('').reverse();
    let lastValue = 0
    let intNumber = 0;
    for (let i = 0; i < romanArr.length; i++) {
        if (romanAndNumber[romanArr[i]] >= lastValue) {
            intNumber += romanAndNumber[romanArr[i]];
        } else {
            intNumber -= romanAndNumber[romanArr[i]];
        }
        lastValue = romanAndNumber[romanArr[i]];
    }
    return intNumber;
};


console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('IV'));
console.log(romanToInt('XXXIV'));
console.log(romanToInt("MCMXCIV"));