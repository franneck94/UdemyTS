interface User {
    name: string;
    email?: string;
    id?: number;
}

type UserOptional = Partial<User>;

function updateUserData(user: User, newData: UserOptional) {
    return {
        ...user,
        ...newData,
    };
}

const u1: User = { name: 'Jan', email: 'jan@email.com' };

updateUserData(u1, { email: 'jan2@email.com' });

type UserRequired = Required<User>;

type UserBaseInfo = Pick<UserRequired, 'email' | 'name'>;

type UserFullInfo = Omit<UserRequired, 'id'>;
