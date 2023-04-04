type Nickname = string
type healthBar = number
type Friend =Array<string>

type Player = {
    nickName : Nickname,
    healthBar : healthBar
}

const nico:Player ={
    nickName : 'nico',
    healthBar : 10
}
type Food = string;
const kimchi : Food = 'delicious'

//특정값을 사용할수 있음
type Team = 'red' | 'yellow' | 'green'
type Health = 0 | 5 | 10
type Player1 = {
    nickName : string,
    team : Team
    health : Health
}

const nico1 : Player1 = {
    nickName : 'nico',
    team : 'red',
    health : 5
}

//Interface
//인터페이스는 오직 오브젝트를 만드는데만 사용
// interface Hello = string error
interface Player2 {
    nickName : 'nico',
    team : 'red',
    health : 5
}
const nico2 : Player2 = {
    nickName : 'nico',
    team : 'red',
    health : 5
}

interface User{
    name :string
}
interface Players1 extends User {

}
const cheol : Players1 = {
    name : 'cheol'
}

type User1 = {
    name : string
}

type Players2 = User1 & {

}

interface User2{
    name : string
}

interface User2 {
    lastName : string
}

const chul :User2 = {
    name : 'chul',
    lastName : 'kim'
}