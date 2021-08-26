type User = {
    name: string;
    age: number;
    courses: string[];
};

type Permisson = {
    permissionLevel: string;
};

type UserExtended = Permisson & User;

const user1: UserExtended = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    permissionLevel: 'Instructor',
};

console.log(user1);

const user2: UserExtended = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
    permissionLevel: 'Student',
};

console.log(user2);

function printUser(user: UserExtended) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);

    return user;
}

function printUserVerbose(user: User) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);

    return user;
}

printUser(user1);
