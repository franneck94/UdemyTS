interface User {
    name: string;
    id: number;
    age: number;
}

function logUserProperty(user: User, key: keyof User) {
    console.log(user[key]);
}

const u1: User = { name: 'Jan', id: 100, age: 27 };

logUserProperty(u1, 'age');
