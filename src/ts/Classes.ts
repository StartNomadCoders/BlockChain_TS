class Player {
    constructor(
        private firstName :string,
        private lastName:string,
        public nickName:string
    ){}
}
const nico = new Player("nico",'las','니꼬')

//nico.firstName //private이기때문에 반응 x

abstract class User { // 추상클래스는 오직 다른 클래스 상속을 위한 클래스
    constructor(
        private firstName :string,
        private lastName:string,
        protected nickName:string

    ){}
    abstract getNictName(): void
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
class Player1 extends User{
    getNictName() {
         console.log(this.nickName) //protected는 해당 클래스내에서는 접근가능
    }
}
const nico1 = new Player1("nico",'las','니꼬')
// nico1.nickName protected는 해당 클래스내에서는 접근가능
nico1.getFullName()
nico1.getNictName()

console.log('테스트'+nico1.getFullName()+123123)

console.log('안녕하세요')
console.log(nico1.getNictName())