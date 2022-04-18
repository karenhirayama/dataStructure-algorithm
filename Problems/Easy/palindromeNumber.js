var isPalindrome = function(x) {
    const reverseX = [];
    const arrX = x.toString().split('').map(Number);
    for (let i = 0; i < arrX.length; i++) {
        reverseX.unshift(arrX[i]);
    }
    if (reverseX.toString() === arrX.toString()) {
        return true
    } else {
        return false

    }
};

console.log(isPalindrome(123))
console.log(isPalindrome(121))