{

    //  Object Destructuring:

    const student = { name: "kamal", age:'44' };
    const { name, age } = student;

    console.log({name} , {age});
    
    //  Array Destructuring

    const fruits = ["apple", "banana", "mango"];
    const [first, second] = fruits;

    console.log({first} , {second});

}