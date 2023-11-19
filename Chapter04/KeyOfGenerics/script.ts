interface User {
    name: string;
    id?: number;
    age?: number;
}

interface Admin {
    name: string;
}

function logUserProperty<T extends User | Admin>(obj: T, key: keyof T) {
    console.log(obj[key]);
}

const u1: User = { name: 'Jan', id: 100, age: 27 };

logUserProperty(u1, 'age');

const a1: Admin = { name: 'Peter' };

logUserProperty(a1, 'name');

logUserProperty({ name: 'Daniel' }, 'name');
