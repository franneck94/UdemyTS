interface BooleanDictionary {
    [key: string]: boolean;
}

let myDict: BooleanDictionary = {};

// Valid to assign boolean values
myDict['foo'] = true;
myDict['bar'] = false;

// Error, "oops" isn't a boolean
myDict['baz'] = 'oops';

console.log(myDict);

interface BooleanArray {
    [index: number]: boolean;
}

let myAray: BooleanArray = {};

myAray[0] = true;
myAray[1] = false;
myAray[2] = true;

console.log(myAray);
