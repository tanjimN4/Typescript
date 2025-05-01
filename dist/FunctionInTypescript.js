"use strict";
{
    //Learning Function
    //Normal Function
    function sum(num1, num2) {
        return num1 + num2;
    }
    sum(5, 7);
    //Arrow Function
    const arrowSum = (num1 = 5, num2) => {
        return (num1 + num2);
    };
    //object --> function --> method
    const data = {
        name: 'kaisha',
        balance: 0,
        addBalance(balance) {
            return `My money : ${this.balance + balance}`;
        }
    };
    const arr = [1, 2, 3, 4];
    const newArr = arr.map((multi) => multi * multi);
}
