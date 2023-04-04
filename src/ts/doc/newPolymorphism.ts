/*
*  다형성 : 다른모양의 코드를 가질 수 있게 해주는 것 => 제네릭
* */


interface SStorage<T> {
    [key:string] :T
}
class LocalStorage<T> {
    private storage :SStorage<T> = {}

    set(key:string,value:T){
        this.storage[key] = value
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringStorage = new LocalStorage<string>()
stringStorage.get("str")
stringStorage.set("hello","how are you")
const booleanStorage = new LocalStorage<boolean>()
booleanStorage.get('xxx')
booleanStorage.set('hi',true)