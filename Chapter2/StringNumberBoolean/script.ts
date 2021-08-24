function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function concatenate(string1, string2) {
    return string1 + string2;
}

function check(input) {
    if (input > 2) {
        return false;
    }

    return true;
}

const n1 = 2;
const n2 = 3;
const n3 = add(n1, n2);
console.log('n3: ', n3);

const n4 = 'Jan';
const n5 = add(n1, n4);
console.log('n5: ', n5);

const s1 = 'Jan';
const s2 = 'Schaffranek';
const s3 = concatenate(s1, n5);
console.log('s3: ', s3);

const b1 = check(n1);
const b2 = b1 * n1;
