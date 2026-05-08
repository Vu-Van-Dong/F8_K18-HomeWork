import "./App.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { HeaderBar, TableContainer } from "./components";
import { useMemo, useState } from "react";
import type { OrderI } from "./types";

function App() {
    const orders: OrderI[] = [
        {
            id: "ORD-001",
            customer: "Nguyễn Văn A",
            date: "2023-10-01",
            value: 1500000,
            status: "Hoàn thành",
        },
        {
            id: "ORD-002",
            customer: "Trần Thị B",
            date: "2023-10-05",
            value: 500000,
            status: "Đang xử lý",
        },
        {
            id: "ORD-003",
            customer: "Lê Văn C",
            date: "2023-10-10",
            value: 2500000,
            status: "Hoàn thành",
        },
        {
            id: "ORD-004",
            customer: "Phạm Thị D",
            date: "2023-10-12",
            value: 800000,
            status: "Đã hủy",
        },
        {
            id: "ORD-005",
            customer: "Hoàng Văn E",
            date: "2023-10-15",
            value: 3200000,
            status: "Hoàn thành",
        },
        {
            id: "ORD-006",
            customer: "Vũ Thị F",
            date: "2023-10-18",
            value: 1200000,
            status: "Hoàn thành",
        },
        {
            id: "ORD-007",
            customer: "Đặng Văn G",
            date: "2023-10-22",
            value: 400000,
            status: "Đang xử lý",
        },
        {
            id: "ORD-008",
            customer: "Bùi Thị H",
            date: "2023-10-25",
            value: 5500000,
            status: "Hoàn thành",
        },
    ];

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [counter, setCounter] = useState(0);

    const filteredOrders = useMemo(() => {
        console.log("Đang lọc đơn hàng...");

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

    const totalRevenue = useMemo(() => {
        console.log("Đang tính tổng doanh thu...");

        return filteredOrders
            .filter((order) => order.status === "Hoàn thành")
            .reduce((total, order) => total + order.value, 0);
    }, [filteredOrders]);

    const formatMoney = (value: number) => {
        return value.toLocaleString("vi-VN") + " đ";
    };

    return (
        <>
            <HeaderBar />

            <Box className="container">
                <Button
                    variant="contained"
                    onClick={() => setCounter(counter + 1)}
                    sx={{ mb: 2 }}
                >
                    Counter: {counter}
                </Button>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Box className="statCard blueCard">
                            <Typography color="text.secondary">Số lượng đơn hàng</Typography>
                            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                                {filteredOrders.length}{" "}
                                <span className="unit">đơn</span>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Box className="statCard greenCard">
                            <Typography color="text.secondary">
                                Tổng doanh thu (Hoàn thành)
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#16a34a" }}>
                                {formatMoney(totalRevenue)}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box className="filterBox">
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Bộ lọc theo ngày
                    </Typography>

                    <Box className="filterRow">
                        <TextField
                            label="Từ ngày"
                            type="date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />

                        <TextField
                            label="Đến ngày"
                            type="date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />

                        <Button
                            onClick={() => {
                                setFromDate("");
                                setToDate("");
                            }}
                        >
                            Xóa bộ lọc
                        </Button>
                    </Box>
                </Box>

                <TableContainer orders={filteredOrders} />
            </Box>
        </>
    );
}

export default App;