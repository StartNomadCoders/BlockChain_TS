abstract class User {
    constructor(
        protected firstName :string,
        protected lastName : string
    ) {}
    //추상 클래스는 이걸 상속받는 다른 클래스가 가질 property 와 메소드를 지정하도록 함
    abstract sayHi(name :string):string
    abstract fullName():string
}

class Player extends User {
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string): string {
        return `Hello ${name} My name is ${this.fullName()}`;
    }
}

//new User() // 추상클래스라서 불가능

interface User1 {
    firstName : string
    lastName : string
    sayHi(name:string) :string
    fullName():string
}

interface Human {
    health:number
}
class Player1 implements User1,Human{
    constructor(//implement로 만들때 private로 못만듬
        public firstName:string,
        public lastName:string,
        public health:number
    ) {}
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string): string {
        return `Hello ${name} My name is ${this.fullName()}`;
    }
}

function makeUser(user:User1){
    return {
        firstName:'nico',
        lastName:'choel',
        fullName: () => 'xx',
        sayHi : (n)=> n
    }
}

const kimchi ={
    맛있어 : true
}

type sss = {
    str:boolean[]
}