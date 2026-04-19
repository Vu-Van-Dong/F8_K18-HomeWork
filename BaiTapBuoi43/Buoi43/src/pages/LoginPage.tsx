import { useState } from "react";
import { loginApi } from "../api/authApi";
import { TextField, Button, Container, Typography } from "@mui/material";

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await loginApi(email, password);
            localStorage.setItem("token", res.accessToken);
            onLogin();
        } catch {
            alert("Login failed");
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" sx={{ mb: 2 }}>
                Login
            </Typography>

            <TextField
                fullWidth label="Email" sx={{ mb: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                fullWidth label="Password" type="password" sx={{ mb: 2 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="contained" onClick={handleLogin}>
                Login
            </Button>
        </Container>
    );
}