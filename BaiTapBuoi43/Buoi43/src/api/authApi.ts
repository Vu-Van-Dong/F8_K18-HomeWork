import axios from "axios";

const api = axios.create({
    baseURL: "https://k305jhbh09.execute-api.ap-southeast-1.amazonaws.com",
});

export const loginApi = async (email: string, password: string) => {
    // fake login theo yêu cầu đề
    if (email === "vuvandong@test.com" && password === "12345678") {
        return {
            accessToken: "fake-token-123",
        };
    }

    // fallback gọi API thật (nếu cần)
    const res = await api.post("/auth/login", { email, password });
    return res.data;
};