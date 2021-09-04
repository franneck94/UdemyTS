interface User {
    name: string;
    email?: string;
    id?: number;
}

type UserOptional = Partial<User>;

function updateUserData(user: User, data: UserOptional) {
    return {
        ...user,
        ...data,
    };
}

let u1: User = { name: 'Jan' };

console.log(u1);

u1 = updateUserData(u1, { email: 'jan@email.com' });

console.log(u1);

type UserRequired = Required<User>;

type UserBaseInfo = Pick<User, 'email' | 'name'>;

type UserInfo = Omit<User, 'name' | 'id'>;
