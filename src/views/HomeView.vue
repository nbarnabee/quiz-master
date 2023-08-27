<script setup>
import { onMounted, watchEffect } from "vue";
import TriviaService from "../services/TriviaService";
import { useTokenStore } from "../stores/token";
import QuestionBox from "../components/QuestionBox.vue";

const tokenStore = useTokenStore();
// const token = ref("");

onMounted(() => {
  watchEffect(async () => {
    try {
      const response = await TriviaService.getToken();
      // token.value = response.data.token;
      tokenStore.updateToken(response.data.token);
      console.log(tokenStore.token);
    } catch (error) {
      console.log(error);
    }
  });
});
</script>

<template>
  <main>
    <h1>Welcome to Quiz Master!</h1>
    <QuestionBox :token="tokenStore.token" />
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
