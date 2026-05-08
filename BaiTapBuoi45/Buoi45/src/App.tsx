import { useEffect, useState } from "react";
import { questions } from "./data/questions";
import "./index.css";

const EXAM_TIME = 10 * 60;

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
      Array(questions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (isSubmitted) return;

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
        remainSeconds
    ).padStart(2, "0")}`;
  };

  const handleChooseAnswer = (optionIndex: number) => {
    if (isSubmitted) return;

    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = () => {
    alert("Nộp bài thành công!");

    setCurrentIndex(0);
    setAnswers(Array(questions.length).fill(null));
    setTimeLeft(EXAM_TIME);
    setIsSubmitted(false);
  };

  return (
      <div className="app">
        <header className="header">
          <div>
            <h1>Ôn Thi GPLX</h1>
            <p>Đề thi ngẫu nhiên số 1</p>
          </div>

          <div className="header-right">
            <div className="timer">⏱ {formatTime(timeLeft)}</div>

            <button className="submit-btn" onClick={handleSubmit}>
              Nộp bài
            </button>
          </div>
        </header>

        <main className="main">
          <section className="question-card">
            <div className="question-title">
              <span>Câu {currentQuestion.id}</span>
              <h2>{currentQuestion.question}</h2>
            </div>

            <div className="options">
              {currentQuestion.options.map((option, index) => (
                  <label
                      key={index}
                      className={`option ${
                          answers[currentIndex] === index ? "selected" : ""
                      }`}
                  >
                    <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        checked={answers[currentIndex] === index}
                        disabled={isSubmitted}
                        onChange={() => handleChooseAnswer(index)}
                    />

                    {option}
                  </label>
              ))}
            </div>
          </section>

          <aside className="sidebar">
            <div className="nav-buttons">
              <button onClick={handlePrev} disabled={currentIndex === 0}>
                ‹ Câu trước
              </button>

              <button
                  onClick={handleNext}
                  disabled={currentIndex === questions.length - 1}
              >
                Câu tiếp ›
              </button>
            </div>

            <h3>DANH SÁCH CÂU HỎI</h3>

            <div className="question-list">
              {questions.map((question, index) => (
                  <button
                      key={question.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`
                  question-number
                  ${currentIndex === index ? "active" : ""}
                  ${answers[index] !== null ? "answered" : ""}
                `}
                  >
                    {question.id}
                  </button>
              ))}
            </div>

            <div className="legend">
              <p>
                <span className="box empty"></span> Chưa trả lời
              </p>
              <p>
                <span className="box answered-box"></span> Đã trả lời
              </p>
              <p>
                <span className="box active-box"></span> Đang chọn
              </p>
            </div>
          </aside>
        </main>
      </div>
  );
}