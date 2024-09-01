import { displayQuestions } from "./display";

export const quizSelector = () => {
    const quizBtns = document.querySelectorAll(".quiz-type");
    quizBtns.forEach(button => {
        button.addEventListener("click", (event) => {
            const quizType = event.currentTarget.id; 
            displayQuestions(quizType);
        });
    });
}
