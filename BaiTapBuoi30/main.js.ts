import {ClassRoom} from "./ClassRoom";
import {Student} from "./Student";

const jsClass = new ClassRoom("JS Cơ Bản")

const an = new Student("An")
const binh = new Student("Bình")
const chi = new Student("Chi")

jsClass.addStudent(an)
jsClass.addStudent(binh)
jsClass.addStudent(chi)

jsClass.postAnnouncement("Mai kiểm tra OOP")
