import { useState } from "react";
import "./index.css";

export default function App() {
    const [students, setStudents] = useState([
        { id: 1, name: "Nguyen Van A", age: 15, class: "10A1", address: "Ha Noi" },
        { id: 2, name: "Tran Thi B", age: 16, class: "10A2", address: "Hai Phong" },
        { id: 3, name: "Le Van C", age: 15, class: "10A1", address: "Da Nang" },
        { id: 4, name: "Pham Thi D", age: 17, class: "11A1", address: "Ha Noi" },
        { id: 5, name: "Hoang Van E", age: 16, class: "10A3", address: "Nam Dinh" },
        { id: 6, name: "Do Thi F", age: 15, class: "10A2", address: "Thai Binh" },
        { id: 7, name: "Bui Van G", age: 17, class: "11A2", address: "Hai Duong" },
        { id: 8, name: "Vu Thi H", age: 16, class: "10A3", address: "Ha Noi" },
        { id: 9, name: "Dang Van I", age: 15, class: "10A1", address: "Bac Ninh" },
        { id: 10, name: "Ngo Thi K", age: 17, class: "11A1", address: "Ha Nam" },
    ]);

    // 👉 XÓA học sinh
    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa?")) {
            setStudents(prev => prev.filter(s => s.id !== id));
        }
    };

    // 👉 Edit (demo)
    const handleEdit = (student) => {
        alert("Edit: " + student.name);
    };

    return (
        <div className="container">
            <h2>Quản lý học sinh</h2>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Lớp</th>
                    <th>Địa chỉ</th>
                    <th>Hành động</th>
                </tr>
                </thead>

                <tbody>
                {students.map((s) => (
                    <tr key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.age}</td>
                        <td>{s.class}</td>
                        <td>{s.address}</td>
                        <td>
                            <button
                                className="btn edit"
                                onClick={() => handleEdit(s)}
                            >
                                Edit
                            </button>

                            <button
                                className="btn delete"
                                onClick={() => handleDelete(s.id)}
                            >
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}