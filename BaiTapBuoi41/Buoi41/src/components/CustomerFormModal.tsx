import { useState, useEffect } from "react";
import type { Customer } from "../types/customer";

interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: Partial<Customer>) => void;
    initialData?: Customer | null;
}

export default function CustomerFormModal({
                                              open,
                                              onClose,
                                              onSubmit,
                                              initialData,
                                          }: Props) {
    const [form, setForm] = useState<Partial<Customer>>({});

    useEffect(() => {
        setForm(initialData || {});
    }, [initialData]);

    if (!open) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>{initialData ? "Sửa" : "Thêm"} khách hàng</h3>

                <input
                    placeholder="Tên"
                    value={form.name || ""}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    placeholder="Email"
                    value={form.email || ""}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    placeholder="SĐT"
                    value={form.phone || ""}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                <div style={{ marginTop: 10 }}>
                    <button onClick={() => onSubmit(form)}>Lưu</button>
                    <button onClick={onClose}>Hủy</button>
                </div>
            </div>
        </div>
    );
}