import {
    Dialog, DialogTitle, DialogContent,
    TextField, Button, DialogActions, Autocomplete
} from "@mui/material";
import { useState, useEffect } from "react";

const categories = ["Laptop", "Phone", "Tablet"];

export default function ProductFormModal({
                                             open,
                                             onClose,
                                             onSubmit,
                                             initialData
                                         }: any) {

    const [form, setForm] = useState<any>({});

    useEffect(() => {
        setForm(initialData || {});
    }, [initialData]);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                {initialData ? "Edit" : "Add"} Product
            </DialogTitle>

            <DialogContent>
                <TextField
                    fullWidth label="Name" sx={{ mb: 2 }}
                    value={form.name || ""}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <TextField
                    fullWidth label="Price" type="number" sx={{ mb: 2 }}
                    value={form.price || ""}
                    onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                />

                {/* 🔥 AUTOCOMPLETE */}
                <Autocomplete
                    options={categories}
                    value={form.category || null}
                    onChange={(_, value) =>
                        setForm({ ...form, category: value })
                    }
                    renderInput={(params) => (
                        <TextField {...params} label="Category" />
                    )}
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={() => onSubmit(form)} variant="contained">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}