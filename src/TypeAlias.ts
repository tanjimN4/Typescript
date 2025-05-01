//Type Alians

type Student = 
    {
    name: string,
    age: number,
    gender: 'male',
    address: string
}

const student :Student= {
    name: 'kamal',
    age: 22,
    gender: 'male',
    address: "Dhaka"
}
const student2 :Student= {
    name: 'kasam',
    age: 24,
    gender: 'male',
    address: "Dhaka"
}

type UserName = string;
type IsAdmin = boolean;
const userName: UserName = "Persian";
const isAdmin: IsAdmin = true;

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;