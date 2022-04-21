var defangIPaddr = function(address) {
    let defIP = ''
    for (i in address) {
        if (address[i] === '.') {
            defIP = defIP + '[.]'
        } else {
            defIP = defIP + address[i]

        }
    }
    return defIP
}; 

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"))