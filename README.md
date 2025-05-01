# Module 1

---

## 🧾 **TypeScript পরিচিতি**
TypeScript হলো JavaScript-এর একটি সুপারসেট, যার মাধ্যমে স্ট্যাটিক টাইপিং এবং আরও উন্নত ফিচার পাওয়া যায়। এটি বড় প্রজেক্টে বাগ কমাতে সাহায্য করে।

---

## 🛠️ **Windows এ TypeScript ও ts-node-dev ইনস্টলেশন**

### ✅ Step 1: TypeScript ইনস্টল করো

```bash
npm install -g typescript
```

চেক করতে:
```bash
tsc -v
```

### ✅ Step 2: `ts-node-dev` ডেভেলপমেন্ট টুল ইনস্টল করো

```bash
npm i ts-node-dev --save-dev
```

### ✅ Step 3: `server.ts` বা `index.ts` ফাইল রান করো

```bash
npx ts-node-dev --respawn --transpile-only server.ts
```

---

## 🧑‍💻 **তোমার প্রথম TypeScript প্রোগ্রাম**

**`index.ts` ফাইল তৈরি করো:**

```ts
let next = 'next data';
console.log(next);
```

রান করো:
```bash
npx ts-node-dev --respawn --transpile-only index.ts
```

---

## 🧠 **Basic Data Types**

```ts
//string
let string :string ='ok'
//number
let number :number=123
//boolean
let boolean :boolean=true
//undefined
let x :undefined =undefined
//null
let y:null=null

//any type
let d ;

d=12
d='ok'
d=true

//array
let stingarray :string[]=['ok','work']

let numberarray :number[]=[1,2,3]

//tuple -->array --> order --> type of values

let coordinates :[number,string,boolean]=[1,'1',false]

```

---
## 🔁Object , Optional and Literal Types,
```ts
//Referance Type --> Object

const user : 
{
   readonly name:string, //fix a value
    age:number,
    work:boolean,
    office?:string, //optional type
    literalTypes:'permanent' //type --> literal type
}
=
{
    name :"kamal",
    age:34,
    work:true,
    literalTypes:'permanent'
}
```

## 🔁 **Function, Spread, Rest Operator, Destructuring**

### ✅ Function:
```ts
//Learning Function

//Normal Function
function sum(num1 :number,num2:number):number{
    return num1+num2
}
sum(5,7)
//Arrow Function
const arrowSum=(num1:number =5  ,num2:number) :number=>{
    return(num1+num2)
}

//object --> function --> method

const data ={
    name:'kaisha',
    balance:0,
    addBalance(balance :number): string{
        return`My money : ${this.balance+balance}`
    }
}

const arr:number[]=[1,2,3,4]

const newArr:number[]=arr.map((multi:number):number=>multi*multi)
```

### ✅ Rest Operator:
```ts
//rest
const rest=(...datas:string[])=>{
    datas.forEach((data:string)=>console.log(`working ${data}`)
    )
}
rest ('data1','data2')
```

### ✅ Spread Operator:
```ts
//spread 

const arr1 :string[]=['kamal','korim','masud',]
const arr2 :string[]=['kamal1','korim2','masud3',]

arr1.push(...arr2)

const arr1AndArr2={
    ...arr1,
    ...arr2
}
```

### ✅ Destructuring:
```ts
    //  Object Destructuring:

    const student = { name: "kamal", age:'44' };
    const { name, age } = student;

    console.log({name} , {age});
    
    //  Array Destructuring

    const fruits = ["apple", "banana", "mango"];
    const [first, second] = fruits;

    console.log({first} , {second});
```

---

## 🏷️ **Type Alias, Union, Intersection**

### ✅ Type Alias:
```ts
type Student = 
    {
    name: string,
    age: number,
    gender: 'male',
    address: string
}
```

### ✅ Union Type:
```ts
let userId: number | string;
userId = 101;
userId = "abc101";
```

### ✅ Intersection Type:
```ts
type Admin = { role: string };
type User = { name: string };

type AdminUser = Admin & User;

const admin: AdminUser = { role: "employee", name: "kamal" };
```

---

## 🔀 **Ternary, Optional Chaining, Nullish Coalescing**

### ✅ Ternary:
```ts
const isAdult =age >=18 ? "adult":"not adult"
console.log(isAdult);
```

### ✅ Optional Chaining:
```ts
const user = { contact: { email: "a@b.com" } };
console.log(user?.contact?.email);
```

### ✅ Nullish Coalescing:
```ts
const name = null;
const finalName = name ?? "Guest"; // যদি null বা undefined হয়, তাহলে "Guest"
```

---

## ❗ **Never, Unknown, Nullable Types**

### ✅ Never:
```ts
const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("its error");
```

### ✅ Unknown:
```ts
const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
        const [result, unit] = value.split(" ");
        const convertedSpeed = (parseFloat(result) * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
        console.log("wrong input");
    }
};
getSpeedInMeterPerSecond(null);
```

### ✅ Nullable:
```ts
let data: string | null = null;
data = "null";
```

---

## ✅ Summary: ডেভেলপমেন্টের জন্য রান কমান্ড

```bash
npx ts-node-dev --respawn --transpile-only server.ts
```