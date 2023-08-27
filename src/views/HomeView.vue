<script setup>
import { ref, onMounted, watchEffect } from "vue";
import TriviaService from "../services/TriviaService";
import QuestionBox from "../components/QuestionBox.vue";
const token = ref("");

onMounted(() => {
  watchEffect(async () => {
    try {
      const response = await TriviaService.getToken();
      token.value = response.data.token;
    } catch (error) {
      console.log(error);
    }
  });
});
</script>

<template>
  <main>
    <h1>Welcome to Quiz Master!</h1>
    <QuestionBox :token="token" />
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
