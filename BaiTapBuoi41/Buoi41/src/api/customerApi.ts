import axios from "axios";
import type { Customer } from "../types/customer";

const BASE_URL = "https://k305jhbh09.execute-api.ap-southeast-1.amazonaws.com";

export const getCustomers = async (): Promise<Customer[]> => {
    const res = await axios.get(`${BASE_URL}/customers`);
    return res.data?.data || res.data || [];
};

export const createCustomer = async (data: Partial<Customer>) => {
    return axios.post(`${BASE_URL}/customers`, data);
};

export const updateCustomer = async (id: string, data: Partial<Customer>) => {
    return axios.put(`${BASE_URL}/customers/${id}`, data);
};

export const deleteCustomer = async (id: string) => {
    return axios.delete(`${BASE_URL}/customers/${id}`);
};