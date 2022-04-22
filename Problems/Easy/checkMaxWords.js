var mostWordsFound = function (sentences) {
    let numSpaces = 0;
    for (let i in sentences) {
        if (sentences[i].split(/\s/).length >= numSpaces) {
            numSpaces = sentences[i].split(/\s/).length;
        }
    }
    return numSpaces
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))