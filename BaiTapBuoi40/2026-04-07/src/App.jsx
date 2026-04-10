import { useState } from "react";

const App = () => {
    console.log('re-render')

    const [num, setNum] = useState(1000)

    // 👉 Đổi sang useState
    const [students, setStudents] = useState([
        { id: 1, name: 'Nguyen Van A'},
        { id: 2, name: 'Nguyen Van B'},
        { id: 3, name: 'Nguyen Van C1'},
        { id: 6, name: 'Nguyen Van D'},
        { id: 5, name: 'Nguyen Van E'},
    ])

    const name = 'f8'

    const onClickBtn = () => {
        setNum(num + 1)
        console.log('num', num)
    }

    // 👉 Hàm xoá
    const handleDelete = (id) => {
        setStudents(prev => prev.filter(student => student.id !== id))
    }

    return (
        <>
            <ul>
                {
                    students.map((student) => {
                        return (
                            <li key={student.id}>
                                {student.name}

                                {/* 👉 Nút xoá */}
                                <button
                                    style={{ marginLeft: "10px" }}
                                    onClick={() => {
                                        if (window.confirm("Bạn có chắc muốn xoá?")) {
                                            handleDelete(student.id)
                                        }
                                    }}
                                >
                                    Xoá
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

            <hr/>

            <h1>hihihihi</h1>
            <h2>hihihihi</h2>
            <h3>num: {num}</h3>
            <h3>name: {name}</h3>

            <button onClick={onClickBtn}>click me</button>
        </>
    )
}

export default App