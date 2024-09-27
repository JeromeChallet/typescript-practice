const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR}

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
    const person = {
    name: 'jerome',
        age: 38,
        hobbies: ['sports', 'video games'],
        role: [2, 'author'],
        access: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

//person.role = [0, 'admin', 'user']

let favoriteActivities: any[];
favoriteActivities = ['sports', 1]

console.log("person :", person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.access === Role.ADMIN) {
    console.log("user is admin");
}