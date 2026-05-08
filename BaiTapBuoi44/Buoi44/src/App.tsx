import { useMemo, useState } from "react";
import "./index.css";

import { orders } from "./data/orders";
import TableContainer from "./components/TableContainer";

export default function App() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // state không liên quan
  const [counter, setCounter] = useState(0);

  // useMemo lọc dữ liệu
  const filteredOrders = useMemo(() => {
    console.log("Đang filter dữ liệu...");

    return orders.filter((order) => {
      const orderDate = new Date(order.date);

      if (fromDate && orderDate < new Date(fromDate)) {
        return false;
      }

      if (toDate && orderDate > new Date(toDate)) {
        return false;
      }

      return true;
    });
  }, [fromDate, toDate]);

  // useMemo tính tổng doanh thu
  const totalRevenue = useMemo(() => {
    console.log("Đang tính tổng tiền...");

    return filteredOrders
        .filter((order) => order.status === "Hoàn thành")
        .reduce((sum, order) => sum + order.value, 0);
  }, [filteredOrders]);

  function formatMoney(value: number): string {
    return value.toLocaleString("vi-VN") + " đ";
  }

  return (
      <div className="container">
        <h1>Order Dashboard</h1>

        <button
            className="counter-btn"
            onClick={() => setCounter(counter + 1)}
        >
          Counter: {counter}
        </button>

        {/* thống kê */}
        <div className="stats">
          <div className="card blue">
            <p>Số lượng đơn hàng</p>
            <h2>{filteredOrders.length} đơn</h2>
          </div>

          <div className="card green">
            <p>Tổng doanh thu (Hoàn thành)</p>
            <h2>{formatMoney(totalRevenue)}</h2>
          </div>
        </div>

        {/* filter */}
        <div className="filter-box">
          <h2>Bộ lọc theo ngày</h2>

          <div className="filter-row">
            <div>
              <label>Từ ngày</label>

              <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
              />
            </div>

            <div>
              <label>Đến ngày</label>

              <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
              />
            </div>

            <button
                className="clear-btn"
                onClick={() => {
                  setFromDate("");
                  setToDate("");
                }}
            >
              Xóa bộ lọc
            </button>
          </div>
        </div>

        {/* bảng */}
        <TableContainer orders={filteredOrders} />
      </div>
  );
}