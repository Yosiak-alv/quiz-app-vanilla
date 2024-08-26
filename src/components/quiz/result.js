import { quizStore } from "@/stores/quizStore";

export function showQuizComplete() {
    document.querySelector(".question-screen").classList.toggle("visible");
    document.querySelector(".quiz-complete").classList.toggle("visible");
    document.querySelector(".final-score").textContent = quizStore.score;
    document.querySelector(".complete-question-total").textContent = quizStore.totalQuestions;
}
