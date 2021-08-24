type Addable = number | string;

function unifiedAdd(arg1: Addable, arg2: Addable) {
    if (typeof arg1 == 'number' && typeof arg2 == 'number') {
        return arg1 + arg2;
    }

    if (typeof arg1 == 'string' && typeof arg2 == 'string') {
        return arg1 + arg2;
    }

    return undefined;
}

console.log(unifiedAdd(2, 3));
console.log(unifiedAdd('J', 'an'));
