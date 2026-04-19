import axios from "axios";

const api = axios.create({
    baseURL: "https://k305jhbh09.execute-api.ap-southeast-1.amazonaws.com",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const getProducts = async () => {
    const res = await api.get("/products");
    return res.data?.data || res.data || [];
};

export const createProduct = (data: any) =>
    api.post("/products", data);

export const updateProduct = (id: string, data: any) =>
    api.put(`/products/${id}`, data);

export const deleteProduct = (id: string) =>
    api.delete(`/products/${id}`);