export interface Customer {
    id: string;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    rank?: "GOLD" | "SILVER" | "BRONZE";
    orders?: number;
    totalSpending?: number;
}