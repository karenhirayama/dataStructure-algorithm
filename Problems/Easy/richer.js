var maximumWealth = function (accounts) {
    const eachAccounts = [];
    for (let i = 0; i < accounts.length; i++) {
        eachAccounts.push(accounts[i].reduce((x, y) => x + y))
    }
    return Math.max(...eachAccounts);
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]))