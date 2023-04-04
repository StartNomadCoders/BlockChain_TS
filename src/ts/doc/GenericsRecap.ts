type SuperPrint = <T>(a:T[]) => T

//any를 사용하지않는이유
type SuperPrint1 = (a:any[]) => any

const SuperPrint1:SuperPrint1= (a) => a[0]

const a = SuperPrint1([1,2,'a','b'])
a.toUpperCase() // any이기때문에 허용됨

type SuperPrint2 = <T,M>(a:T[],b:M) => T

const superPrint2:SuperPrint2 = (a) => a[0]
const b = superPrint2([1,2,4],'')