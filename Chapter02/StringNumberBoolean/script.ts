function add(arg1: number, arg2: number) {
    return arg1 + arg2;
}

function concatenate(arg1: string, arg2: string) {
    return arg1 + arg2;
}

function check(arg: number) {
    if (arg > 2) {
        return false;
    }

    return true;
}

const a1 = 2;
const a2 = 'Jan';

const r1 = add(a1, a2);
console.log(r1);

const a3 = ' Schaffranek';
const r2 = concatenate(a2, a3);
console.log(r2);

const a4 = 3;
const r3 = check(a4);
