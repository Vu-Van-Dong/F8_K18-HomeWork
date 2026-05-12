import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Content() {
    const context = useContext(ThemeContext);

    if (!context) return null;

    const { theme } = context;

    return (
        <main className={`content ${theme}`}>
            <h1>Chương 1: Sự khởi nguồn của Context API</h1>

            <p>
                Trong những ngày đầu của React, việc truyền dữ liệu từ component cha
                xuống component con sâu bên trong cây DOM là một cơn ác mộng.
            </p>

            <p>
                Hiện tượng này được gọi là <strong>Prop Drilling</strong>.
            </p>

            <blockquote>
                Context cung cấp một cách để truyền dữ liệu qua cây component mà không
                cần truyền props thủ công qua từng cấp.
            </blockquote>

            <p>
                Context API giúp việc chia sẻ dữ liệu giữa nhiều component trở nên dễ
                dàng hơn rất nhiều.
            </p>
        </main>
    );
}

export default Content;