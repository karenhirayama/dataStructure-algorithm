var checkTree = function(root) {
    const numTree = root[1] + root[2]
    let answer = true;
    if (root[0] === numTree) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
};

console.log(checkTree([10,4,6]));
console.log(checkTree([5, 3, 1]));

