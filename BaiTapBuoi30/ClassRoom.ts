import type { StudentI } from "./student"
import {Student} from "./Student";

export interface ClassRoomI {
    getName: () => string
    setName: (name: string) => void

    addStudent: (student: Student) => void
    removeStudent: (studentName: string) => void
    notify: (msg: string) => void
    postAnnouncement: (msg: string) => void
}

export class ClassRoom implements ClassRoomI {
    private name: string
    private students: StudentI[]

    constructor(name: string) {
        this.name = name
        this.students = []
    }

    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    addStudent(student: Student): void {
        this.students.push(student)
    }

    removeStudent(studentName: string) {
        const index = this.students.findIndex(s => s.getName() === studentName)
        if (index === -1) {
            console.error(`Học sinh ${studentName} không tồn tại`)
            return
        }
        this.students.splice(index, 1)
    }

    notify(msg: string) {
        this.students.forEach(student => student.update(msg))
    }

    postAnnouncement(msg: string) {
        if (!msg.trim()) {
            console.error("Thông báo không được rỗng")
            return
        }

        console.log(`\n[Lớp ${this.getName()}] Thông báo mới:\n${msg}`)
        this.notify(msg)
    }
}
