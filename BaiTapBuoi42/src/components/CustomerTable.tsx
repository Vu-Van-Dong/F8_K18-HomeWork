import type { Customer } from "../types/customer";
import {
    Table, TableHead, TableRow, TableCell,
    TableBody, IconButton, Paper
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

interface Props {
    data: Customer[];
    onEdit: (c: Customer) => void;
    onDelete: (id: string) => void;
}

export default function CustomerTable({ data, onEdit, onDelete }: Props) {
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Tên</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Hạng</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((c) => (
                        <TableRow key={c.id}>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>{c.email}</TableCell>
                            <TableCell>{c.phone}</TableCell>
                            <TableCell>{c.rank}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => onEdit(c)}>
                                    <Edit />
                                </IconButton>
                                <IconButton onClick={() => onDelete(c.id)}>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}