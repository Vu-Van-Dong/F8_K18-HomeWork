export type Rank = "GOLD" | "SILVER" | "BRONZE";

export interface Customer {
    id: string;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    rank: Rank;
    orders: number;
    totalSpending: number;
}