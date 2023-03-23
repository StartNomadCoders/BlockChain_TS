function add(a:number,b:number){
    return a+b
}

const add1 = (a:number,b:number) => {return a+b}

//call Signatures란 마우스를 올렸을때 보게되는것

type Add = (a:number,b:number) => number

const add2:Add =(a,b) => a+b