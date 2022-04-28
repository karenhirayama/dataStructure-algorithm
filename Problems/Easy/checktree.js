var checkTree = function (root) {
    if (root[0] === root[1] + root[2]) {
        return true
    }
    return false
};

console.log(checkTree([10, 4, 6]))
// True
console.log(checkTree([5, 3, 1]))
// False
