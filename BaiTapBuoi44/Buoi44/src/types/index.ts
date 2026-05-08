export type OrderStatus = "Hoàn thành" | "Đang xử lý" | "Đã hủy";

export interface OrderI {
    id: string;
    customer: string;
    date: string;
    value: number;
    status: OrderStatus;
}