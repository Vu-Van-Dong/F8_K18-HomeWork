import { useEffect, useState } from "react";
import type { Customer } from "../types/customer";
import {
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
} from "../api/customerApi";

import CustomerTable from "../components/CustomerTable";
import CustomerFormModal from "../components/CustomerFormModal";
import { Button, Container, Typography } from "@mui/material";

export default function CustomersPage() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Customer | null>(null);

    const load = async () => {
        const data = await getCustomers();
        setCustomers(data);
    };

    useEffect(() => {
        load();
    }, []);

    const handleCreate = async (data: Partial<Customer>) => {
        await createCustomer(data);
        setOpen(false);
        load();
    };

    const handleUpdate = async (data: Partial<Customer>) => {
        if (!editing) return;
        await updateCustomer(editing.id, data);
        setEditing(null);
        setOpen(false);
        load();
    };

    const handleDelete = async (id: string) => {
        if (confirm("Xóa?")) {
            await deleteCustomer(id);
            load();
        }
    };

    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Customer Management
            </Typography>

            <Button
                variant="contained"
                onClick={() => {
                    setEditing(null);
                    setOpen(true);
                }}
            >
                + Thêm khách hàng
            </Button>

            <CustomerTable
                data={customers}
                onEdit={(c) => {
                    setEditing(c);
                    setOpen(true);
                }}
                onDelete={handleDelete}
            />

            <CustomerFormModal
                open={open}
                initialData={editing}
                onClose={() => {
                    setOpen(false);
                    setEditing(null);
                }}
                onSubmit={editing ? handleUpdate : handleCreate}
            />
        </Container>
    );
}


