import { quizStore } from "@/stores/quizStore"

export function quizOptionSelection() {
    const options = document.querySelectorAll(".option");
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function () {
            for (let option of options) {
                option.classList.remove("selected");
                option.firstChild.classList.remove("selected-box");
            }
            options[i].classList.add("selected");
            options[i].firstChild.classList.add("selected-box");
        });
    }
}

export const restartQuiz = () => {    
    const restartBtn = document.querySelector(".restart")
    restartBtn.addEventListener("click", function () {
        document.querySelector(".quiz-complete").classList.toggle("visible")
        document.querySelector(".start-menu").classList.toggle("visible")
        document.querySelector(".curr-subject").style.visibility = "hidden"
        quizStore.reset();
    })
}

export function validate(selected) {
    const question = quizStore.quizChosen.questions[quizStore.qCount];
    return (question.answer === selected);
}
