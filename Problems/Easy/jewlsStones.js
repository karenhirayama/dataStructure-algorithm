var numJewelsInStones = function(jewels, stones) {
    let check = 0;
    for (let i in stones) {
        for (let j in jewels) {
            if (stones[i] === jewels[j]) {
                check++
            }
        }
    }
    return check
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));

// Runtime: 71 ms, faster than 71.83% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 44.7 MB, less than 5.86% of JavaScript online submissions for Jewels and Stones.