import axios from "axios";
import type { Customer } from "../types/customer";

const api = axios.create({
    baseURL: "https://k305jhbh09.execute-api.ap-southeast-1.amazonaws.com",
});

export const getCustomers = async (): Promise<Customer[]> => {
    const res = await api.get("/customers");
    return res.data?.data || res.data || [];
};

export const createCustomer = async (data: Partial<Customer>) => {
    return api.post("/customers", data);
};

export const updateCustomer = async (id: string, data: Partial<Customer>) => {
    return api.put(`/customers/${id}`, data);
};

export const deleteCustomer = async (id: string) => {
    return api.delete(`/customers/${id}`);
};