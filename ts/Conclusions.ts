function superPrint<T>(a:T[]){
    return a[0]
}

const a = superPrint([1,2,3,4]) //error

type Player<E> = {
    name : string
    extraInfo: E
}

type NicoExtra = {
    favFood : string
}
type NicoPlayer = Player<NicoExtra>
const nico : NicoPlayer = {
        name: 'nico',
        extraInfo: {
            favFood: 'kimchi'
        }
}
const lynn: Player<null> = {
    name:'lynn',
    extraInfo : null
}

type A = Array<number>

let a1:A = [1,2,3,4]

function printAllNumbers(arr: Array<number>){
    return arr
}

//useState<number>()