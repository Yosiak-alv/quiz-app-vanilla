export const quizStore = {
    quizChosen: null,
    qCount: -1,
    totalQuestions: 0,
    score: 0,

    reset() {
        this.quizChosen = null;
        this.qCount = -1;
        this.totalQuestions = 0;
        this.score = 0;
    },

    setQuizChosen(quiz) {
        this.quizChosen = quiz;
        this.totalQuestions = quiz.questions.length;
    },

    incrementQCount() {
        this.qCount++;
    },

    incrementScore() {
        this.score++;
    }
};