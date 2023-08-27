<script setup>
import { onMounted } from "vue";
import { useTokenStore } from "../stores/token";
import TriviaService from "../services/TriviaService";
import QuestionBox from "../components/QuestionBox.vue";
import { storeToRefs } from "pinia";
const tokenStore = useTokenStore();
const { token } = storeToRefs(tokenStore);

onMounted(async () => {
  try {
    const response = await TriviaService.getToken();
    token.value = response.data.token;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <main>
    <h1>Welcome to Quiz Master!</h1>
    <QuestionBox />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  gap: 4rem;
  align-items: center;
}
</style>
