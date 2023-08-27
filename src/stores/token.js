import { defineStore } from "pinia";
import TriviaService from "../services/TriviaService";

export const useTokenStore = defineStore("tokenStore", {
  state: () => ({
    token: ""
  }),
  actions: {
    async getNewToken() {
      try {
        const response = await TriviaService.getToken();
        this.token = response.data.token;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
