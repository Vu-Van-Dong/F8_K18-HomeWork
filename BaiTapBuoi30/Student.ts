export interface StudentI {
    getName: () => string
    setName: (name: string) => void
    update: (msg: string) => void   // tên chuẩn design pattern
    receiveMsg: (msg: string) => void // alias dễ hiểu
}

export class Student implements StudentI {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    update(msg: string) {
        console.log(` Học sinh ${this.getName()} nhận được: ${msg}`)
    }

    receiveMsg(msg: string) {
        this.update(msg)
    }
}
