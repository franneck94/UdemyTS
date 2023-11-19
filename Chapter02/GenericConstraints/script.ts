interface Sized {
    length: number;
}

function lengthComparison<Type extends Sized>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

const longerArray = lengthComparison([1, 2], [1, 2, 3]);

const longerString = lengthComparison('alice', 'bob');

const notOK = lengthComparison(10, 100);
