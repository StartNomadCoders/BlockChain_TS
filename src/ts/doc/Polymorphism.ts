//Polymorphous => 여러가지 다른 구조들

type SuperPrints  ={
    //Generic
    <T>(arr:T[]):void
    // (arr:number[]) : void
    // (arr:boolean[]) : void
    // (arr:(number|boolean)[]) :void

}

const superPrint: SuperPrints = (arr) => {
    arr.forEach(i=>console.log(i))
}

superPrint([1,2,3,4])
superPrint([true,false,true,false])
superPrint(['a','b','c'])
superPrint([1,2,true,false])

type SuperPrints1  ={
    //Generic
    <T>(arr:T[]):T
}
const superPrint1: SuperPrints1 = (arr) => arr[0]

const a = superPrint1([1,2,3,4]) // number
const b = superPrint1([true,false,true,false]) // boolean
const c = superPrint1(['a','b','c']) // 'string'
const d = superPrint1([1,2,true,false,'1'])  //number| boolean | string