"use strict"
let a = [1, 2, 3, 4, 5];
let f = a.reduce((a, b) => {
    (b % 2) ? a.push(b) : a
    return a
},[]);

console.log("f값 확인" + f);
