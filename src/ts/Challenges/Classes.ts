interface Word<T> {
    term : T,
    definition : T
}

class Dict<T>{
    public dictionary : Word<T>[] = []

    add (term:T,definition:T){
        const add = {
            term : term,
            definition : definition
        }
        return this.dictionary.push(add)
    }
    get(term:T){
        const getData = this.dictionary.filter(v =>v.term===term)
        return getData.length > 0 ? getData.map(v=>v.definition) : '정의를 찾을수없습니다'
    }
    delete(term: T):void{
        const del = this.dictionary.reduce((a:number[],c:Word<T>,i:number) => {
            if(c.term === term){
                a.push(i)
            }
            return a },[])
        for (let i = 0; i < del.length; i++) {
            delete this.dictionary[del[i]]
        }
    }
}
const d = new Dict()
d.add(1234,'매워요')
d.add("1234",'매워요')
d.delete(1234)
d.add("김치는",'맛있어용')
console.log(d.dictionary)

