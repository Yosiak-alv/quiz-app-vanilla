import { getQuiz } from './questions';

export function displayQuestions(type) {
    document.querySelector(".start-menu").classList.toggle("visible");
    document.querySelector(".question-screen").classList.toggle("visible");
    setQuizHeader(type);
    getQuiz(type);
}

const setQuizHeader = (type) => {
    const options = document.querySelectorAll(".curr-subject");
    for (let option of options) {
        option.lastElementChild.innerHTML = type;
        option.style.visibility = "visible";
        switch (type) {
            case "HTML":
                option.firstElementChild.firstElementChild.src = "./assets/img/icon-html.svg";
                break;
            case "CSS":
                option.firstElementChild.firstElementChild.src = "./assets/img/icon-css.svg";
                break;
            case "JavaScript":
                option.firstElementChild.firstElementChild.src = "./assets/img/icon-js.svg";
                break;
            case "GitHub":
                option.firstElementChild.firstElementChild.src = "./assets/img/icon-github.svg";
                break;
            default:
                console.log("Invalid subject");
        }
    }
}