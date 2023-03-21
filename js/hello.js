"use strict"
// let a = [1, 2, 3, 4, 5];
// let f = a.reduce((a, b) => {
//     (b % 2) ? a.push(b) : a
//     return a
// },[]);
//
// console.log("f값 확인" + f);

let inputA = 5
const resolveAfterNSconds = (n) => {
    return new Promise((res,_) => setTimeout(()=> res(`${n}초가 지났습니다.`),n*1000))
}

resolveAfterNSconds(inputA).then((text) => {
   console.log(text)
});
setTimeout(() => console.log("2초 후에 실행됨"), 2000)
