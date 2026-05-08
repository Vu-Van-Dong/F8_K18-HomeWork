import type { Question } from "../types/question";

export const questions: Question[] = [
    {
        id: 1,
        question: "Khái niệm 'đường bộ' được hiểu như thế nào là đúng?",
        options: [
            "Đường, cầu đường bộ.",
            "Hầm đường bộ, bến phà đường bộ.",
            "Đường, cầu đường bộ, hầm đường bộ, bến phà đường bộ và các công trình phụ trợ.",
        ],
        correctAnswer: 2,
    },
    {
        id: 2,
        question: "Người điều khiển phương tiện giao thông đường bộ gồm những ai?",
        options: [
            "Người điều khiển xe cơ giới.",
            "Người điều khiển xe thô sơ.",
            "Người điều khiển xe cơ giới, xe thô sơ, xe máy chuyên dùng.",
        ],
        correctAnswer: 2,
    },
    {
        id: 3,
        question: "Người lái xe phải làm gì khi điều khiển xe qua đường giao nhau?",
        options: [
            "Tăng tốc để đi nhanh qua.",
            "Giảm tốc độ và chú ý quan sát.",
            "Bấm còi liên tục.",
        ],
        correctAnswer: 1,
    },
    {
        id: 4,
        question: "Khi gặp đèn tín hiệu màu đỏ, người tham gia giao thông phải làm gì?",
        options: [
            "Dừng lại trước vạch dừng.",
            "Được đi nếu đường vắng.",
            "Tăng tốc đi qua.",
        ],
        correctAnswer: 0,
    },
    {
        id: 5,
        question: "Khi tham gia giao thông, người lái xe phải mang theo giấy tờ gì?",
        options: [
            "Giấy phép lái xe.",
            "Đăng ký xe.",
            "Giấy phép lái xe, đăng ký xe và giấy tờ liên quan.",
        ],
        correctAnswer: 2,
    },
];