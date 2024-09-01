import data from '@/data/data.json';
import { quizStore } from '@/stores/quizStore';

const submit = document.querySelector(".submit-answer");

export function getQuiz(type) {
    for (const quiz of data.quizzes) {
        if (quiz.title === type) {
            quizStore.setQuizChosen(quiz);
            document.querySelector(".question-total").textContent = quizStore.totalQuestions;
        }
    }
    makeQuestions(quizStore.quizChosen);
}

export function makeQuestions(quizChoice) {
    quizStore.incrementQCount();
    document.querySelector(".question-number").textContent = (quizStore.qCount + 1);
    submit.textContent = "Enviar";

    const options = document.querySelectorAll(".option");

    document.querySelector(".question").textContent = quizChoice.questions[quizStore.qCount].question;

    for (let option of options) {
        option.classList.remove("selected", "invalid", "correct");
    }

    for (let i = 0; i < options.length; i++) {
        const optionBox = ["A", "B", "C", "D"];
        options[i].innerHTML = `<div class='option-box'>${optionBox[i]}</div>`;
        options[i].append(quizChoice.questions[quizStore.qCount].options[i]);
    }
}