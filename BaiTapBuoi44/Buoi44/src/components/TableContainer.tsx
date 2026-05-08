import React from "react";
import OrderRow from "./OrderRow";
import type { Order } from "../types/order";

interface TableContainerProps {
    orders: Order[];
}

function TableContainer({ orders }: TableContainerProps) {
    console.log("Render TableContainer");

    return (
        <div className="table-wrapper">
            <h2>Danh sách đơn hàng</h2>

            <table>
                <thead>
                <tr>
                    <th>Mã ĐH</th>
                    <th>Khách hàng</th>
                    <th>Ngày tạo</th>
                    <th>Giá trị</th>
                    <th>Trạng thái</th>
                </tr>
                </thead>

                <tbody>
                {orders.map((order) => (
                    <OrderRow key={order.id} order={order} />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default React.memo(TableContainer);