import { Box, Button, Typography } from "@mui/material";
import type { QuestionI, SelectingOptionI } from "../types";

interface Props {
    questions: QuestionI[];
    selectingOption: SelectingOptionI;
    selectingQuestion: number;
    onPrev: () => void;
    onNext: () => void;
    onSelectQuestion: (index: number) => void;
}

function SideBar({
                     questions,
                     selectingOption,
                     selectingQuestion,
                     onPrev,
                     onNext,
                     onSelectQuestion,
                 }: Props) {
    return (
        <Box className="sideBar">
            <Box className="navButtons">
                <Button
                    variant="contained"
                    onClick={onPrev}
                    disabled={selectingQuestion === 0}
                >
                    Câu trước
                </Button>

                <Button
                    variant="contained"
                    onClick={onNext}
                    disabled={selectingQuestion === questions.length - 1}
                >
                    Câu tiếp
                </Button>
            </Box>

            <Typography sx={{ fontWeight: "bold", mt: 3 }}>
                DANH SÁCH CÂU HỎI
            </Typography>

            <Box className="questionList">
                {questions.map((question, index) => {
                    const isActive = selectingQuestion === index;
                    const isAnswered = selectingOption[question.id] !== undefined;

                    return (
                        <Button
                            key={question.id}
                            className={`
                questionNumber
                ${isActive ? "active" : ""}
                ${isAnswered ? "answered" : ""}
              `}
                            onClick={() => onSelectQuestion(index)}
                        >
                            {index + 1}
                        </Button>
                    );
                })}
            </Box>

            <Box className="legend">
                <p><span className="legendBox empty"></span> Chưa trả lời</p>
                <p><span className="legendBox answeredBox"></span> Đã trả lời</p>
                <p><span className="legendBox activeBox"></span> Đang chọn</p>
            </Box>
        </Box>
    );
}

export default SideBar;