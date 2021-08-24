function add(arg1: number, arg2: number) {
    return arg1 + arg2;
}

function concat(arg1: string, arg2: string) {
    return arg1 + arg2;
}

console.log(add(2, 3));
console.log(concat('J', 'an'));

function isNumber(arg: any) {
    return typeof arg == 'string';
}

function unifiedAdd(arg1: number | string, arg2: number | string) {
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
