interface Word<T> {
    term : T,
    definition : T
}

class Dict<T>{
    public dictionary : Word<T>[] = []

    add (term:T,definition:T){
        if(this.dictionary.filter(v=>v.term === term).length < 1){
            const add = {
                term : term,
                definition : definition
            }
            return this.dictionary.push(add)
        }else{
            return "이미등록된 단어입니다."
        }
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

    update(term : T,newDict : T){
        const idx =this.dictionary.findIndex((w)=>w.term === term)
        return this.dictionary[idx].definition = newDict
    }
    showAll(){
        return this.dictionary
    }

    count(){
        return this.dictionary.length
    }

    upsert(term:T,definition:T) {
        if(this.dictionary.filter(v=>v.term === term).length < 1){
            const add = {
                term : term,
                definition : definition
            }
            return this.dictionary.push(add)
        }else{
            return this.update(term,definition)
        }
    }
    exists(term:T){
        return this.dictionary.filter(v=> v.term === term).length > 0 ? "정의된 단어입니다." : "정의되지않은 단어입니다."
    }
    bulkAdd(arr:Word<T>[]){
        arr.forEach((word) => {
            this.add(word.term, word.definition);
        });
    }
    bulkDelete(arr:T[]){
        arr.forEach((word)=> {
            this.delete(word)
        })
    }
}
const d = new Dict()
d.add("김치는",'맛있어용123')
d.add(1234,'매워요')
//d.delete(1234)
d.add("김치는",'맛있어용업데이트')
d.add(1234,'업데이트매워요')
d.bulkAdd([{ term: 'rrr', definition: 'rrr' }, { term: '213', definition: '4124' }])
d.bulkDelete(["rrr","김치는"])
console.log(d.showAll())
console.log(d.exists(1234))
