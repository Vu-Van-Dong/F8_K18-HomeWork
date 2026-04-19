import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";

export default function App() {
    const [isAuth, setIsAuth] = useState(
        !!localStorage.getItem("token")
    );

    return isAuth ? (
        <ProductPage onLogout={() => setIsAuth(false)} />
    ) : (
        <LoginPage onLogin={() => setIsAuth(true)} />
    );
}