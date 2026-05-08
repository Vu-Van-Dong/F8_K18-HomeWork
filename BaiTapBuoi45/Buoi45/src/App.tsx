import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { HeaderBar, QuestionBox, SideBar } from "./components";
import type { QuestionI, SelectingOptionI } from "./types";

const EXAM_TIME = 10 * 60;

function App() {
  const questions: QuestionI[] = [
    {
      id: 1,
      text: "Khái niệm 'đường bộ' được hiểu như thế nào là đúng?",
      options: [
        "Đường, cầu đường bộ.",
        "Hầm đường bộ, bến phà đường bộ.",
        "Đường, cầu đường bộ, hầm đường bộ, bến phà đường bộ và các công trình phụ trợ.",
      ],
      correct: 2,
    },
    {
      id: 2,
      text: "Người lái xe được hiểu như thế nào trong các khái niệm dưới đây?",
      options: [
        "Là người điều khiển xe cơ giới.",
        "Là người điều khiển xe thô sơ.",
        "Là người điều khiển xe có súc vật kéo.",
      ],
      correct: 0,
    },
    {
      id: 3,
      text: "Dải phân cách được hiểu như thế nào là đúng?",
      options: [
        "Là bộ phận của đường để ngăn cách không cho xe vào nơi cấm.",
        "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt.",
        "Là bộ phận để phân tách phần đường xe chạy và hành lang an toàn.",
      ],
      correct: 1,
    },
    {
      id: 4,
      text: "Người tham gia giao thông đường bộ gồm những đối tượng nào?",
      options: [
        "Người điều khiển phương tiện giao thông.",
        "Người đi bộ, người dẫn dắt súc vật.",
        "Cả ý 1 và ý 2.",
      ],
      correct: 2,
    },
    {
      id: 5,
      text: "Tín hiệu đèn màu vàng có ý nghĩa gì?",
      options: [
        "Phải dừng lại trước vạch dừng.",
        "Được đi tiếp bình thường.",
        "Tăng tốc để vượt qua giao lộ.",
      ],
      correct: 0,
    },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectingOption, setSelectingOption] = useState<SelectingOptionI>({});
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectingQuestion = questions[questionIndex];

  const handleSubmit = useCallback(() => {
    alert("Nộp bài thành công!");

    setQuestionIndex(0);
    setSelectingOption({});
    setTimeLeft(EXAM_TIME);
    setIsSubmitted(false);
  }, []);

  useEffect(() => {
    if (isSubmitted) return;

    if (timeLeft <= 0) {
      setIsSubmitted(true);
      handleSubmit();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isSubmitted, handleSubmit]);

  const onAnswer = useCallback(
      (optionIndex: number) => {
        if (isSubmitted) return;

        setSelectingOption((prev) => ({
          ...prev,
          [selectingQuestion.id]: optionIndex,
        }));
      },
      [selectingQuestion.id, isSubmitted]
  );

  const onNext = useCallback(() => {
    if (questionIndex === questions.length - 1) return;
    setQuestionIndex(questionIndex + 1);
  }, [questionIndex, questions.length]);

  const onPrev = useCallback(() => {
    if (questionIndex === 0) return;
    setQuestionIndex(questionIndex - 1);
  }, [questionIndex]);

  const onSelectQuestion = useCallback((index: number) => {
    setQuestionIndex(index);
  }, []);

  return (
      <>
        <HeaderBar timeLeft={timeLeft} onSubmit={handleSubmit} />

        <Box className="container">
          <Grid container spacing={2}>
            <Grid size={8}>
              <QuestionBox
                  question={selectingQuestion}
                  index={questionIndex + 1}
                  selectingIndex={selectingOption[selectingQuestion.id]}
                  onAnswer={onAnswer}
                  disabled={isSubmitted}
              />
            </Grid>

            <Grid size={4}>
              <SideBar
                  questions={questions}
                  selectingOption={selectingOption}
                  selectingQuestion={questionIndex}
                  onPrev={onPrev}
                  onNext={onNext}
                  onSelectQuestion={onSelectQuestion}
              />
            </Grid>
          </Grid>
        </Box>
      </>
  );
}

export default App;