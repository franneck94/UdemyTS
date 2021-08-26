function add(arg1: number | string, arg2: number | string) {
    if (typeof arg1 == 'number' && typeof arg2 == 'number') {
        return arg1 + arg2;
    }

    if (typeof arg1 == 'string' && typeof arg2 == 'string') {
        return arg1 + arg2;
    }

    return;
}

const a1 = 'jan';
const a2 = ' schaffranek';
const r1 = add(a1, a2);

console.log(r1);

const a3 = 'jan';
const a4 = 0;
const r2 = add(a3, a4);

console.log(r2);
