import { defineStore } from "pinia";
import TriviaService from "../services/TriviaService";

export const useQuestionStore = defineStore("questionStore", {
  state: () => ({
    token: "",
    questions: []
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
        this.questions.length = 0;
        const response = await TriviaService.getQuestions(this.token);
        this.questions = response.data.results;
        console.log(this.questions);
      } catch (error) {
        console.log(error);
      }
    }
  }
});
