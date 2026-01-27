
interface Employee {
    id: number
    name: string
    salary: number
    getSalary:() => number
}

class FullTimeEmployee implements  Employee {
    id: number
    name: string
    salary: number
    getSalary(): number {
        return this.salary
    }

}

class PartTimeEmployee implements  Employee {
    id: number
    name: string
    salary: number
    hoursWorsked: number

    getSalary(): number {
        return this.salary  * this.hoursWorsked
    }

}


function calculateTotalSalary(employees: Employee[]) :number{
    let total=0

    for(const employee of employees){
        total+=employee.getSalary()
    }

    return total
}


const fullTime = new FullTimeEmployee()
fullTime.id = 1
fullTime.name = 'Dong'
fullTime.salary=2000

const partTime = new PartTimeEmployee()
partTime.id = 1
partTime.name = 'Quang'
partTime.salary=2500
partTime.hoursWorsked = 10


const employees: Employee[] = [partTime,fullTime]

const totalSalary= calculateTotalSalary(employees)
console.log(totalSalary)

















