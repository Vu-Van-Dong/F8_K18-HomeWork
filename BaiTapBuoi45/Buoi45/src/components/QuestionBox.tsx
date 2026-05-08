import { Box, Radio, Typography } from "@mui/material";
import type { QuestionI } from "../types";

interface Props {
    question: QuestionI;
    index: number;
    selectingIndex?: number;
    onAnswer: (optionIndex: number) => void;
    disabled: boolean;
}

function QuestionBox({ question, index, selectingIndex, onAnswer, disabled }: Props) {
    return (
        <Box className="questionCard">
            <Box className="questionTitle">
                <Box className="questionBadge">Câu {index}</Box>

                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {question.text}
                </Typography>
            </Box>

            <Box className="optionList">
                {question.options.map((option, optionIndex) => (
                    <Box
                        key={optionIndex}
                        className={`optionItem ${selectingIndex === optionIndex ? "selected" : ""}`}
                        onClick={() => {
                            if (!disabled) onAnswer(optionIndex);
                        }}
                    >
                        <Radio checked={selectingIndex === optionIndex} disabled={disabled} />
                        <Typography>{option}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default QuestionBox;