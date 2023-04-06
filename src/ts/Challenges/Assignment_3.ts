type Arr = {
    [arr: string]: string | number;
    length: number;
};

function last(arr: Arr){
    return arr[arr.length - 1];
}

type Item = string

type Arr1 = {
    arr1:string[]
}
function prepend(arr1:Arr1, item:Item):Array<string|Item>{
    return [item,...arr1.arr1]
}

type Arr2 = {
    arr1 : string[],
    concat :  (arr2:Arr2)  => string[];
}
function mix(arr1:Arr2,arr2:Arr2){
    return arr1.concat(arr2)
}

interface Arr3 {
    arr : string[],
    length : number
}
function count(arr:Arr3){
    return arr.length
}
type Arr4<T> = {
    arr : T[],
    item : T,
    indexOf : (arr:Arr4<T>) => number
}

const test4:Arr4<string> = {
    arr : ["1","2","3"],
    item : "2",
    indexOf : (arr : Arr4<string>) => arr.arr.indexOf(arr.item)
}

function findIndex(arr:string[], item:string) {
    return arr.indexOf(item) !== -1 ? arr.indexOf(item) : null
}

console.log(findIndex(test4.arr,test4.item))


type Arr5 = {
    arr: string[],
    start: number,
    end: number,
    slice: () => string[]
}

function slice(arr: string[], startIndex: number, endIndex?: number) {
    return arr.slice(startIndex, endIndex !== undefined ? endIndex : arr.length);
}


const arr5:Arr5 = {
    arr : ['1','2','3','4','5'],
    start : 1,
    end : 4,
    slice : () => {
        return slice(arr5.arr,arr5.start,arr5.end) // 화살표함수이기때문에 this 접근 못함
    }
}

const arr6:Arr5 = {
    arr : ['1','2','3','4','5'],
    start : 1,
    end : 4,
    slice: function() {
        return slice(this.arr, this.start, this.end); // function 이기때문에 this.참조
    }
}

console.log("slice: " +slice(['1','2','3','4','5'],1,4))
console.log("arr5: " +arr5.slice())
