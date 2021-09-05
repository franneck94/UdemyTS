interface User {
    name: string;
    id: number;
}

function logProperty(user: User, key: keyof User) {
    console.log(user[key]);
}

const u1: User = { name: 'Jan', id: 100 };

logProperty(u1, 'id');
