import { quizSelector } from "./type"
import { submitQuiz } from "./submit";
import { restartQuiz, quizOptionSelection } from "./utils";

export const initQuiz = () => {
    quizSelector();
    quizOptionSelection();
    submitQuiz();
    restartQuiz();
}