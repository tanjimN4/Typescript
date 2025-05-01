{
    //spread 

const arr1 :string[]=['kamal','korim','masud',]
const arr2 :string[]=['kamal1','korim2','masud3',]

arr1.push(...arr2)

const arr1AndArr2={
    ...arr1,
    ...arr2
}

//rest
const rest=(...datas:string[])=>{
    datas.forEach((data:string)=>console.log(`working ${data}`)
    )
}
rest ('data1','data2')


}
