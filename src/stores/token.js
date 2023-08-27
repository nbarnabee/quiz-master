import { defineStore } from "pinia";

export const useTokenStore = defineStore("tokenStore", {
  state: () => ({
    token: ""
  }),
  actions: {
    updateToken(tokenValue) {
      this.token = tokenValue;
    }
  }
});
