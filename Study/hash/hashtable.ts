function hashStringToInt (key: string, tableSize: number) {
    let hash = 17; // Try put primary number

    for (let i = 0; i < key.length; i++) {
        hash = ((13 * hash * key.charCodeAt(i)) % tableSize); // Try put primary number
    }

    return hash;
}
// With big length table 
// class HashTable {

//     table = new Array(139); // Try put primary number

//     setItem = (key: string, value: string) => {
//         const index: any = hashStringToInt(key, this.table.length);
//         this.table[index] = value;
//     };

//     getItem = key => {
//         const index: any = hashStringToInt(key, this.table.length);
//         return this.table[index];
//     };
// }

// Without big length table
class HashTable {

    table = new Array(3);
    numItems = 0;

    resize = () => {
        const newTable = new Array(this.table.length * 13);
        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const index = hashStringToInt(key, newTable.length);
                    if (newTable[index]) {
                        newTable[index].push([key, value]);
                    } else {
                        newTable[index] = [[key, value]];
                    }
                });
            }
        });
        this.table = newTable;
    }

    setItem = (key: string, value: string) => {
        this.numItems++;
        const loadFactor = this.numItems / this.table.length;
        if (loadFactor > .8) {
            // resize
            this.resize();
        }
        const index: number = hashStringToInt(key, this.table.length);
        if (this.table[index]) {
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [[key, value]]
        }
    }

    getItem = key => {
        const index: number = hashStringToInt(key, this.table.length);
        if (!this.table[index]) {
            return null;
        }
        return this.table[index].find(keyValue => keyValue[0] === key)[1];
    }
}

const myTable = new HashTable();

myTable.setItem('firstName', 'Karen');
myTable.setItem('lastName', 'Hirayama');
myTable.setItem('middleName', 'Mayumi');
myTable.setItem('age', '26');

console.log(myTable.table.length)
console.log(myTable.getItem('firstName'))
console.log(myTable.getItem('lastName'))
console.log(myTable.getItem('middleName'))
console.log(myTable.getItem('age'))