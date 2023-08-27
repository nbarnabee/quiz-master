import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://opentdb.com/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getToken() {
    return apiClient.get(`/api_token.php?command=request`);
  },
  getQuestions(token = "") {
    if (token) {
      console.log(token);
      return apiClient.get(`api.php?amount=10&token=${token}`);
    } else return apiClient.get(`api.php?amount=10`);
  }
};
