interface WithAge {
    age: number;
}

interface User {
    name: string;
    acl: string[];
}

class StandardUser implements User, WithAge {
    name: string;
    age: number;
    acl: string[] = ['READ_OWN_NOTES', 'WRITE_OWN_NOTES'];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Admin extends StandardUser {
    acl: string[] = ['READ_OWN_NOTES','READ_ALL_NOTES', 'WRITE_OWN_NOTES'];
}