import { Chip, TableCell, TableRow } from "@mui/material";
import React from "react";
import type { OrderI } from "../types";

interface Props {
    order: OrderI;
}

function OrderRow({ order }: Props) {
    console.log("Render OrderRow:", order.id);

    const formatMoney = (value: number) => {
        return value.toLocaleString("vi-VN") + " đ";
    };

    const getColor = () => {
        if (order.status === "Hoàn thành") return "success";
        if (order.status === "Đang xử lý") return "warning";
        return "error";
    };

    return (
        <TableRow>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>
                {formatMoney(order.value)}
            </TableCell>
            <TableCell>
                <Chip
                    label={order.status}
                    color={getColor()}
                    size="small"
                />
            </TableCell>
        </TableRow>
    );
}

export default React.memo(OrderRow);