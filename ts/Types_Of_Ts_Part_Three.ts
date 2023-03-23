// unknown 타입이 어떤거인지 아직 모를때 사용0
let a :unknown;

if(typeof a ==='number'){
    let b = a+1
}
if(typeof a ==='string'){
    let b = a.toUpperCase()
}

//void
function hello () {
    console.log("x")
}

//never //함수가 절때로 리턴하지않을때
const hello1 = ():never => { throw new Error('xxx')}

function hello2 (name:number|string){
    if (typeof name === "number"){
        name //number
    }else if(typeof name === 'string'){
        name //string
    }else{
        name //never
    }

}