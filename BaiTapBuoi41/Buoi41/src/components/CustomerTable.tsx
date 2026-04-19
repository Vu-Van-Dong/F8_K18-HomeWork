import type { Customer } from "../types/customer";

interface Props {
    data: Customer[];
    onEdit: (c: Customer) => void;
    onDelete: (id: string) => void;
}

export default function CustomerTable({ data, onEdit, onDelete }: Props) {
    return (
        <table>
            <thead>
            <tr>
                <th>Tên</th>
                <th>Email</th>
                <th>Hạng</th>
                <th>Đơn</th>
                <th>Chi tiêu</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
            {data.map((c) => (
                <tr key={c.id}>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.rank}</td>
                    <td>{c.orders}</td>
                    <td>{c.totalSpending}</td>
                    <td>
                        <button onClick={() => onEdit(c)}>Sửa</button>
                        <button onClick={() => onDelete(c.id)}>Xóa</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}