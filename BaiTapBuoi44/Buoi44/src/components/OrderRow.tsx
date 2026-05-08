import React from "react";
import type { Order } from "../types/order";

interface OrderRowProps {
    order: Order;
}

function formatMoney(value: number): string {
    return value.toLocaleString("vi-VN") + " đ";
}

function OrderRow({ order }: OrderRowProps) {
    console.log("Render OrderRow:", order.id);

    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.date}</td>
            <td className="price">{formatMoney(order.value)}</td>
            <td>
        <span className={`status ${order.status.replaceAll(" ", "-")}`}>
          {order.status}
        </span>
            </td>
        </tr>
    );
}

export default React.memo(OrderRow);