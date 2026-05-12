import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Footer() {
    const context = useContext(ThemeContext);

    if (!context) return null;

    const { theme } = context;

    return (
        <footer className={`footer ${theme}`}>
            Bản quyền © 2026
        </footer>
    );
}

export default Footer;