interface Employee {
    id: number
    name: string
    salary: number

    getId(): number
    getName(): string
    setName(name: string): void
    getSalary(): number
    setSalary(salary: number): void
    calculateSalary(): number
}



class Developer implements Employee {
    id: number
    name: string
    salary: number
    private overtimeHours: number

    constructor(id: number, name: string, salary: number, overtimeHours: number) {
        if (salary <= 0) throw new Error("Salary must be > 0")
        this.id = id
        this.name = name
        this.salary = salary
        this.overtimeHours = overtimeHours
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    getSalary(): number {
        return this.salary
    }

    setSalary(salary: number): void {
        if (salary <= 0) throw new Error("Salary must be > 0")
        this.salary = salary + this.overtimeHours * 50_000
    }

    calculateSalary(): number {
        return this.salary
    }
}



class Manager implements Employee {
    id: number;
    name: string;
    salary: number;
    private teamSize: number;

    constructor( id: number,name: string,salary: number,teamSize: number,) {
        if (salary <= 0) throw new Error("Salary must be > 0")
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.teamSize = teamSize;

    }

    calculateSalary(): number {
        return this.salary
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getSalary(): number {
        return this.salary
    }

    setName(name: string): void {
        this.name = name
    }

    setSalary(salary: number): void {
        if (salary <= 0) throw new Error("Salary must be > 0")
        this.salary = salary + this.teamSize * 200_000
    }

}


const employees: Employee[] = [
    new Developer(1, "An", 10000000, 10),
    new Manager(2, "Binh", 15000000, 5)
]

employees.forEach(e => {
    e.setSalary(e.getSalary())
    console.log(e.getName(), e.calculateSalary())
})


