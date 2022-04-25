var restoreString = function(s, indices) {
    let r = {};
    s = s.split('')
    for (let i in indices) {
        r[indices[i]] = s[i]
    }
    let x = [];
    for (let i in r) {
        x.push(r[i])
    }
    return x.join('')
};

console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]));
// "leetcode"
console.log(restoreString("abc", [0,1,2]))
// "abc"