let a :number =1;
let b :string = '1'
let c : boolean = false;
let d : number[] = [1,2,3]

//Optional Type

const player : {
    name: string,
    age? : number // optional parameter
} = {
    name : "cheol"
    }

if (player.age && player.age < 10){}

type Age = number
type Player = {
    name: String;
    age?: Age
}
const playerLynn : Player = {
    name : "Lynn",
    age : 12
}

function playerMaker(name:string) : Player{
    return {
        name
    }
}
const playerAllow = (name:string) :Player => ({name})
const nico = playerMaker("nico")
nico.age = 12