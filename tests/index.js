function func1(){
    return await 2
}
async function func2(){
    await setTimeout(() => {
        console.log(2)
    }, 2000);
}
async function func3(){
    await setTimeout(() => {
        console.log(3)
    }, 0);
}

func1()
.then(()=>{
    return func2()
})
.then(()=>{
    return func3()
})