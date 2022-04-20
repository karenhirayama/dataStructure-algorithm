var finalValueAfterOperations = function(operations) {
    let finalValue = 0;
    operations.map((operation) => {
        if (operation.includes('+')) {
            finalValue++;
        } else {
            finalValue--;
        }
    });
    return finalValue;

    // Using reduce
    // return operations.reduce((x,operation)=>{
    //     if(operation[1] === "-")
    //         return x -= 1;
    //     return x += 1;
    // },0)
};

console.log(finalValueAfterOperations(["--X","X++","X++"]));
console.log(finalValueAfterOperations(["++X","++X","X++"]));