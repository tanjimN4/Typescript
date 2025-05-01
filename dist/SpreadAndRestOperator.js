"use strict";
{
    //spread 
    const arr1 = ['kamal', 'korim', 'masud',];
    const arr2 = ['kamal1', 'korim2', 'masud3',];
    arr1.push(...arr2);
    const arr1AndArr2 = Object.assign(Object.assign({}, arr1), arr2);
    //rest
    const rest = (...datas) => {
        datas.forEach((data) => console.log(`working ${data}`));
    };
    rest('data1', 'data2');
}
