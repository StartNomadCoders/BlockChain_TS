// 오버로딩은 함수가 서로다른 여러개의 call signatures를 가지고 있을때 발생
type Add = {
    (a:number, b:number) : number
    (a:number, b:string) : number
}

const add:Add = (a,b) => {
    if(typeof b ==='string')return a
    return a+b
}

type Config = {
    path: string,
    state : object
}
type Push = {
    (path:string) : void
    (config : Config) : void
}

const push :Push = (config) =>{
    if(typeof config === 'string') console.log(config)
    else{
        console.log(config.path, config.state)
    }
}

type Add1 = {
    (a:number,b:number) : number
    (a:number,b:number,c:number) : number
}

const add1 = (a,b,c?:number) => {
    if(c) return a+b+c
    return a+b
}
// c?:number => 선택사항이니 표시해줘야됨

add1(1,2)
add1(1,2,3)