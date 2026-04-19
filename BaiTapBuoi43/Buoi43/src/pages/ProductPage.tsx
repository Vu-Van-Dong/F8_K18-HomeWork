import { useEffect, useState } from "react";
import {
    getProducts, createProduct,
    updateProduct, deleteProduct
} from "../api/productApi";

import ProductFormModal from "../components/ProductFormModal";
import {
    Button, Table, TableHead, TableRow,
    TableCell, TableBody, Container
} from "@mui/material";

export default function ProductPage({ onLogout }: any) {
    const [products, setProducts] = useState<any[]>([]);
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<any>(null);

    const load = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => { load(); }, []);

    return (
        <Container>
            <Button onClick={() => {
                localStorage.removeItem("token");
                onLogout();
            }}>
                Logout
            </Button>

            <Button onClick={() => setOpen(true)}>
                + Add
            </Button>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {products.map(p => (
                        <TableRow key={p.id}>
                            <TableCell>{p.name}</TableCell>
                            <TableCell>{p.price}</TableCell>
                            <TableCell>{p.category}</TableCell>
                            <TableCell>
                                <Button onClick={() => {
                                    setEditing(p);
                                    setOpen(true);
                                }}>Edit</Button>

                                <Button onClick={() => {
                                    deleteProduct(p.id);
                                    load();
                                }}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <ProductFormModal
                open={open}
                initialData={editing}
                onClose={() => {
                    setOpen(false);
                    setEditing(null);
                }}
                onSubmit={async (data: any) => {
                    if (editing) {
                        await updateProduct(editing.id, data);
                    } else {
                        await createProduct(data);
                    }
                    setOpen(false);
                    setEditing(null);
                    load();
                }}
            />
        </Container>
    );
}