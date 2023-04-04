interface Config1 {
    url:string
}

declare module "myPackage"{
    function init(config:Config1):boolean
    function exit(code:number):number
}