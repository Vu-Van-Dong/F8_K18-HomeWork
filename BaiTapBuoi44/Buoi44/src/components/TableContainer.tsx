import React from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import OrderRow from "./OrderRow";
import type { OrderI } from "../types";

interface Props {
    orders: OrderI[];
}

function TableContainer({ orders }: Props) {
    console.log("Render TableContainer");

    return (
        <Box className="tableBox">
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Danh sách đơn hàng
            </Typography>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Mã ĐH</TableCell>
                        <TableCell>Khách hàng</TableCell>
                        <TableCell>Ngày tạo</TableCell>
                        <TableCell>Giá trị</TableCell>
                        <TableCell>Trạng thái</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {orders.map((order) => (
                        <OrderRow key={order.id} order={order} />
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}

export default React.memo(TableContainer);