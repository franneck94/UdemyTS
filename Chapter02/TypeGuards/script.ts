function printAll(arg: string | string[]) {
    if (typeof arg === 'object') {
        for (const s of arg) {
            console.log(s);
        }
        return;
    }

    if (typeof arg === 'string') {
        console.log(arg);
        return;
    }
}

const s = 'Jan';
printAll(s);

const a = ['Jan', 'Daniel'];
printAll(a);

const n = 1;

if (!n) {
    console.log('False');
} else {
    console.log('True');
}

const s2 = '';

if (!s2) {
    console.log('False');
} else {
    console.log('True');
}
