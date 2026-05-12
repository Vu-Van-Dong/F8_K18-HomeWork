import {
    createContext,
    useState,
    type ReactNode,
} from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

interface Props {
    children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}