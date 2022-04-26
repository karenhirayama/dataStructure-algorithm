    var interpret = function (command) {
        const r = command.replace('()', 'o').replace('(al)','al')
        if (r.includes(')')) {
            return interpret(r) 
        } else {
            return r
        }
    };

console.log(interpret('G()(al)'));
// 'Goal'
console.log(interpret('G()()()()(al)'));
//  "Gooooal"
console.log(interpret("(al)G(al)()()G"))
// "alGalooG"
console.log(interpret("G()()()()(al)"))