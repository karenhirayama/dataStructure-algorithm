var checkInclusion = function (s1, s2) {
    const arr1 = s1.split('');
    const arr2 = s2.split('');
    // Create hash
    const hash1 = new Array(26).fill(0);
    const hash2 = new Array(26).fill(0);
    // Get length 
    const len1 = s1.length;
    const len2 = s2.length;
    
    if (len2 < len1) {
        return false;
    }

    for (let i = 0; i < len1; i++) {
        ++hash1[s1.charCodeAt(i) - 97]
        ++hash2[s2.charCodeAt(i) - 97]
    }

    return s2.charCodeAt(5)

};

console.log(checkInclusion('ab', "i"))
console.log(checkInclusion('ab', "eidbaooo"))
console.log(checkInclusion('ab', "eidboaoo"))
console.log(checkInclusion("abc", "bbbbbca"))
console.log(checkInclusion("hello","ooolleoooleh"))

//"hello","ooolleoooleh"
//"abc","bbbca"