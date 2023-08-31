import { defineStore } from "pinia";
import TriviaService from "../services/TriviaService";

export const useQuestionStore = defineStore("questionStore", {
  state: () => ({
    token: "",
    questions: [],
    currentQuestion: "",
    currentAnswers: [],
    chosenAnswer: "",
    questionNumber: 0,
    questionAnswered: false
  }),
  actions: {
    async getNewToken() {
      try {
        const response = await TriviaService.getToken();
        this.token = response.data.token;
      } catch (error) {
        console.log(error);
      }
    },
    async getQuestions() {
      try {
        this.resetQuestions();
        const response = await TriviaService.getQuestions(this.token);
        this.questions = response.data.results;
        this.updateCurrentQuestion();
      } catch (error) {
        console.log(error);
      }
    },
    resetQuestions() {
      this.questions.length = 0;
      this.currentQuestion = "";
      this.questionNumber = 0;
    },
    checkAnswer() {
      if (this.chosenAnswer === this.currentQuestion.correct_answer) console.log("Correct");
      else console.log("Incorrect");
      this.advanceQuestionNum();
    },
    advanceQuestionNum() {
      this.questionNumber += 1;
      this.updateCurrentQuestion();
    },
    updateCurrentQuestion() {
      this.currentQuestion = this.questions[this.questionNumber];
      this.questionAnswered = false;
      this.chosenAnswer = "";
      this.updateCurrentAnswers();
    },
    updateCurrentAnswers() {
      this.currentAnswers.length = 0;
      this.currentQuestion.incorrect_answers.forEach((answer) => this.currentAnswers.push(answer));
      this.currentAnswers.push(this.currentQuestion.correct_answer);
      this.sortCurrentAnswers();
    },
    sortCurrentAnswers() {
      if (Number(this.currentAnswers[0]) && Number(this.currentAnswers[1]))
        this.currentAnswers.sort((a, b) => a - b);
      else {
        this.currentAnswers.sort();
        if (this.currentAnswers.length === 2) this.currentAnswers.reverse();
      }
    }
  }
});
