var kidsWithCandies = function (candies, extraCandies) {
    const answer = []
    candies.map((value) => {
        if (value + extraCandies >= Math.max(...candies)) {
            answer.push(true);
        } else {
            answer.push(false);
        }
    })
    return answer;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
