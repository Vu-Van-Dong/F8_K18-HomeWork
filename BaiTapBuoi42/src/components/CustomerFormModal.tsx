import { useEffect, useState } from "react";
import type { Customer } from "../types/customer";

import {
    Dialog, DialogTitle, DialogContent,
    TextField, DialogActions, Button
} from "@mui/material";

interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: Partial<Customer>) => void;
    initialData: Customer | null;
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

    const handleChange = (key: keyof Customer, value: any) => {
        setForm({ ...form, [key]: value });
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                {initialData ? "Sửa khách hàng" : "Thêm khách hàng"}
            </DialogTitle>

            <DialogContent>
                <TextField
                    fullWidth
                    margin="dense"
                    label="Tên"
                    value={form.name || ""}
                    onChange={(e) => handleChange("name", e.target.value)}
                />

                <TextField
                    fullWidth
                    margin="dense"
                    label="Email"
                    value={form.email || ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                />

                <TextField
                    fullWidth
                    margin="dense"
                    label="Phone"
                    value={form.phone || ""}
                    onChange={(e) => handleChange("phone", e.target.value)}
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Hủy</Button>
                <Button
                    variant="contained"
                    onClick={() => onSubmit(form)}
                >
                    Lưu
                </Button>
            </DialogActions>
        </Dialog>
    );
}