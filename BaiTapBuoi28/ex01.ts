



interface  partTime {
    id: number
    name: string
    salary: number
    hourssWorked: number
}

const  partTime = {
    id: 2,
    name: "Binh",
    salary: 20,
    hourssWorked: 40
}

const updatePartTime = {
    ...partTime,
    hourssWorked: 45
}


console.log(updatePartTime)











