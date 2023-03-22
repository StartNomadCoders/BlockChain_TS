const nico = {
    nickName:"nick"
}

nico.hello() // error

[1,2,3,4,5] + false //error

function divide(a,b) {
    return a/ b
}

divide("hello") //error

const player ={
    age : 12
}

player.age = false // error

//이런 보호장치가 생기는것은 타입추론