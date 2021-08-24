function printAll(strs: string | string[]) {
    if (typeof strs === 'object') {
        for (const s of strs) {
            console.log(s);
        }
        return;
    }

    if (typeof strs === 'string') {
        console.log(strs);
        return;
    }
}

const s = 'Jan';
printAll(s);

const a = ['Jan', 'Schaffranek'];
printAll(a);

function printNumUsers(numUsers: number) {
    if (numUsers) {
        return `There are ${numUsers}`;
    }

    return 'No users';
}

printNumUsers(0);
printNumUsers(1);
