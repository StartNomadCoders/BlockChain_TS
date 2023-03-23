//readOnly
type Player = {
    readonly name : string
    age ?: number
}

const playerAllow = (name:string) :Player => ({name})

const nico = playerAllow('nico')
// nico.name = 'choel' // readOnlyError

const numbers :readonly number[] = [1,2,3,4]
// numbers.push(1) // readOnlyError

const names :readonly string[] = ['1','2']

//Tuple
const player1: [string,number,boolean] = ['nico',1,true]
// player1[0] = 1 //error

let a : undefined = undefined
let b : null = null

//any
const a1 : any[] = [1,2,3,4]
const b1 : any = true

a1+b1