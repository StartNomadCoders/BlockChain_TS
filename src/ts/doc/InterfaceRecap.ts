type Player = {
    name :string
}
const player:Player = {
    name : "cheol"
}

interface PlayerB {
    name : string
}
const playerB:PlayerB = {
    name : "cheol"
}

// 인터페이스와 타입선언의 차이점
/*타입의 상속방법*/
type PlayerAA = Player & {
    lastName :string
}
const playerA:PlayerAA = {
    name : "cheol",
    lastName : "Kim"
}

interface PlayerBB extends PlayerB{
    lastname : string
}

interface PlayerBB {
    health? : number
}

const playerBB :PlayerBB = {
    name : "cheol",
    lastname : 'kim'
}

type PlayersA = {
    firstName : string
}
interface PlayersB {
    firstName : string
}

class User implements PlayersA {
    constructor(
       public firstName : string
    ) {}
}