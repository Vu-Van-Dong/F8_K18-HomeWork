import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
    const context = useContext(ThemeContext);

    if (!context) return null;

    const { theme, toggleTheme } = context;

    return (
        <header className={`header ${theme}`}>
            <div className="logo">📖 Thư Viện Code</div>

            <button onClick={toggleTheme} className="theme-btn">
                {theme === "light" ? "🌙" : "☀️"}
            </button>
        </header>
    );
}

export default Header;