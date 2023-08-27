<script setup>
import { onMounted } from "vue";
import { useTokenStore } from "../stores/token";
import QuestionBox from "../components/QuestionBox.vue";

const tokenStore = useTokenStore();

onMounted(() => {
  tokenStore.getNewToken();
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
