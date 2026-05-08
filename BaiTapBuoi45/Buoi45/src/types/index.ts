export interface QuestionI {
    id: number;
    text: string;
    options: string[];
    correct: number;
}

export interface SelectingOptionI {
    [questionId: number]: number | undefined;
}