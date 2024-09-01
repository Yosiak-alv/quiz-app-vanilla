import { quizStore } from '@/stores/quizStore.js';
import { validate } from './utils.js';
import { showQuizComplete } from './result.js';
import { makeQuestions } from './questions.js';

export const submitQuiz = () => {
    const submit = document.querySelector(".submit-answer");
    submit.addEventListener("click", function () {
        let selectedBox, answerText;
        selectedBox = document.querySelector(".selected");
        const validationBox= document.querySelector(".select-prompt");
        if (submit.textContent === "Siguiente Pregunta") {
            makeQuestions(quizStore.quizChosen);
            return;
        }

        if (submit.textContent === "Ver Resultados") {
            showQuizComplete();
            return;
        }

        if (!selectedBox) {
            validationBox.style.visibility = "visible";
            return;
        }

        answerText = selectedBox.textContent.slice(1, selectedBox.textContent.length);

        selectedBox.classList.remove("selected");
        selectedBox.firstChild.classList.remove("selected-box");

        const isCorrect = validate(answerText);
        const statusClass = isCorrect ? "correct" : "invalid";
        const boxClass = isCorrect ? "correct-box" : "invalid-box";

        selectedBox.classList.add(statusClass);
        selectedBox.firstChild.classList.add(boxClass);
        validationBox.style.visibility = "hidden";

        if (isCorrect && selectedBox.classList.contains("correct")) {
            quizStore.incrementScore();
            console.log(quizStore.score);
        }

        submit.textContent = (quizStore.qCount >= quizStore.totalQuestions - 1) ? "Ver Resultados" : "Siguiente Pregunta";
    });
}