{
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
}